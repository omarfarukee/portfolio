import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Main/Layout';
import Home from './Page/Home/Home';
import MyProjects from './Page/MyProjects/MyProjects';
import ProjectsDetails from './Page/MyProjects/ProjectDetails/ProjectsDetails';
import HomesFoodDetails from './Page/MyProjects/HomesFoodDetails/HomesFoodDetails';
import Best from './Page/MyProjects/Best/Best';
import Blog from './Blog/Blog';

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
        },
        {
          path: '/frenzyDetails',
          element: <ProjectsDetails></ProjectsDetails>
        },
        {
          path: '/homesDetails',
          element: <HomesFoodDetails></HomesFoodDetails>
        },
        {
          path: '/best',
          element: <Best></Best>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
      
  return (
    <div className="App">

        <RouterProvider router={router}>

        </RouterProvider>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
