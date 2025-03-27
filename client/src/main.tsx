import  ReactDOM from 'react-dom/client'
import './App.css'
import './App.tsx'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Error from './pages/Error.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element: <Home/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
