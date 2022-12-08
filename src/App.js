import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Main/Layout';
import Home from './Page/Home/Home';
import MyProjects from './Page/MyProjects/MyProjects';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [

        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/myProjects',
          element: <MyProjects></MyProjects>
        }
      ]
    }
  ])
      
  return (
    <div className="App">

        <RouterProvider router={router}>

        </RouterProvider>
    </div>
  );
}

export default App;
