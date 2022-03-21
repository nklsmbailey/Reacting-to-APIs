import React from 'react';
import Card from "./card";
 import "isomorphic-fetch";
 import "es6-promise";
 import Film from "./film";
 import People from "./people";

 class App extends Component {
    constructor(props) {
      super(props);
      this.state = { films: [], loaded: false };
    }
    componentDidMount() {
      fetch("https://ghibliapi.herokuapp.com/films")
        .then(result => result.json())
        // .then(film => film.this.state.entries())
        .then(films => {
          this.setState({ films });
        });
      this.state = { 
        loaded: null 
      };
    }
 
    handleClick = () => {
      this.setState({ loaded: !this.state.loaded });
      this.setState({ loaded: true });
    };
 
    handleClick2 = () => {
      this.setState({ loaded: false });
    };
 
 
 
 
    render() {
      if (this.state.loaded === true) {
        return (
 
            <div>
              {this.state.films.map(film => <Card key={film.id} value={film} />)}
            </div>
 
        );
      } else {
        return (
          <div>
          <img
            src="https://ghibliapi.herokuapp.com/images/logo.svg"
            alt="Films Created by"
          />
          <button value={this.state.loaded} onClick={this.handleClick}>
            Load Films
          </button>
        </div>
        );
          let switchCards;
          switch(this.state.loaded) {
            case true:
              return(
                switchCards = <Film />)
                break;
            case false:
              return(
                switchCards = <Species />)
                break;
            default:
              return (
                <div>
                  <img 
          src="https://ghibliapi.herokuapp.com/images/logo.svg"
          alt="Created by"/><br />
                <div className="button" onClick={() => this.handleClick()}>Load Films</div><br />
                <div className="button" onClick={() => this.handleClick2()}>Load Species</div></div>)
        }
 
 
 
 
      }
    }
  }
    };
 
 
  export default App;
 