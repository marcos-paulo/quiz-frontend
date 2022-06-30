import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppThunkDispatch } from '../../app/store';
import { useSelectorQuiz } from '../../features/quiz/quizzersSlice';

interface Quiz {
  id: string;
  title: string;
  questions?: Question[];
}

interface Question {
  id: string;
  question: string;
  answers: string[];
  answerRight?: string;
  isAnswerRight?: boolean;
}

interface confirmAnswer {
  questionId: string;
  confirmAnswer: string;
  isAnswerRight: boolean;
}

type QuizParams = {
  id: string;
};
export const AnswerQuiz = () => {
  const params = useParams<QuizParams>();
  const quizzers = useSelectorQuiz();
  const dispatch: AppThunkDispatch = useDispatch();

  // eslint-disable-next-line
  const [quiz, setQuiz] = useState<Quiz>();

  // eslint-disable-next-line
  useEffect(() => {
    axios
      .get<Quiz>('http://localhost:3001/quiz/' + params.id)
      .then((response) => {
        const resposta = response.data;
        resposta.questions?.map((question) => {
          question.answerRight = '';
          question.isAnswerRight = false;
          question.answers.map((answer) => {});
        });
        setQuiz(resposta);
      })
      .catch((erro) => console.log(erro));
  }, []);

  function questionResponseHandler(questionId: string, answer: string) {
    axios
      .post<confirmAnswer>('http://localhost:3001/quiz/' + params.id, {
        questionId,
        confirmAnswer: answer,
      })
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);

        if (quiz && quiz.questions) {
          let temp = quiz.questions.map((value, index) => {
            if (value.id === questionId) {
              return {
                ...value,
                answerRight: responseData.confirmAnswer,
                isAnswerRight: responseData.isAnswerRight,
              };
            }
            return value;
          });

          setQuiz({ ...quiz, questions: [...temp] });
        }
      });
  }

  return (
    <div>
      <h1>{quiz?.title}</h1>
      <ul>
        {quiz?.questions?.map((question, index) => {
          return (
            <li key={question.id + index}>
              <h3>{question.question}</h3>
              <ul>
                {question.answers.map((answer, index) => {
                  return (
                    <li key={question.id + index}>
                      <button
                        onClick={() =>
                          questionResponseHandler(question.id, answer)
                        }
                        disabled={!!question.answerRight}
                      >
                        {answer}
                      </button>
                    </li>
                  );
                })}
                <div>
                  {quiz?.questions?.[index]?.answerRight
                    ? 'Você respondeu ' +
                      quiz?.questions?.[index]?.answerRight +
                      (quiz?.questions?.[index]?.isAnswerRight
                        ? ' e você acertou!'
                        : ' mas você não acertou!')
                    : ''}
                </div>
              </ul>
              <div className="confirm-answer"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
