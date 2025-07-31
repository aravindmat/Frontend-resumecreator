import { useNavigate } from 'react-router-dom'
import '../css/others/Templatesection.css'

function Templatesection({name, image}){

    const navigate = useNavigate();

    const handleTemplate = () => {
        const path = name.toLowerCase();
        navigate(`/resume/${path}`);
    };
    

    return(
        <>
            <div className='templatecomponent'>
                <img src={image} alt = "template preview" />
                <p>{name}</p>
                <button onClick={handleTemplate}>Use template</button>
            </div>
        </>
    )
}

export default Templatesection