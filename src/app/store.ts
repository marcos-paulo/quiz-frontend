import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import quizzersReducer from '../features/quiz/quizzersSlice';

export const store = configureStore({
  reducer: { quizzers: quizzersReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
