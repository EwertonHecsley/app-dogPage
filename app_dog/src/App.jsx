import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      imageUrl: "",
      isLoading: true,
    }

    this.fetchDog = this.fetchDog.bind(this);

  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({
        imageUrl: data.message,
        isLoading: false
      }))
  };

  componentDidMount() {
    this.fetchDog()
  }

  render() {

    const { imageUrl, isLoading } = this.state;
    if (isLoading) {
      return <h2>Carregando...</h2>
    }

    return (
      <div className="App">
        <h1>Doguinhos</h1>
        <button type='button' onClick={this.fetchDog}>Buscar novo doguinho!</button>
        <div className='App'>
          <img src={imageUrl} alt="Doguinho aleatório" />
        </div>
      </div>
    )
  }
}

export default App
