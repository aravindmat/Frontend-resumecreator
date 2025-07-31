import { useNavigate } from 'react-router-dom'
import '../css/pages/Preview.css'
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function Preview({formdata}){

    const navigate = useNavigate();
    const pdfref = useRef();

    const handledownload = () => {
        const opt = {
            margin : 0,
            filename : 'resume-creator.pdf',
            image: {type: 'jpeg', quality: 1},
            pagebreak: { mode: ['avoid-all'] },
            html2canvas : {scale:2, useCORS: true, allowTaint: true},
            jsPDF: {unit:'px', format:[794,1123], orientation: 'portrait'}
        };

        html2pdf().set(opt).from(pdfref.current).toPdf().get('pdf').then(function(pdf){
            const totalpages = pdf.internal.getNumberOfPages();
            if(totalpages > 1){
                pdf.deletePage(1);
            }
        })
        .save().outputPdf('dataurlnewwindow');
    };

    return(
        <>
            <h2>Preview</h2>
            <div className='previewform' ref={pdfref} style={{backgroundColor:'#f5f5f5'}}>
                <div className='previewprofile'>
                    <div className='profiledetails'>
                       <h1>{formdata.fullname}</h1>
                        <p>{formdata.job}, {formdata.location}</p>
                    </div>
                    <div className='profiledetails'>
                        <p><span style={{color:'#3c3a3a'}}> <b>+91-{formdata.mobile}</b></span></p>
                        <p><span style={{color:'#3c3a3a'}}> <b>{formdata.emailid}</b></span></p> 
                    </div>
                </div>
                <div className='linefun'></div>
                <div className='previewsummary'>
                    <p><strong>Profile summary: </strong></p>
                    <p>{formdata.summary}</p>
                </div>
                <div className='linefun'></div>
                <div className='previewsummary'>
                    <p><strong>Skills:</strong></p>
                    <p>
                        <ul className='horizontallist'>
                           {formdata.skills.split(',').map((skill, index) => (
                            <li key={index}>{skill.trim()}</li>
                           ))}
                        </ul>
                    </p>
                </div>
                 <div className='linefun'></div>
                 <div className='previewsummary'>
                    <p><strong>Work experience: </strong></p>
                    <div className='jobtitletime'>
                    <p><b>{formdata.currentjob}</b></p>
                        <p style={{color:'#3c3a3a'}}>{formdata.startdate? new Date(`${formdata.startdate}-01`).toLocaleString('default', { month: 'long', year: 'numeric' })
                        : 'Not set'} - {formdata.enddate}</p>
                        <p>{formdata.companyname}, {formdata.joblocation}</p>
                        
                    </div>
                    <div>
                            <ul>
                                {formdata.jobdescription.split('.').map((jobdes) => jobdes.trim()).filter((jobdes) => jobdes.length > 0).map((jobdes, index) => (
                                    <li key={index}>{jobdes.endsWith('.')? jobdes : `${jobdes}.`}</li>
                                ))}
                            </ul>
                    </div>
                </div>
                <div className='linefun'></div>
                <div className='previewsummary'>
                    <p><strong>Education: </strong></p>
                    <div className='jobtitletime'>
                    <p><b>{formdata.degree}</b></p>
                        <p style={{color:'#3c3a3a'}}>{formdata.start} - {formdata.end}</p>
                        <p>{formdata.college}, {formdata.collegelocation}</p>
                        
                    </div>
                </div>    
            </div>
            <div className='formbutton' style={{marginTop:'40px', gap:'300px', justifyContent:'center'}}>
                    <button onClick={handledownload}>Download</button>
                    <button onClick={() => navigate('/resume25')}>Edit</button>
            </div>
            
        </>
    )
}

export default Preview