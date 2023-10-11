import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useState } from 'react'
import ChangeColor from './ChangeColor';


const FunctionComponent = () => {
    const [color,setColor]=useState("Red");

    const [FormData,setForm]=useState(
        
          [  
        {
            first_name:"",
            last_name:"",
            mob_num:"",
            email:"",
            subject:"",
            comment:""
        }
    ]
        
    );

    
    const changeColor=()=>{

        setColor("Blue")
    }

    const setData=(event)=>{
        
          const {name,value}=event.target;
          setForm({...FormData,[name]:value
        
        });

          
    }

    const getData=(event)=>
    {
        event.preventDefault();
        console.log(FormData)
       
       
        
        
        
    }

    

  return (


    <div>
        <h1 style={{textAlign:"center"}}>Function Component</h1>


        <div style={{textAlign:"center",fontFamily:"monospace",fontSize:"25px"}}>{color} <br/><br/>

        <input type='submit' className='btn btn-primary' value="ChangeColor" onClick={changeColor}/>
        </div>
        

        <div className="container" style={{marginTop:"5%"}}>
            <div className="col-md-12">

                
              <form method='post' onSubmit={getData} >
                  <div className="row">
                   
                      <h1 className='head'>Contact Us</h1>
                    <div className="col-md-6">
                    <div class="form-floating mb-3">
                            <input name='first_name' onChange={setData} type="text"  class="form-control" id="floatingInput" placeholder="name@example.com"/>
                          <label for="floatingInput">First Name</label>
                    </div>

                    </div>

                    <div className="col-md-6">
                    
                      <div class="form-floating mb-3">
                              <input name="last_name" onChange={setData}    type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Last Name</label>
                      </div>

                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-6">
                    <div class="form-floating mb-3">
                            <input name="mob_num" onChange={setData}  type="number" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                          <label for="floatingInput">Mobile Number</label>
                    </div>

                    </div>

                    <div className="col-md-6">
                    
                      <div class="form-floating mb-3">
                              <input name="email" onChange={setData}  type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email </label>
                      </div>

                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-12">
                    <div class="form-floating mb-3">
                            <input name='subject' onChange={setData}  type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                          <label for="floatingInput">Subject</label>
                    </div>

                    </div>

                  </div>


                  
                  <div className="row">
                    <div className="col-md-12">
                    <div class="form-floating">
                      <textarea name='comment' onChange={setData} class="form-control" style={{height:"100px"}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea">Comments</label>
                    </div>
                  </div>
                  </div>


                  <div className="row">

                    <div className="col-md-6">
                      <input  id="submit" type='submit' className='btn btn-primary' value={'Submit'}/>
                    </div>
                  </div>





                    
              

              </form>

            </div>
        </div>

        
      
    </div>
  )
}

export default FunctionComponent
