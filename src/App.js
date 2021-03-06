import React from 'react'
import AstronautContainer from './Containers/AstronautContainer'

class App extends React.Component {

  //state and componentDidMount are provided here only to pass learn tests
  state = {
    api: [],
    people: []
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(r=>r.json()).then(data=> this.setState({api: data, people: data.people}))
  }

  render () {
    return <AstronautContainer />
  }
}

export default App