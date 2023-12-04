import React from 'react'

//  top-left , top-bottom , top-right top-center
//  bottom-left , bottom-right , bottom-top, bottom-center
// left-top , left-right , left-bottom, left-center
// right-top , right-left , right-bottom, right-center



type Horizontal = 'top' | 'bottom' | 'left' | 'right' | 'center'
type Vertical = 'top' | 'bottom' | 'left' | 'right' | 'center'


type ComponentProp = {
    position: Exclude<`${Horizontal}-${Vertical}`, 'center-center'>| 'center'
}


export default function TemplateLiteral({position}: ComponentProp) {
  return (
    <div>
      <h1>{position}</h1>  
    </div>
  )
}
