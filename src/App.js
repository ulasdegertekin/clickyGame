import React, { Component } from "react";
import GifCard from "./components/GifCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images
  };

  removeFriend = id => {
    // Filter this.state.images for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.images equal to the new images array
    this.setState({ images });
  };

  // Map over this.state.images and render a imageCard component for each image object
  render() {
    return (
      <Wrapper>
        <Navbar>
          <div class="row">
            <div class="col-sm-6"> CLICKY GAME</div>
            <div class="col-sm-6">Do not click the same image</div>
          </div>
        </Navbar>
        {
          this.state.images.map(image => (
            <GifCard
              removeFriend={this.removeFriend}
              id={image.id}
              key={image.id}
              image={image.image}

            />
          ))
        }
      </Wrapper >
    );
  }
}

export default App;
