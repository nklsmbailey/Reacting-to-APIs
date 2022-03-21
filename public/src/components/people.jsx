import React, { Component } from "react";
 import PeopleCard from "./peopleCard";
 import FilmCard from "./filmCard";
 import Film from "./film";
 import "isomorphic-fetch";
 import "es6-promise";

 class People extends Component {
   constructor(props) {
     super(props);
     this.state = { species: [], loaded: true };
   }


   componentDidMount() {
     fetch("https://ghibliapi.herokuapp.com/species")
     .then(resp => resp.json())
     .then(species => {
         this.setState({ people })
     });
 }

 handleClick = () => {
   this.setState({ loaded: !this.state.loaded });
 };

 render() {
   if (this.state.loaded === true) {
     return (
       <div>
       <img
         src="https://ghibliapi.herokuapp.com/images/logo.svg"
         alt="Created by"
       />
       <button value={this.state.loaded} onClick={this.handleClick}>
         Load Films
       </button>
       {this.state.people.map(species => <SpeciesCard key={people.id} value={people} />)}
     </div>

     );
   } else {
     return (
     <div>
         <Film />
   </div>
     )
   }
   } 
 };
 export default People; 