import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'widgets/footer/footer'
import Navigation from 'widgets/navigation/navigation'

const PageLayout: React.FC = () => {
    return (
        <div>
            <Navigation />  
            <Outlet />
            <Footer />
        </div>
    )
}

export default PageLayout;