import React,{useEffect,useState} from 'react'
import AddEdit from './AddEdit';
import TakeTest from './TakeTest';
import { Link,useLocation } from 'react-router-dom';

import "./home.css"

const Home = () => {

  const [activeTab,setActiveTab]=useState("Home")
  const location=useLocation();
  useEffect(()=>{
    if (location.pathname==="/createQuiz"){
      setActiveTab("CreateQuiz")
    }else if(location.pathname==="/takeTest"){
      setActiveTab("TakeTest")
    }

  },[Location]);
  return (
    < div className='mainblock'>

     
     <Link to="/add" style={{textDecoration:"none"}}>
          <p className={`${activeTab ==="AddEdit" ? "active" : ""}`} onClick={()=>{
            setActiveTab("AddEdit")
          }}>
          CreateQuiz 
          </p>
        </Link>

     
    
    <Link to="/takeTest" style={{textDecoration:"none"}}>
          <p className={`${activeTab ==="TakeTest" ? "active" : ""}`} onClick={()=>{
            setActiveTab("TakeTest")
          }}>
          TakeTest  
          </p>
        </Link>
    

    
    <Link to="/editQuestions" style={{textDecoration:"none"}}>
          <p className={`${activeTab ==="EditQuestions" ? "active" : ""}`} onClick={()=>{
            setActiveTab("EditQuestions")
          }}>
          Modify Questions
          </p>
        </Link>
    


    </div>
  )
}

export default Home