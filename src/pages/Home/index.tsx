import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import './index.scss';

interface Quiz {
  id: string;
  title: string;
  questions?: Question[];
}

interface Question {
  id: string;
  question: string;
  answers: string[];
}

export const Home = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/quiz',
      responseType: 'json',
    })
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => console.error(error.response.body));
  }, []);

  async function responderQuiz(event: any) {
    console.log(event);
  }

  return (
    <main>
      <div className="item-group">
        <div className="item-group2">
          {quizzes.map((value, index, array) => (
            // <div className="item">
            // </div>
            <Card
              key={value.title + value.id}
              title={value.title}
              link={{ to: '/quiz/' + value.id, name: 'Iniciar' }}
            />
          ))}
          {quizzes.length % 2 !== 0 && <Card />}
        </div>
      </div>
    </main>
  );
};
