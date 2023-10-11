import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2"; 


const Kbc = () => {

    const [questionData,changeData]=useState(
        []
    );

    const [id,changeId]=useState(1);
    const [score,changeScore]=useState(0);
  
    
    const start=()=>{
        
        
      
        axios.get("http://localhost:3000/data")
       

        .then((response)=>(
           
            changeData(response.data)
    
    
        ));
       
    }

    const checkAnswer=(choose,correct)=>{

        console.log(choose, correct)    

        Swal.fire({
            title: 'Are you sure for this option ?',
            text: ""+choose.option,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,'
            }).then((result) => {
            if (result.isConfirmed) {
                
            if (choose.option==correct) {
                changeId(id+1)
             
                Swal.fire(
                'Answer is Correct'
                )

                changeScore(score+1)

               
            }
            else{
                Swal.fire(
                    'Wrong Answer',
                    "Your Final Score is :"+score

                )

                changeId(1)
                changeScore(0)
            }
        }
            })
    


    }
   
 
        

    


  return (
    <>
    
    <div>
        
        <marquee style={{background:"orange", color:"white"}} behavior="alternate" direction="left">-----K  B  R -----</marquee>
        <marquee  style={{background:"grey", color:"white"}} behavior="alternate" direction="left">KAUN BANEGA ROADPATI</marquee>
       
    </div>
    <div><h5 style={{float:"left",marginLeft:"1%"}}>Score:&nbsp;<span style={{color:"green"}}>{score}</span>/22</h5><br/> <br/></div>
   
    <div style={{textAlign:"center"}}>
            <input type='submit' value="Start" className='btn btn-success' onClick={start} />
            
    </div>
   
{questionData.filter(question => question.id == id ).map(item =>(

    
   
        
    <div className="container">
        
       
        
       
        <div className="row">
            <div className="col-md-12">
                <div  className='questionDiv'>{item.question}</div>
            </div>
        </div>
       
        <div className="row">
            <div className="col-md-6">
                <button onClick={()=>checkAnswer(item.options[0],item.answer)} className='option'> A: {item.options[0].option} </button>
            </div>

            <div className="col-md-6">
                <button onClick={()=>checkAnswer(item.options[1],item.answer)}  className='option'>B: {item.options[1].option}</button>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <button onClick={()=>checkAnswer(item.options[2],item.answer)}  className='option'>C: {item.options[2].option}</button>
            </div>

            <div className="col-md-6">
                <button onClick={()=>checkAnswer(item.options[3],item.answer)}  className='option'>D: {item.options[3].option}</button>
            </div>
        </div>
    </div>

    


 )    )}

    




    </>
  )
}

export default Kbc
