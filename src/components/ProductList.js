import React, { Component } from 'react';
import TableComponent from './TableComponent'


class ProductList extends Component{

    constructor(props){
        super(props)
        this.state = {
            products: [
                {
                    id: 101,
                    name: 'Dell Laptop',
                    price: 50000

                },
                {
                    id: 102,
                    name: 'Samsung TV',
                    price: 90000

                },
                {
                    id: 103,
                    name: 'Rain Jacket',
                    price: 7000

                },{
                    id: 104,
                    name: 'Washing Machine',
                    price: 30000

                },{
                    id: 105,
                    name: 'SanDisk',
                    price: 900

                }
            ],
            
            productData:{
                id:'',
                name:'',
                price:''
            },
            edit: false,
            mainId: null
        }
    }

    
    handleChange = (e) =>{

        this.setState({
            productData:{
                ...this.state.productData,
                [e.target.name] : e.target.value
            
            }
        })
    }
    
    handleSubmit = (e) =>{

        e.preventDefault()

        if(this.state.edit){
            this.updateProduct(this.state.productData)
        }
        else{
            this.addProduct(this.state.productData)
        }
    }
    
    addProduct = (newProd) =>{

       this.setState({
            products: [...this.state.products,newProd],
            productData:{
                id: '',
                name:'',
                price:''
            }
        })
    }
  

   handleRowEdit = (itemId) =>{

    const editedItem = this.state.products.find((elem) => elem.id === itemId)

    this.setState({
        productData:{
            id: editedItem.id,
            name:editedItem.name,
            price: editedItem.price
        },
        edit: true,
        mainId: itemId
    })
   }

   updateProduct = (updatedProd) =>{

    const updatedProducts = this.state.products.map((prod) => {
        
        if(prod.id === this.state.mainId){
            return {...prod,
                     id:updatedProd.id,
                     name:updatedProd.name,
                     price: updatedProd.price
                   }
        }
        return prod
    })
    this.setState({
        products: updatedProducts,
        productData:{
            id:'',
            name:'',
            price:''
        },
        edit:false,
        mainId:null
    })
   }

   handleRowDelete = (itemId) =>{

    const newProducts = this.state.products.filter((prod) => (
                     prod.id !== itemId
    ))
    this.setState({
           products: newProducts
       })
   }

    render(){

    const{products,productData,edit} = this.state
    return(
        <div>
            <h2>Product List</h2>
            <TableComponent 
                  data={products}
                  handleRowEdit={this.handleRowEdit}
                  handleRowDelete={this.handleRowDelete}
            /> 
            <div className="container">     
                <h3 className="text-center">
                    {edit ? 'Update Product' : 'Add Product'}
                </h3>             
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="row">
                 <div className="form-group">
                    <label>Product ID</label>
                    <input type="text"
                           name="id" 
                           required
                           className="form-control" 
                           value={productData.id === '' ? '' :productData.id}
                           onChange={this.handleChange}
                           placeholder="Product ID"/>
                </div>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text"
                           name="name" 
                           required
                           className="form-control" 
                          value={productData.name === '' ? '' :productData.name}
                          onChange={this.handleChange}
                          placeholder="Product Name"/>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="text" 
                           name="price"
                           required
                          value={productData.price === '' ? '' :productData.price}
                         className="form-control" 
                        onChange={this.handleChange} 
                       placeholder="Price"/>
                 </div>
              </div>
          <div className="text-center form-btn" style={{
                                                    marginTop:10,
                                                    marginBottom:50}}>
            <button type="submit" className="btn btn-primary">
                {edit ? 'Update Product' : 'Add Product'}
            </button>
          </div>
      </form>
    </div>    
</div>
    )
  }
}
export default ProductList