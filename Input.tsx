import React from 'react'

interface ComponentProp {
    type: 'text' | 'number' | 'email' | 'password'
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({type , value, onChange}: ComponentProp) {
  return (
    <input type={type} value={value} onChange={onChange}/>
  )
}
