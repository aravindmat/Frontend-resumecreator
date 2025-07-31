import '../css/others/Header.css'
import {useNavigate} from 'react-router-dom'

function Header(){

    const navigate = useNavigate();

    return(
        <>
            <div className='headercontent'>
                <p style={{fontFamily:'-moz-initial', fontSize: '18px', margin:'0px', cursor: 'pointer'}}
                onClick={() => navigate('/')}>C R E A T O R</p>
                <div className='tab'>
                    <p onClick={() => navigate('/')}>Home</p>
                    <p onClick={() => navigate('/template')}>Resume template</p>
                    <p onClick={() => navigate('/about')}>About</p>
                    <p onClick={() => navigate('/contact')}>Contact</p>
                </div>
            </div>
            
        </>
    )
}

export default Header