import React, {Component} from 'react'
import Astronaut from '../Components/Astronaut'

class AstronautContainer extends Component {
  state = {
    api: [],
    people: []
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(r=>r.json()).then(data=> this.setState({api: data, people: data.people}))
  }

  renderAstronauts = () => {
    return this.state.people.map((astro, index) => <Astronaut key={index} astro={astro} />)
  }

  render() {
  return (
    <div>
      {this.state.api.length === 0 ? <h1>Pinging Satelites 🛰</h1> : <h1>{this.state.api.number} People in Space</h1>}
      <ul>
        {this.renderAstronauts()}
      </ul>
    </div>
  )
  }
}

export default AstronautContainer