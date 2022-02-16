import React from 'react'

interface Props{
    alertType: () => void
}

export default function ChildComponent(props: Props) {
  return (
    <div>ChildComponent
        <button onClick={()=>{props.alertType()}}>Click</button>
    </div>
  )
}
