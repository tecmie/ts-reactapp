import React from 'react'

interface ThingProps {
  name: string
}

const Thing = ({ name }: ThingProps) => {
  return <div>I'm a {name}</div>
}

export default Thing
