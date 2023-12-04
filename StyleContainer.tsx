import React from 'react'

interface ComponentProp {
styles: React.CSSProperties

}

export default function StyleContainer({styles}: ComponentProp) {
  return (
    <div style={styles}>
        <p>The container goes here</p>
        <p>This container is for style purpose</p>
    </div>
  )
}
