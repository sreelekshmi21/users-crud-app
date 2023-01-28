import React, {useState} from 'react'
import axios from 'axios'
import Menu from './Menu'
import {Link} from 'react-router-dom'
import LoadingComponent from './LoadingComponent'

export default function Restaurant(){

    const [searchTerm, setSearchTerm] = useState(null)
    const [receipes, setReceipes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    const getSearchReceipes = async() => {       
      
        
        await axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=dd81b91c&app_key=84c7d0cea7c38def39623bd890c27947`)
        .then((response) => {
            console.log('#API RES dta from api----------',response.data)
            setIsLoading(false)
            setReceipes(response?.data?.hits)
        }).catch((err) =>{
            console.log('#API ERR',err) 
            setIsLoading(false)
        })
        
        
        //https://www.themealdb.com/api/json/v1/1/categories.php')
    }    


   const handleChange = (e) =>{
      console.log('eeeeeeeee',e.target.value)
      setSearchTerm(e.target.value)
   }



   const handleSubmit = (e) =>{
      e.preventDefault()
      console.log('in submit-----')
      setIsLoading(true)
      getSearchReceipes()
   }

        
        
        
    return (
        <>
        <div className="food-container">
               <h1>Food Receipe Plaza</h1>
               <br />
               <div>
             <Link to='/users-list'
                    
            >BACK TO USERS</Link>
        </div>
        <br />
        <br />
               <form className="food-form" onSubmit={handleSubmit}>
                   <input type="text"
                          className="food-input" 
                          placeholder="Give ingredients"
                          name="searchTerm"
                          value={searchTerm}
                          onChange={handleChange} 
                   
                   />
                   {/* <LoadingButton
                    loading={isLoading}
                    loadingPosition="start"
                    variant="outlined"
                    fullWidth
                    className="btn btn-success food-btn"
                    disabled={
                      searchTerm == null 
                    }  
                    onClick={handleSubmit}
                  ></LoadingButton> */}
                   <button type="submit"
                           className="btn btn-success food-btn"
                   >
                       Search
                   </button>
                   {/* <h5>{searchTerm == null && 'Enter something to search for'}</h5> */}
               </form>
               <div className="app-recipe">
                   {receipes?.length > 0 ? receipes.map((receipe,index) => {
                       return <Menu key={index} receipe={receipe} /> 
                   }) : <h5>No List, give a valid search</h5>}
               </div>
               <div className="text-center">
            {/* <Link to='/tes'
                    className="btn btn-success"
            >Go To Tes</Link> */}
        </div>
        </div> 
        <LoadingComponent load={isLoading}/>
        </>  
    )
}

