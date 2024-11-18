import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import { navigations } from './constant/navigations';
import Splash from './pages/Splash/Splash';
import Login from './pages/Login/Login';
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
