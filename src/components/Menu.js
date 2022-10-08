import React from 'react'


const Menu = ({receipe}) => {

    console.log('llllllllllll',receipe)

    return (        
        receipe['recipe']['image'].match(/\.(jpeg|jpg|png|gif)/) !== null && (
          <div>
              <img className="recipe-img" src={receipe['recipe'].image} />
              <p className="recipe-title">{receipe['recipe']['label']}</p>
          </div>
        )
    )
}
export default Menu
