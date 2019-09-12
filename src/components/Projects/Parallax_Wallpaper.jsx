import React, { Component } from 'react';
import './../../assets/Parallax_Wallpaper.css';


class Parallax_Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="parallax">
        <div class="parallaxLayer layer_1">
          <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_1.png?raw=true" />
        </div>
        <div class="parallaxLayer layer_2">
          <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_2.png?raw=true" />
        </div>
        <div class="parallaxLayer layer_3">
          <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_4.png?raw=true" />
        </div>
        <div class="parallaxLayer layer_4">
          <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_5.png?raw=true" />
        </div>
        <div class="parallaxLayer layer_5">
          <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_6.png?raw=true" />
        </div>
        <div class="parallaxLayer layer_6">
          <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_6.png?raw=true" />
        </div>
        <div class="parallax__cover"></div>
      </div>
    );
    }
}


export default Parallax_Wallpaper;
