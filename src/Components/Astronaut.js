import React from 'react'

function Astronaut(props) {
return <li>{`${props.astro.name} (${props.astro.craft })`}</li>
}

export default Astronaut