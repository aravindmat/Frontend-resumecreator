import Header from "../components/Header"
import Templatesection from "../components/Templatesection"
import img1 from '../resources/previewres.png'

function Template(){

    const templates = [
        {name:'Modern', image: img1},
        {name:'Student/Fresher', image: img1},
        {name:'Professional', image: img1},
        {name:'Creative', image:img1},
        {name:'Minimalist', image: img1},
    ];  

    return(
        <>  
            <Header/>
            <div style={{padding:'40px'}}>
                <h1>Choose the perfect resume template</h1>
                <p style={{maxWidth:'83%'}}>Our resume templates are professionally designed to make your profile stand out in front of recruiters and applicant tracking systems (ATS). Whether you're applying for your first job or aiming for the C-suite, we have something for everyone.</p>
                <div style={{display:'flex', gap:'200px', flexWrap:'wrap', marginTop:'32px', rowGap:'24px'}}>
                    {templates.map((object, index) => (
                        <Templatesection key={index} name = {object.name} image = {object.image}/>
                    ))}
                </div>
            </div>

        </>

    )
}

export default Template