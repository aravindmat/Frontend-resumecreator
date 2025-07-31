import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Profile1 from './pages/Profile1'
import Aboutme2 from './pages/Aboutme2'
import Experience3 from './pages/Experience3'
import Education4 from './pages/Education4'
import Preview from './pages/Preview'
import About from './secondary/About'
import Contact from './secondary/Contact'
import Template from './secondary/Template'
import Modern from './templatetypes/Modern'
import Fresher from './templatetypes/Fresher'
import Professional from './templatetypes/Professional'
import Creative from './templatetypes/Creative'
import Minimalist from './templatetypes/Minimalist'
import { useState } from 'react'

function App() {
  
  const [formdata, setFormdata] = useState({
        fullname:'',
        job:'',
        location:'',
        mobile:'',
        emailid:'',
        summary:'',
        skills:'',
        currentjob:'',
        companyname:'',
        joblocation:'',
        jobdescription:'',
        startdate:'',
        enddate:'',
        degree:'',
        college:'',
        collegelocation:'',
        start:'',
        end:''
    });

  return (
    <Routes>
      <Route path='/' element = {<Landing/>} />
      <Route path='/resume25' element = {<Profile1 formdata={formdata} setFormdata = {setFormdata}/>} />
      <Route path='/resume50' element = {<Aboutme2 formdata = {formdata} setFormdata = {setFormdata} />} />
      <Route path='/resume75' element = {<Experience3 formdata ={formdata} setFormdata = {setFormdata}/>} />
      <Route path='/resume100' element = {<Education4 formdata = {formdata} setFormdata = {setFormdata}/>} />
      <Route path='/preresume' element = {<Preview formdata={formdata}/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/template' element = {<Template/>} />
      <Route path='/resume/modern' element = {<Modern/>} />
      <Route path='/resume/student/fresher' element = {<Fresher/>} />
      <Route path ='/resume/professional' element = {<Professional/>} />
      <Route path='/resume/creative' element = {<Creative/>} />
      <Route path='/resume/minimalist' element = {<Minimalist/>} />
    </Routes>
  )
}

export default App