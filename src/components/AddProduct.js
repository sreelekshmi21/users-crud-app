import React, {Component} from 'react'

class AddProduct extends Component{

    constructor(props){
        super(props)
        this.state = {
            product:{
                name:'',
                category:'',
                cost:''
            }

            
        }
    }

    handleInputChange = (e) =>{

        console.log('in input chng', e.target.value)
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

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log('in form submit====',this.state.product)

        this.props.addProduct(this.state.product)

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
    return (
        <>
            
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Add Product</h2>
                           <div className="form-group">
                                  <label>Category</label>
                                    <select
                                        name="category" 
                                        className="form-select" 
                                        value={product.category}
                                        required
                                        onChange={this.handleInputChange}>
                                     <option value="" selected>Select a Category</option>       
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
                                        value={product.name === ''?'':product.name}
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
                                      value={product.cost === ''?'':product.cost}
                                      
                                      placeholder="Enter product cost"
                                      onChange={this.handleInputChange} />
                        </div>
                        
                          <div className="text-center" style={{marginTop:10}}>
                              <button type="submit" 
                                      className="btn btn-primary btn-block">
                                        ADD PRODUCT
                              </button>
                          </div>  
                     </form>
                </div>     
            </div>
        </>
    )
  }
}
export default AddProduct
