import { Route } from 'react-router-dom';
import { LayoutHome } from '../layouts/LayoutHome';
import { Home } from '../pages/Home';
// import { Route } from 'react-router-dom';
// import { LayoutHome } from '../layouts/LayoutHome';
// import { Home } from '../pages/Home';
// import { Teste } from '../pages/teste';

const authRoutes = () => (
  <Route path="/" element={<LayoutHome />}>
    <Route index element={<Home />} />
  </Route>
  // <Route path="/" element={< />} />
);

export { authRoutes };
