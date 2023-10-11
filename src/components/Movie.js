import React, { Component } from 'react'
import axios from 'axios'

export default class Movie extends Component {
    constructor(){
        super();
        this.state={
            movieData:[],
            Banner:[ 
                
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",

            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",


        
        
        ]

        }
    }

    componentDidMount(){
       
        axios.get('http://localhost:3000/film')
        .then((response)=>{
           
            this.setState({
                movieData:response.data
              

            });
            
        });  
    }
  render() {
    return (

        <>

      <div className="container-fluid" >

        <div className="col-md-12" >

            <div className="row" >

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="500">
                        <img id="img" src={this.state.Banner[0]} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="200">
                        <img id="img" src={this.state.Banner[1]}class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img id="img" src={this.state.Banner[2]} class="d-block w-100" alt="..."/>
                        </div>

                        <div class="carousel-item" >
                        <img id="img" src={this.state.Banner[3]}class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img id="img" src={this.state.Banner[4]} class="d-block w-100" alt="..."/>
                        </div>

                        <div class="carousel-item">
                        <img id="img" src={this.state.Banner[5]} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
        </div>
      </div>

{this.state.movieData.map((item,index)=>(

      <div className="container"  style={{marginTop:"5%"}}>

            <div className="row">
            <div className="col-md-2"></div>
              
                <div className="col-md-8">
                <div class="card" id='card' style={{width: "18rem;"}}>
                    <img src={item.Images[0]} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{item.Title}</h5> <br/>

                        <h5>Year:<pre>{item.Year}</pre><br/>j
                            Rated:<pre>{item.Rated}</pre><br/> 
                            Released:<pre>{item.Released}</pre><br/> 
                            Runtime:<pre>{item.Runtime}</pre><br/> 
                            Genre:<pre>{item.Genre}</pre><br/> 
                            Director:<pre>{item.Director}</pre><br/> 
                            Writer:<pre>{item.Writer}</pre><br/>
                            Actors:<pre>{item.Actors}</pre><br/>
                            Plot:<pre>{item.Plot}</pre><br/>
    
    </h5>

                    </div>
                    </div>

                </div>

            <div className="col-md-2"></div>
            </div>
      </div>

))}
      
     "Sam Worthington, Zoe Saldana, Sigourney Weaver, St





      </>
    )
  }
}

