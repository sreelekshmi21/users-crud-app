export default function StarImage({isFilled, toggleFavorite}){
    console.log('##isFilled',isFilled)
    const starIcon = isFilled ? 'icon-twitter.png' : 'green-leaves.jpg'
    return(
        <div>
          <h5>Favourite: <img src={`images/${starIcon}`} 
                          onClick={toggleFavorite}
                          alt="StarIcon Image" /></h5>
        </div>
    )
}