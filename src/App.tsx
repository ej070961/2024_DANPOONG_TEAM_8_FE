import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import { navigations } from './constant/navigations';
import Splash from './pages/Splash/Splash';
import Login from './pages/Login/Login';
import MissionPage from './pages/mission/MissionPage.tsx';
import MissionCompleteDetailPage from './pages/mission/MissionCompleteDetailPage.tsx';
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
          path: navigations.MISSION,
          element: <MissionPage />,
        },
        {
          path: `${navigations.MISSION_COMPLETE_DETAIL}/:missionId`,
          element: <MissionCompleteDetailPage />,
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
