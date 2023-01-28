import React, {useEffect, useState} from "react";
export default function Box({ box, style, toggleBoxColor }) {

    // const [isOn, setIsOn] = useState(box?.on)
    
  

//   const toggleBoxColor = () =>{
//       console.log('#toggleBoxColor')
//       setIsOn(prevIsOn => !prevIsOn)
//   }

const boxColor = {
  backgroundColor: box?.on ? "yellow" : "green",
  height: "100px",
  width: "100px",
  display: "inline-block",
  marginRight: "6px",
};

  return (
    <h2 key={box?.id} style={boxColor} onClick={() => toggleBoxColor(box?.id)}>
      {box?.id}
    </h2>
  );
}
