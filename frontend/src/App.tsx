// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Layout from './layout';
import { PageProvider } from './contexts/PageContext';
import Searchbox from './components/Navbar/Searchbox';
import Menubar from './components/Navbar/Menubar';

const navbarItemsList = {
  Searchbox: <Searchbox key="searchbox" />,
  Menubar: <Menubar key="menubar" />,
};

const routes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
    exact: true,
    navbarItems: [navbarItemsList.Searchbox, navbarItemsList.Menubar],
  },
  {
    name: 'Signup',
    path: '/signup',
    element: Signup,
    navbarItems: [navbarItemsList.Menubar],
  },
  {
    name: 'Login',
    path: '/login',
    element: Login,
    navbarItems: [navbarItemsList.Menubar],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PageProvider page={route.name} navbarItems={route.navbarItems}>
                <Layout />
              </PageProvider>
            }
          >
            <Route index element={<route.element />} />
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
