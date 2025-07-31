import Header from "../components/Header"


function About(){

    return(
        <>
            <Header/>
            <div style={{padding:'40px'}}>
                <h1>Empowering every job seeker with the perfect resume</h1>
                <p style={{maxWidth:'76%'}}>Welcome to Creator, your trusted online partner for building modern, professional, and ATS-friendly resumes in just a few clicks. We believe that creating a standout resume should be simple, accessible, and effective regardless of your background, experience, or career stage.
                </p><br/>
                <p style={{fontWeight:'bold'}}>What makes us different?</p>
                <p>
                    <ul>
                        <li>Fast & Easy to Use</li>
                        <li>Professional templates</li>
                        <li>Download Resume as PDF</li>
                    </ul>
                </p>
            </div>
            
        </>

    )
}

export default About