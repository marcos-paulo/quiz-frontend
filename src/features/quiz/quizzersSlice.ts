import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface QuizzersState {
  quizzersList: QuizState[];
}

export interface QuizState {
  id: string;
  title: string;
  questions?: QuestionState[];
}

export interface QuestionState {
  id: string;
  question: string;
  answers: string[];
  answerRight?: string;
  isAnswerRight?: boolean;
}

const initialState: QuizzersState = {
  quizzersList: [],
};

export const quizzersSlice = createSlice({
  name: 'quizzers',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      console.log(action.payload);
      state.quizzersList = action.payload;
    },
  },
});

export const { adicionar } = quizzersSlice.actions;

export const selectorQuiz = (state: RootState) => state.quizzers.quizzersList;

export default quizzersSlice.reducer;
