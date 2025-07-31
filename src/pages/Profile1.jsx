import '../css/pages/Profile1.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigationbar from '../components/Navigationbar';

function Profile1({formdata, setFormdata}){

    
    const navigate = useNavigate();    

    const handledata = (e) => {
        const {name, value} = e.target;
        setFormdata(prev => ({...prev, [name] :value}));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/resume50');
    };

    return(
        <>
            <h2>Profile details</h2>
            <div className='profilecontent'>
                <div className='navbar'>
                    <Navigationbar/>
                </div>
                <div className='formcontent'>
                    <form id='resform' className='form1' onSubmit={handlesubmit}>
                        <div>
                            <label for = "fullname"> Full name: </label><br/>
                            <input type="text" placeholder="Enter your name" name='fullname'
                             value={formdata.fullname} onChange={handledata} />
                        </div>
                        <div>
                            <label for = "job">Job role: </label><br/>
                            <input type="text" placeholder="Enter your current job role" name = 'job'
                             value={formdata.job} onChange={handledata} />
                        </div>
                        <div>
                            <label for = "location">Location: </label><br/>
                            <input type="text" placeholder="Enter your location" name='location'
                            value={formdata.location} onChange={handledata} />
                        </div>
                        <div>
                            <label for = "mobile">Mobile number: </label><br/>
                            <input type="tel" pattern="[0-9]{10}" placeholder="Enter your mobile number" name='mobile'
                            value={formdata.mobile} onChange={handledata}/>
                        </div>
                        <div>
                            <label for = "emailid">EmailID: </label><br/>
                            <input type="email" placeholder="Enter your email address" name='emailid'
                            value={formdata.emailid} onChange={handledata} />
                        </div>
                    </form>
                </div>
            </div>
            <div className='formbutton'>
                <button onClick={() => navigate('/')} >Back</button>
                <button type='submit' form='resform'>Continue</button>
            </div>
            
            
        </>
    )
}

export default Profile1