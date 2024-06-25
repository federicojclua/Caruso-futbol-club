import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../../components/context/AuthProvider";

const AdminRoute = ({ children }) => {
    const { isLoggedIn, user } = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to="/Admin" />;
    }

    if (user.role !== 'admin') {
        return <Navigate to="/principal" />;
    }

    return children;
};


export default AdminRoute;