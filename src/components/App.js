import React, {Fragment, Component} from 'react';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  /*Funciones propias*/
  fetchCall(url, call){
    fetch(url)
      .then(response => response.json())
      .then(data => call(data))
      .catch(error => console.log(error))
  }

  search = (element) => {
    let url = 'http://localhost:3001/api/all';
    let call = (data) => {
      this.setState({ movies: data })
    }
    if (element !== '') {
      url = `http://localhost:3001/api/search/${element}`;
    }
    
    this.fetchCall(url, call)
  }

  /*Funciones de React.Component*/
  componentDidMount(){
    let url = 'http://localhost:3001/api/all';
    let call = (data) => {
      this.setState({movies:data})
    }

    this.fetchCall(url, call)
  }

  componentDidUpdate() {
    console.log('Me acabo de actualizar');
  }

  render() {
    let {movies} = this.state;
    return (
      <Fragment>
        <Header 
          search={this.search}
        />
        <Main 
          movies={movies}
        />
      </Fragment>
    );
  }
}

export default App;
