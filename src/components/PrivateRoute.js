import { Navigate, Route } from 'react-router-dom';
import getEmail from './Auth';

export default function PrivateRoute({ children }) {
    let isLoggedIn = getEmail();

    return isLoggedIn ? children : <Navigate to="/login" />
}