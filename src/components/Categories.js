import React from 'react'
import { act } from 'react-dom/test-utils'

const Categories = ({categories,filterItems,activeCategory}) =>{

    console.log('in categ compo',categories,activeCategory)
    return (
        <div className="btn-container">
        
            {categories.map((category) => (

                
                    <button key={category} type="button"
                            className={`btn  
                            ${category === activeCategory ? 'active'
                                                          : 'filter-btn'}
                            `}
                            
                            
                            
                            onClick={() => filterItems(category)}
                    >
                       {category}
                    </button>
                )  

            )}
           
        </div>
    )
}
export default Categories