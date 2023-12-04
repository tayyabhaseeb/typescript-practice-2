import React from 'react'


interface ComponentProp  {
    children : string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({children , onClick}:ComponentProp) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
