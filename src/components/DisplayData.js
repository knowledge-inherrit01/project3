import React, { Component } from 'react'
import axios from 'axios'
import Swal from "sweetalert2"; 

export default class DisplayData extends Component {
    constructor(){
        super();
        this.state={
            mydata:[]
        }
    } 

    componentDidMount(){
        console.log("componentDidMount")
        axios.get('http://localhost:3000/data')
        .then((response)=>{
           
            this.setState({
                mydata:response.data
              

            });
            
        });  

    }

    deleteData=(id)=>{

     


                        Swal.fire({
                title: 'Are you sure for delete Data ?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                    axios.delete('http://localhost:3000/data/'+id)
                    this.componentDidMount()
                }
                })
        
    }
  render() {
    return (
        <>
      <div className='head2'>Display Data</div>

      <div className="container" style={{marginTop:"5%"}}>

        
       <table  className="table table-hover" border={1}>

            <thead className='table-light' >
                <tr>
                    <th style={{textAlign:"center"}}>Id</th>
                <th style={{textAlign:"center"}}>First Name</th>
                <th style={{textAlign:"center"}}>Last Name</th>
                <th style={{textAlign:"center"}}>Mobile Number</th>
                <th style={{textAlign:"center"}}>Email</th>
                <th style={{textAlign:"center"}}>Subject</th>
                <th style={{textAlign:"center"}}>Comment</th>
                <th style={{textAlign:"center"}}>Action</th>
                </tr>

            </thead>
            
               {
                    this.state.mydata.map((item,index)=>(

               

               
            <tr>
                <td style={{textAlign:"center"}}>{item.id}</td>
                <td style={{textAlign:"center"}}>{item.first_name}</td>
                <td style={{textAlign:"center"}}>{item.last_name}</td>
                <td style={{textAlign:"center"}}>{item.mob_num}</td>
                <td style={{textAlign:"center"}}>{item.email}</td>
                <td style={{textAlign:"center"}}>{item.subject}</td>
                <td style={{textAlign:"center"}}>{item.comment}</td>
                <td style={{textAlign:"center"}}>
                    
                    <button type="button" className="btn btn-success">Edit</button>
                &nbsp;
                <button onClick={()=>this.deleteData(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>


            </tr>

                ))}
        

        </table>

        
        
      </div>

      </>
    )
  }
}
