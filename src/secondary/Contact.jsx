import Header from "../components/Header"

function Contact(){

    return(
        <>
            <Header/>
            <div style={{padding:'40px'}}>
                <h1>Get in touch with us</h1>
                <p style={{maxWidth:'75%'}}>Have a question, suggestion, or just want to say hello? We're here to help! Reach out to our support team anytime, and we’ll get back to you as soon as possible.</p>
                <p style={{fontWeight:'bold'}}>Contact info: </p>
                    <ul style={{fontSize:'20px'}}>
                        <li>Email: support@creator.com</li>
                        <li>Phone: +91-9999999999</li>
                        <li>Website: <a href="https://www.google.com">www.creator.com</a></li>
                    </ul>
               
            </div>
            
        </>

    )
}

export default Contact