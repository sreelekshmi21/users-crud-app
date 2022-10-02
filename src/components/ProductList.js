
/*import React, {Component} from 'react'
import Menu from './Menu'
import axios from 'axios'
import Categories from './Categories'

let itemsData = []
class ProductList extends Component{

    constructor(props){
        super(props)
        this.state  = {
           menuItems: [],
           categories:[],
           activeCategory: '',
           search:''

        }
    }
    
    //get data from api
    async componentDidMount(){
        
       console.log('in cdm==============')
       try{
          await this.getData()
       }catch(error){
           console.log(error)
       } 
    }  
    
    async getData(){
       
       try{
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')

        console.log('dta from api----------',response.data.categories)

        itemsData = response.data.categories

        const categories = response.data.categories.map((item) => item.strCategory)

       console.log('in cat----------',categories)

       const allCategories = ['All',...new Set(categories)]

       console.log('allcat------',allCategories)

    

        
        
        

        
        this.setState({
            menuItems: response.data.categories,
            categories: allCategories
            
        }
        ) 

       }catch(error){
           console.log(error)
       } 
    }
    
    filterItems = (category) =>{

        
        console.log('in filter func--------',category)

        
        const filteredList = (category === 'All') 
                            ? itemsData
                            : (itemsData.filter((item) => item.strCategory === category))

        console.log('in filtered list-----',filteredList)

        this.setState({
            menuItems: filteredList,
            activeCategory: category
        })
    }


    handleChange = (e) =>{

        console.log('handle change------',e.target.value)

        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSearch = (e) =>{

        e.preventDefault()

        console.log('in submit--------')

        const searchList =   Object.values(itemsData)                        

        console.log('in searck---------------',searchList)

    }

    render(){

        const {menuItems, categories, activeCategory, search} = this.state

        console.log('in=render',menuItems)

        
        
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Our Menu</h2>
                    <form onSubmit={this.handleSearch}>
                        <input type="text" 
                               name="search"
                               value={search}
                               placeholder="Enter Search value...."
                               onChange={this.handleChange} 

                        />
                        <button type="submit" 
                                className="btn btn-success"
                                       
                        >Search</button>
                    </form>
                </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                 <Categories categories={categories}
                             activeCategory={activeCategory}
                             filterItems={this.filterItems}
                 />
              </div>
            </div>   
            <div className="row">
            
                   <Menu menuItems={menuItems}/>
            
            </div>   
        </div>  
    )
    }
}
export default ProductList*/


import React, {Component} from 'react'
import axios from 'axios'
import Menu from './Menu'
import {Link} from 'react-router-dom'

class ProductList extends Component{

    constructor(props){
        super(props)
        this.state  = {
           
           searchTerm:'',
           receipes: [] 
        }
    }
    
    //get data from api
    async componentDidMount(){
        
       console.log('in cdm==============')
       /*try{
          await this.getReceipes()
       }catch(error){
           console.log(error)
       } */
    }  

    async getSearchReceipes(){
       
       try{
        const response = await axios.get(`https://api.edamam.com/search?q=${this.state.searchTerm}&app_id=dd81b91c&app_key=84c7d0cea7c38def39623bd890c27947`)
        
        
        //https://www.themealdb.com/api/json/v1/1/categories.php')

        console.log('dta from api----------',response.data)


        this.setState({
            receipes: response.data.hits
        })


    

        
        
        

        
                 

       }catch(error){
           console.log(error)
       } 
    }
    


   handleChange = (e) =>{

      console.log('eeeeeeeee',e.target.value)

      this.setState({
          searchTerm : e.target.value
      })
   }

   handleSubmit = (e) =>{

      e.preventDefault()
      console.log('in submit-----')

      this.getSearchReceipes()

   }

    render(){

     const {searchTerm, receipes} = this.state
        
        
    return (
        <div className="food-container">
               <h1>Food Receipe Plaza</h1>
               <form className="food-form" onSubmit={this.handleSubmit}>
                   <input type="text"
                          className="food-input" 
                          placeholder="Give ingredients"
                          name="searchTerm"
                          value={searchTerm}
                          onChange={this.handleChange} 
                   
                   />
                   <button type="submit"
                           className="btn btn-success food-btn"

                   >
                       Search
                   </button>
               </form>
               <div className="app-recipe">
                   {receipes.map((recipe,index) => {
                       return <Menu key={index} recipe={recipe} /> 
                   })}
               </div>
               <div className="text-center">
            <Link to='/tes'
                    className="btn btn-success"
            >Go To Tes</Link>
        </div>
        </div>  
    )
    }
}
export default ProductList

