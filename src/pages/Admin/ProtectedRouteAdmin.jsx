import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRouteAdmin({children}) {
    const token = localStorage.getItem("admin_token");
    if ((!token)) {
        return <Navigate to={'/login'} />;
    }
  return (
    <>
    {children || <Outlet />}
    </>
  )
}

export default ProtectedRouteAdmin