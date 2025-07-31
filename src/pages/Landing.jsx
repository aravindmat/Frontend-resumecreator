import '../css/pages/Landingstyles.css'
import previewres from '../resources/previewres.png'
import previewres1 from '../resources/resume-creator-1.png'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

function Landing(){

    const navigate = useNavigate();
    return(
        <>
            <Header/>
            <div className='content'>
                <div className='leftcontent'>
                    <h1>CRAFT YOUR RESUME NOW <br></br> <span>Fast, Easy & Effective </span></h1>
                    <button onClick={() => navigate('/resume25')}>Build your resume</button>
                </div>
                <div className='preview-img'>
                    <img src={previewres1} />
                </div>
            </div>
            
        </>
    )
}

export default Landing