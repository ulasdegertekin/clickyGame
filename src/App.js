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
    imageIds: [],
  };


  scoreGif = event => {
    const imageId = event.target.getAttribute("data-id");
    //  console.log(imageId);
    if (this.state.imageIds.includes(imageId)) {

      return this.setState({ score: 0 });
    } else {
      this.setState({ score: this.state.score + 1 });
      this.state.imageIds.push(imageId);
      this.setState({ imageIds: this.state.imageIds })
    }
   

    if (this.state.score >= this.state.topscore) {
      console.log("good");
      this.setState({ topscore: this.state.score})
    }

    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    
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
