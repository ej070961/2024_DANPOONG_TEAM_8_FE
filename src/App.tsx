import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import { navigations } from './constant/navigations';
import Splash from './pages/splash/Splash.tsx';
import Login from './pages/login/Login.tsx';
import MissionPage from './pages/mission/MissionPage.tsx';
import MissionCompleteDetailPage from './pages/mission/MissionCompleteDetailPage.tsx';
import MissionCompletePage from './pages/mission/MissionCompletePage.tsx';
import MissionRecordWritePage from './pages/mission/MissionRecordWritePage.tsx';
import Onboarding from './pages/onboarding/Onboarding.tsx';
import Home from './pages/home/Home.tsx';
import GoalSelectConfirmPage from './pages/goal/GoalSelectConfirmPage.tsx';
import GoalSelectPage from './pages/goal/GoalSelectPage.tsx';
import GoalPreCheckPage from './pages/goal/GoalPreCheckPage.tsx';
import InitialSetup from './pages/initialSetup/InitialSetup.tsx';
import ChatbotPage from './pages/chat/ChatbotPage.tsx';
import SupportPage from './pages/support/SupportPage.tsx';
import Auth from './pages/auth/Auth.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AnalysisResult from './pages/goal/AnalysisResult.tsx';
import GoalCompletePage from './pages/goal/GoalCompletePage.tsx';
import MyPage from './pages/mypage/MyPage.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

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
          path: navigations.GOAL,
          element: <GoalSelectPage />,
        },
        {
          path: navigations.GOAL_CONFIRM,
          element: <GoalSelectConfirmPage />,
        },
        {
          path: navigations.GOAL_PRE_CHECK,
          element: <GoalPreCheckPage />,
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
          path: navigations.CHAT,
          element: <ChatbotPage />,
        },
        {
          path: navigations.INITIALSETUP,
          element: <InitialSetup />,
        },
        {
          path: navigations.SUPPORT,
          element: <SupportPage />,
        },
        {
          path: navigations.AUTH,
          element: <Auth />,
        },
        {
          path: `${navigations.ANALYSISRESULT}/:checkListId`,
          element: <AnalysisResult />,
        },
        {
          path: navigations.GOAL_COMPLETE,
          element: <GoalCompletePage />,
        },
        {
          path: navigations.MY,
          element: <MyPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;
