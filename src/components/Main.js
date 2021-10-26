import { Component } from "react";

export default class Main extends Component {
  render() {
    return(
      <>
        <HornedBeast title= {'UniWhal'} src= {"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"} alt= {"Uniwhal"} description= {"A unicorn and a narwhal nuzzling their horns."}/>

        <HornedBeast title= {'Rhino Family'} src= {"https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"} alt= {"Rhino Family"} description= {"Parent rhino with two babies"}/>
      </>
    )
  }
}

class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>I am a {this.props.title}</h2>
        <img src= {this.props.src} alt= {this.props.alt} title= {this.props.title}></img>
        <p>{this.props.description}</p>
      </>
    )
  }
}