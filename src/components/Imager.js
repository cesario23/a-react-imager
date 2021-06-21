import React, { Component } from 'react'
import Display from './Display'
import Thumbnails from './Thumbnails'

export class Imager extends Component {
    state={
        images:[
            "images/p1.jpeg",
            "images/p2.jpg",
            "images/p3.jpg",
            "images/p4.jpeg",
            "images/p5.jpeg",
            "images/p6.jpeg",
            "images/p7.jpeg",
            "images/p8.jpeg",
            "images/p9.jpeg",
            "images/p10.jpeg",
            "images/p11.jpeg",
            "images/p12.jpeg",

        ],
        bigImage: "",
        indexImage: "",
      };
      componentDidMount() {
        let randomNum = Math.floor(Math.random() * this.state.images.length);
        this.setState({
          bigImage: this.state.images[randomNum],
          indexImage: randomNum,
        });
      }
      randomImageGenerator = () => {
        let randomNum = Math.floor(Math.random() * this.state.images.length);
        this.setState({
          bigImage: this.state.images[randomNum],
        });
      };
      backbutton = () => {
        if (this.state.indexImage === 0) {
          this.setState({
            bigImage: this.state.images[this.state.images.length - 1],
            indexImage: this.state.images.length - 1,
          });
        } else {
          this.setState({
            bigImage: this.state.images[this.state.indexImage - 1],
            indexImage: this.state.indexImage - 1,
          });
        }
      };
      forwardButton = () => {
        console.log(this.state.indexImage);
        if (this.state.indexImage === 11) {
          this.setState({
            bigImage: this.state.images[0],
            indexImage: 0,
          });
        } else {
          this.setState({
            bigImage: this.state.images[this.state.indexImage + 1],
            indexImage: this.state.indexImage + 1,
          });
        }
      };
      render() {
        return (
          <div>
            <Display
              bigImage={this.state.bigImage}
              randomImageGenerator={this.randomImageGenerator}
            />
            <button onClick={this.backbutton}> {"<"} </button>
            <button onClick={this.forwardButton}> {">"} </button>
            <Thumbnails images={this.state.images} backbutton={this.backbutton} forwardButton={this.forwardButton}/>
          </div>
        );
      }
    }
    export default Imager;