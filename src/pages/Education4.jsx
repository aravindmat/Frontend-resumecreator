import { useNavigate } from "react-router-dom"
import Navigationbar from "../components/Navigationbar";


function Education4({formdata, setFormdata}){

    const navigate = useNavigate();

    const handlechange = (e) => {
        const {name, value} = e.target;
        setFormdata(prev => ({...prev , [name]:value}));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/preresume');
    };

    return(
        <>
            <h2>Education details</h2>
            <div className="profilecontent" style={{alignItems:'start'}}>
                <div className="navbar">
                    <Navigationbar/>
                </div>
                <div className="formcontent3">
                    <form id="resform4" className="form3" onSubmit={handlesubmit}>
                        <div>
                            <label for='degree'>Degree name:</label><br/>
                            <input type="text" name="degree" value={formdata.degree} onChange={handlechange}
                            placeholder="Enter your latest graduation degree..." />
                        </div>
                        <div>
                            <label for="college">College/University name</label><br/>
                            <input type="text" name="college" value={formdata.college} onChange={handlechange}
                            placeholder="Enter your college/university name..." />
                        </div>
                        <div>
                            <label for="collegelocation">College/University location:</label><br/>
                            <input type="text" name="collegelocation" value={formdata.collegelocation} onChange={handlechange} placeholder="Enter your college/university location..." />
                        </div>
                        <div>
                            <label for='start'>Start year:</label><br/>
                            <input type="number" name="start" value={formdata.start} onChange={handlechange}
                            min="1980" max="2030" />
                        </div>
                        <div>
                            <label for='end'>Completion year:</label><br/>
                            <input type="number" name="end" value={formdata.end} onChange={handlechange}
                            min="1980" max="2030" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="formbutton">
                <button onClick={() => navigate('/resume75')}>Back</button>
                <button type="submit" form="resform4">Show preview</button>
            </div>
            
        </>
    )
}

export default Education4