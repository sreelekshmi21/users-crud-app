import { CallMergeTwoTone, GetAppRounded } from '@material-ui/icons'
import { getByPlaceholderText, getDefaultNormalizer } from '@testing-library/react'
import React, {Component} from 'react'
import ProductList from './ProductList'

class EditProduct extends Component{

    constructor(props){
        super(props)
        this.state = {
            
            product:{
               id:'',
               name:'',
               category:'',
               cost:''
            }
    }

}
    handleInputChange = (e) =>{

        console.log('in input chng in edit======', e.target.value)
        let value = e.target.value
        /*if(e.target.name === 'cost'){
            value = parseInt(e.target.value)
        }*/
        this.setState({
            product:{
                ...this.state.product,
                [e.target.name] : value
            }
        })


    }


  static getDerivedStateFromProps(props,state){
    if(props.currentProduct !== state.product){
        console.log('in sssssssstttttttt')

        return {
            product:{
                id: props.currentProduct.id,
                name: props.currentProduct.name,
                category: props.currentProduct.category,
                cost:props.currentProduct.cost
            }
        }
    }
  }



    componentDidUpdate(){
        console.log('in cdid update----------------')
    }






    handleSubmit = (e) =>{
        e.preventDefault()
        console.log('in form submit====',this.state.product)

        this.props.updateProduct(this.state.product)

        this.setState({
            product:{
                name:'',
                category:'',
                cost:''
            }
        })
    }
    render(){
        const {product} = this.state

        console.log('in render of edit========',product)
    return (
        <>
            
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Edit Product</h2>
                           <div className="form-group">
                                  <label>Category</label>
                                    <select
                                        name="category" 
                                        className="form-select" 
                                        value={product.category}
                                        required
                                       onChange={this.handleInputChange}>
                                     
                                    <option value="grocery">Grocery</option>
                                    <option value="stationery">Stationery</option>
                                    <option value="cosmetics">Cosmetics</option> 
                                    

                                    </select>
                                        
                                        
                              </div>
                    
                              <div className="form-group">
                                  <label>Product</label>
                                  <input type="text"
                                         name="name"
                                         required
                                        className="form-control" 
                                        value={product.name}
                                        onChange={this.handleInputChange}
                                        
                                        placeholder="Enter product name" 
                                        
                                        
                                        
                                        />
                              </div> 
                        <div className="form-group">
                             <label>
                                         Cost
                              </label>
                               <input type="number" 
                                      required
                                      name="cost"
                                      className="form-control"
                                      value={product.cost}
                                      
                                      placeholder="Enter product cost"
                                      onChange={this.handleInputChange} />
                        </div>
                        
                          <div className="text-center" style={{marginTop:10}}>
                              <button type="submit" 
                                      className="btn btn-primary btn-block">
                                        UPDATE PRODUCT
                              </button>
                          </div>  
                     </form>
                </div>     
            </div>
        </>
    )
  }
}
export default EditProduct
