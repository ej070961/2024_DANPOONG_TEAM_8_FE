import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import { navigations } from './constant/navigations';
import Splash from './pages/Splash/Splash';
import Login from './pages/Login/Login';
import Onboarding from './pages/Onboarding/Onboarding';
import Home from './pages/Home/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: navigations.ROOT,
      element: <Layout />,
      children: [
        {
          path: navigations.SPLASH,
          element: <Splash />,
        },
        {
          path: navigations.LOGIN,
          element: <Login />,
        },
        {
          path: navigations.ONBOARDING,
          element: <Onboarding />,
        },
        {
          path: navigations.ONBOARDING,
          element: <Onboarding />,
        },
        {
          path: navigations.HOME,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
