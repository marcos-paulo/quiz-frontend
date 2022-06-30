import { Navigate, Route } from 'react-router-dom';
import { LayoutHome } from '../layouts/LayoutHome';
import { AnswerQuiz } from '../pages/AnswerQuiz';
import { Home } from '../pages/Home';

const appRoutes = () => {
  return (
    <Route path="/quiz" element={<LayoutHome />}>
      <Route index element={<Home />} />
      <Route path=":id" element={<AnswerQuiz />} />
    </Route>
  );
};

const defaultAppRoutes = () => (
  <Route path="*" element={<Navigate to="/quiz" />} />
);

export { appRoutes, defaultAppRoutes };
