import React, { Component } from "react";
import GifCard from "./components/GifCard";
import Navbar from "./components/Navbar";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images,
    score: 0,
    topscore: 0,
    id: [],
  };


  scoreGif = event => {
    const imageId = event.target.getAttribute("data-id");
    //  console.log(imageId);
    if (this.state.id.includes(imageId)) {

      return this.setState({ score: 0 });
    }
    this.setState({ score: this.state.score + 1 });
    if (this.state.score < this.state.topscore) {
      console.log("good");
    }
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    //  let tmp= this.state.id;
    //  tmp= tmp.push(imageId);
    //  this.setState({id: tmp});
    // console.log(tmp);


  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} />

        {
          this.state.images.map(image => (
            <GifCard
              scoreGif={this.scoreGif}
              id={image.id}
              key={image.id}
              image={image.image}

            />
          ))
        }
      </div>

    );
  }
}

export default App;
