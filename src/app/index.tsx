import React from 'react'
import AppRoutes from './providers/app-routes';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <AppRoutes />
            <ToastContainer />
        </React.Fragment>
    )
}

export default App;