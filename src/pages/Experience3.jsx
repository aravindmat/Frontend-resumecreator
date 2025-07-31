import { useNavigate } from "react-router-dom"
import Navigationbar from "../components/Navigationbar";
import '../css/pages/Experience3.css'

function Experience3({formdata, setFormdata}){

    const navigate = useNavigate();
    const handledata = (e) => {
        const{name, value} = e.target;
        setFormdata(prev => ({...prev, [name] : value}));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/resume100');
    };

    return(
        <>
            <h2>Work experience </h2>
            <div className="profilecontent" style={{alignItems:'start'}}>
                <div className="navbar" >
                    <Navigationbar/>
                </div>
                <div className="formcontent3">
                    <form id="resform3" className="form3" onSubmit={handlesubmit}>
                        <div>
                           <label for="currentjob">Job role:</label><br/>
                           <input type="text" value={formdata.currentjob} name="currentjob" onChange={handledata}
                           placeholder="Enter your current job designation..." /> 
                        </div>
                        <div>
                           <label for = "companyname">Company name: </label><br/>
                           <input type="text" value={formdata.companyname} name="companyname" onChange={handledata} 
                           placeholder="Enter the company name you work at..." />    
                        </div>
                        <div>
                           <label for="joblocation">Job location: </label><br/>
                           <input type="text" value={formdata.joblocation} name="joblocation" onChange={handledata}
                           placeholder="Enter the job location..." />    
                        </div> 
                        <div>
                            <label for="jobdescription"> Job description: </label><br/>
                            <textarea value={formdata.jobdescription} name="jobdescription" onChange={handledata}
                            placeholder="Enter the job description of your work" />
                        </div>
                        <div>
                            <div style={{marginBottom:'24px'}}>
                                <label for="startdate">Start date: </label><br/>
                                <input type="month" value={formdata.startdate} name="startdate" onChange={handledata} />
                            </div>
                            <div>
                                <label htmlFor="enddate" style={{maxWidth:'500px', display:'block', whiteSpace:'normal', wordWrap:'break-word'}}>End date:<strong style={{fontSize:'16px'}}>(mention 'current' if you are currently working or if not working mention date in 'Monthname year' format) </strong> </label>
                                <input type="text" value={formdata.enddate} name="enddate" onChange={handledata} />
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div className="formbutton">
                <button onClick={() => navigate('/resume50')}>Back</button>
                <button type="submit" form="resform3">Continue</button>    
            </div>
            
        </>
    )
}

export default Experience3