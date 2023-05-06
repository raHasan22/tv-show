import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Booking from './Booking/Booking';

function App() {
  
const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path: '/bookings',
          element : <Booking></Booking>
        }
      ]
    }
  ])
  


  return (
    
      <RouterProvider
      router={router}
      ></RouterProvider>
      
    
  );
}

export default App;
