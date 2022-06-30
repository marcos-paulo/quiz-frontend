import { BrowserRouter } from 'react-router-dom';
import { SystemRoutes } from './routes';

const App = () => (
  <BrowserRouter>
    <SystemRoutes />
  </BrowserRouter>
);

export default App;
