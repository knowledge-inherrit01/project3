import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {

  constructor(){
    super();

    this.state={
      first_name:"",
      last_name:"",
      mob_num:"",
      email:"",
      subject:"",
      comment:"",
      msg:""
    
    };

  }
    
     getFirstName=(event)=>{
       // console.log(event.target.value)

        this.setState({
          first_name:event.target.value
        });

      }


      getLastName=(event)=>{
       // console.log(event.target.value)
        this.setState({
          last_name:event.target.value
        });


      }

      getEmail=(event)=>{
       // console.log(event.target.value)
        
        this.setState({
          email:event.target.value
        });

      }

      getMobileNum=(event)=>{
       // console.log(event.target.value)


        this.setState({
          mob_num:event.target.value
        });


      }

      getSubject=(event)=>{
       // console.log(event.target.value)
        this.setState({
          subject:event.target.value
        });


      }

      getComment=(event)=>{
       // console.log(event.target.value)
        this.setState({
          comment:event.target.value
        });


      }

      callSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/data',this.state)
        .then((response)=>{
            console.log(response.status)
            if(response.status==200 || response.status==201){
              this.setState({msg:"Data Add Successfully !"})
            }
            
        });


      }



     
  render() {
    return (
      <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112085.10147420819!2d77.20434119335505!3d28.60999240008324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb543ecd602b%3A0x48740eaa5f21096b!2sAgmatel%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1696419411014!5m2!1sen!2sin" style={{ width:"100%", height:"300px", border:0,allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
   
        <div className="container-fluid" style={{marginTop:"4%"}}>
          <div className="row">
            <div className="col-md-6">
            <iframe style={{width:"100%", height:"435px", allow:'autoplay'}} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

            </div>

            <div className="col-md-6">
              
              <form method='post' onSubmit={this.callSubmit} >
                  <div className="row">
                    {this.state.msg?
                       <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                        {this.state.msg}
                     </div> 
                      :""
                  }
                      <h1 className='head'>Contact Us</h1>
                    <div className="col-md-6">
                    <div class="form-floating mb-3">
                            <input type="text" onChange={this.getFirstName} class="form-control" id="floatingInput" placeholder="name@example.com"/>
                          <label for="floatingInput">First Name</label>
                    </div>

                    </div>

                    <div className="col-md-6">
                    
                      <div class="form-floating mb-3">
                              <input onChange={this.getLastName} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Last Name</label>
                      </div>

                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-6">
                    <div class="form-floating mb-3">
                            <input onChange={this.getMobileNum} type="number" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                          <label for="floatingInput">Mobile Number</label>
                    </div>

                    </div>

                    <div className="col-md-6">
                    
                      <div class="form-floating mb-3">
                              <input onChange={this.getEmail} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email </label>
                      </div>

                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-12">
                    <div class="form-floating mb-3">
                            <input onChange={this.getSubject} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                          <label for="floatingInput">Subject</label>
                    </div>

                    </div>

                  </div>


                  
                  <div className="row">
                    <div className="col-md-12">
                    <div class="form-floating">
                      <textarea onChange={this.getComment} class="form-control" style={{height:"100px"}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea">Comments</label>
                    </div>
                  </div>
                  </div>


                  <div className="row">

                    <div className="col-md-6">
                      <input id="submit" type='submit' className='btn btn-primary' value={'Submit'}/>
                    </div>
                  </div>





                    
              

              </form>

            </div>
          </div>
        </div>
   

   
   </>
        )
  }
}
