import { fetchUser } from 'app/store/async-actions'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/redux'
import Footer from 'widgets/footer/footer'
import Navigation from 'widgets/navigation/navigation'

const PageLayout: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if(!user) {
            dispatch(fetchUser());
        }
    }, [])
    
    return (
        <div>
            <Navigation />  
            <Outlet />
            <Footer />
        </div>
    )
}

export default PageLayout;