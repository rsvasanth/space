import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './app/login/page'; // Your login page component


const router = createBrowserRouter([
    
  {
    path: '/login',
    element: <LoginPage />, // Bypasses the layout and protection
  }
]);

export default router;
