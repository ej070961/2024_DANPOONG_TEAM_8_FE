import GlobalStyle from './styles/GlobalStyle';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
