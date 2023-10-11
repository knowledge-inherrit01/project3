import React, { Component } from 'react'

export default class ChangeColor extends Component {
    constructor(){
        super();
        this.state={
            color:''
        }
    }

    changeColor=(event)=>{
        this.setState({
            color:event.target.value
        })
    };
  render() {
    return (
        <>
      <div className='head2' >ChangeColor</div>

         <div className="container" style={{backgroundColor:this.state.color,height:"300px",width:"100%", }}>

             <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{ width:"50%",marginTop:"10%",textAlign:"center"}}>


                        <div class="form-floating mb-3">
                        <input class="form-control" type='text' placeholder='Type Color Name' onChange={this.changeColor}/>
                      <label for="floatingInput">Type Color here</label>
                    </div>
                          
                         </div>

                         <div className="col-md-3"></div>

                      </div>
           
                </div>

            </div>


      </>
    )
  }
}
