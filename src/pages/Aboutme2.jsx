import { useNavigate } from "react-router-dom"
import '../css/pages/Aboutme2.css'
import Navigationbar from "../components/Navigationbar";

function Aboutme2({formdata, setFormdata}){

    const navigate = useNavigate();

    const handledata = (e) => {
        const {name,value} = e.target;
        setFormdata(prev => ({...prev,[name] : value}));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/resume75');
    };

    return(
        <>
            <h2>About me</h2>
            <div className="profilecontent" style={{alignItems:'start'}}>
                <div className="navbar">
                    <Navigationbar/>
                </div>
                <div className="formcontent1">
                <form id="resform2" onSubmit={handlesubmit} className="form2">
                    <div>
                        <label for = "summary">Profile summary:</label><br/>
                        <textarea name="summary" placeholder="Describe yourself in few lines..." 
                        value={formdata.summary} onChange={handledata} />
                    </div>
                    <div>
                        <label for ="skills">Skills:(eg:Python, HTML......)</label><br/>
                        <input type="text" placeholder="Enter the skills you know" name="skills"
                        value={formdata.skills} onChange={handledata} style={{width:'730px'}}/>
                    </div> 
                </form>          
                </div>
            </div>
            <div className="formbutton">
                <button onClick={() => navigate('/resume25')}> Back </button>
                <button type="submit" form="resform2">Continue </button>
            </div>
            
        </>
    )
}

export default Aboutme2