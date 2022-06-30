import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppThunkDispatch } from '../../app/store';
import { Card } from '../../components/Card';
import {
  getAllQuizzers,
  useSelectorQuiz,
} from '../../features/quiz/quizzersSlice';
import './index.scss';

export const Home = () => {
  const quizzers = useSelectorQuiz();
  const dispatch: AppThunkDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuizzers());
  }, []);

  return (
    <main>
      <div className="item-group">
        <div className="item-group2">
          {quizzers.map((value, index, array) => (
            <Card
              key={value.title + value.id}
              title={value.title}
              link={{ to: '/quiz/' + value.id, name: 'Iniciar' }}
            />
          ))}
          {quizzers.length % 2 !== 0 && <Card />}
        </div>
      </div>
    </main>
  );
};
