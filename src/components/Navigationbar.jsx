import { useLocation, useNavigate } from 'react-router-dom'
import '../css/others/Navigationbar.css'
import { useState } from 'react';


function Navigationbar(){

    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        {name:'Profile', route:'/resume25'},
        {name:'About me', route:'/resume50'},
        {name:'Experience', route:'/resume75'},
        {name:'Education', route:'/resume100'}
    ];

    return(
        <>
            <div className="navcontent" >
                {tabs.map((tab) => {
                    const isActive = location.pathname === tab.route;
                    return(
                        <div key={tab.name} className='nav1' onClick={() => navigate(tab.route)}
                        style={{
                            backgroundColor: isActive ? '#4b4a4a' : '#f5f5f5',
                            color: isActive? '#f5f5f5':'#222222',
                            border: isActive?'3.5px solid #f5f5f5':'3.5px solid #4b4a4a'
                        }}>
                    <p>{tab.name}</p>
                 </div>
                    );  
                })}
            </div>
        </>
    )
}

export default Navigationbar