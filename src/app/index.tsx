import React from 'react'
import AppRoutes from './providers/app-routes';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
    return (
        <div>
            <AppRoutes />
            <ToastContainer />
        </div>
    )
}

export default App;