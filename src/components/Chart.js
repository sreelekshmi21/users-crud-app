import React from 'react'

export default function Chart({handleRedirect}) {


  const handleChart = (valu) =>{
    // handleRedirect(pending,1)
    console.log('#S',valu)
    handleRedirect(valu)
   }

  return (
    <div>
        <h2>Chart</h2>
        <div>
          <span onClick={() => handleChart('pending')}>Pending</span>
        </div>
    </div>
  )
}
