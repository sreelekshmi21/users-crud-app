/*import React from 'react'
import {Link} from 'react-router-dom'

const Menu = ({menuItems}) => {

    console.log('llllllllllll',menuItems)*/

    /*window.onscroll = function() {
        console.log('Window height (px):', window.innerHeight)
        console.log('Currently scrolled from top (px):', window.pageYOffset)
        console.log('Document height(px):', document.body.offsetHeight)
        
        
      }*/
      
      /*window.addEventListener('scroll', function (event) {
        if (document.documentElement.scrollHeight <= window.pageYOffset + window.innerHeight)  {
          alert('You are at the bottom of page!');
        }
      });*/
    /*return (
        <>
        {menuItems.map((menuItem) => ( 
            <div key={menuItem.idCategory} className="col-md-6">
            <div className="card">
                <img src={menuItem.strCategoryThumb} 
                     className="card-img-top" 
                     alt="" />
                <div className="card-body">
                    <h5 className="card-title">
                        {menuItem.strCategory}
                    </h5>
                    <p className="card-text">
                        {menuItem.strCategoryDescription}
                    </p>
                </div>
            </div>
            </div>
            )
        )}
        <div className="text-center">
            <Link to='/infinite-scroll'
                    className="btn btn-success"
            >Infinite scroll</Link>
        </div>    
      </>
    )
}
export default Menu*/



import React from 'react'


const Menu = ({recipe}) => {

    console.log('llllllllllll',recipe)
 return (
        
        recipe['recipe']['image'].match(/\.(jpeg|jpg|png|gif)/) !== null && (
          <div>
              <img className="recipe-img" src={recipe['recipe'].image} />
              <p className="recipe-title">{recipe['recipe']['label']}</p>
          </div>


        )
    )
}
export default Menu
