import React, { useState } from 'react'

type ComponentState = {
    name: string,
    age: number
  }
  
export default function PracticeAs() {
    const [arr, setArr] = useState<ComponentState[]>([] as ComponentState[]); // this is called type assertion

  return (
    <div>PracticeAs</div>
  )
}

