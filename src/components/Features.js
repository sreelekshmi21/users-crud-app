// import React from 'react'
import React, { useEffect, useState } from "react";
import Box from "./Box";
import boxesData from "./boxesData";
import FeatureHeader from "./FeatureHeader";
import StarImage from "./StarImage";
import MemesData from './MemesData'
import { Button } from "react-admin";
import {Link} from 'react-router-dom'



export default function Features() {
 
  const [boxes, setBoxes] = useState(boxesData)

  const [contactCard, setContactCard] = useState({
    name: 'Dennis',
    email: 'gg@gmail.com',
    phone: '123456789',
    isFavorite: true
  })

  const nums = [1,2,3,4,5]

  const names = ['alice','bob','charlie']

  const pokemon = ["Bulbasaur", "Pikachu", "Squirtle","Charmander"]

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'images/green-leaves.jpg'
  })

  const [allMemeImages,setAllMemeImages] = useState(MemesData)

  const toggleBoxColor = (id) =>{
    console.log('#BOX',id)
    setBoxes(
      prevBoxes => {
        return prevBoxes?.map((box) => {
            return box?.id == id ? {...box, on: !box?.on} : box
          })        
      }
    )
  }

  
  const numsSquare = nums.map((num,index) => num * num)
  console.log(numsSquare)
  
  const capitaliseNames = names.map((name,index) =>{
    return name[0].toUpperCase() + name.slice(1)
  })
  //Given an array of strings 
  //return an array that wraps each element in a html <p> tag
  const pokemonGo = pokemon.map((po) => {
    return `<p>${po}</p>`
  })
  console.log(pokemonGo)


  function toggleFavorite(){
    
    setContactCard(prevCard => ({
      ...prevCard,
      isFavorite: !prevCard.isFavorite
    }))
  }
  
  function getMemeImage(){
    console.log('in get meme img')
    const memesArray = allMemeImages.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNum].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }


  
  return (
    <div>
      <FeatureHeader />
      <div style={{border: "2px solid black", height: "450px"}}>
      {boxes?.map((box,index) =>
      
        <Box key={box?.id} box={box} toggleBoxColor={toggleBoxColor}/>
      )}
    </div>
    <div>

      <h3>Contact Card</h3>
      <h5>Name: {contactCard.name}</h5>
      <h5>Email: {contactCard.email}</h5>
      <h5>Phone: {contactCard.phone}</h5>
      <StarImage isFilled={contactCard.isFavorite} 
                 toggleFavorite={toggleFavorite}
      /> 
    </div>
    <div>
    <Button variant="contained" className="form-button" color="primary" onClick={getMemeImage}>
       Get a new Meme Image
      </Button>
    </div>
    <br />
    <br />
    <div>
    <img className="random-image" src={meme.randomImage} alt="LULU"/>
    </div>
    <h4>
    <Link to='/table'
                    className="btn btn-success"
            >Go To TABLE</Link>
    </h4>
    </div>
  );
}
