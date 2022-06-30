import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
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

export const getAllQuizzers = createAsyncThunk(
  'quizzers/getAllQuizzers',
  async () => {
    const path = process.env.REACT_APP_PATH_API;
    const response = await axios.get<QuizState[]>(path + '/quiz');
    console.log(response.data);
    return response.data;
  }
);

export const quizzersSlice = createSlice({
  name: 'quizzers',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      state.quizzersList = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllQuizzers.fulfilled, (state, action) => {
      return { quizzersList: action.payload };
    });
  },
});

export const { adicionar } = quizzersSlice.actions;

export const useSelectorQuiz = () =>
  useSelector((state: RootState) => state.quizzers.quizzersList);

export default quizzersSlice.reducer;
