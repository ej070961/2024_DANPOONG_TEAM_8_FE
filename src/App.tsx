import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import { navigations } from './constant/navigations';
import Splash from './pages/Splash/Splash';
import Login from './pages/Login/Login';
import MissionPage from './pages/mission/MissionPage.tsx';
import MissionCompleteDetailPage from './pages/mission/MissionCompleteDetailPage.tsx';
import MissionCompletePage from './pages/mission/MissionCompletePage.tsx';
import MissionRecordWritePage from './pages/mission/MissionRecordWritePage.tsx';
import Onboarding from './pages/Onboarding/Onboarding';
import Home from './pages/Home/Home';
import InitialSetup from './pages/InitialSetup/InitialSetup.tsx';

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
          path: `${navigations.MISSION_RECORD_WRITE}/:missionId`,
          element: <MissionRecordWritePage />,
        },
        {
          path: navigations.MISSION_COMPLETE,
          element: <MissionCompletePage />,
        },
        {
          path: `${navigations.MISSION_COMPLETE_DETAIL}/:missionId`,
          element: <MissionCompleteDetailPage />,
        },
        {
          path: navigations.ONBOARDING,
          element: <Onboarding />,
        },
        {
          path: navigations.HOME,
          element: <Home />,
        },
        {
          path: navigations.INITIALSETUP,
          element: <InitialSetup />,
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
