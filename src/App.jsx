import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router-dom';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import Layout from './pages/Admin/Dashboard/Layout';
import ProtectedRouteAdmin from './pages/Admin/ProtectedRouteAdmin';
import AddCar from './pages/AddCar';
import EditCar from './pages/EditCar';
import Cart from './pages/Cart';




function App() {
  const elements = useRoutes([
    {path: 'login', element: <Login />},
    {path: '/', 
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <ProtectedRouteAdmin> <Dashboard /> </ProtectedRouteAdmin>},
      { path: 'add-car', element: <ProtectedRouteAdmin> <AddCar /> </ProtectedRouteAdmin>},
      { path: 'edit-car/:id', element: <ProtectedRouteAdmin> <EditCar /> </ProtectedRouteAdmin>},
      { path: 'cart', element: <ProtectedRouteAdmin> <Cart /> </ProtectedRouteAdmin>},
    ],
  },
  ]);
  return elements;
}

export default App
