import React, { Component } from 'react';
import Parallax from "parallax-js";
import './../../assets/Parallax_Wallpaper.css';

class ParallaxWallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }
  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return (
      <div>
        <div className="parallax">
          <div data-pointer-events="true" id="scene">
            <ul ref={el => (this.scene = el)}>
              <li className="parallaxLayer" data-depth="1.50" id="p1" />
              <li className="parallaxLayer" data-depth="1.00" id="p3">
                <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_2.png?raw=true" alt="p3"/>
              </li>
              <li className="parallaxLayer" data-depth="0.75" id="p4">
                <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_3.png?raw=true" alt="p4"/>
              </li>
              <li className="parallaxLayer" data-depth="0.5" id="p5">
                <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_4.png?raw=true" alt="p5"/>
              </li>
              <li className="parallaxLayer" data-depth="0.25" id="p2">
                <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_5.png?raw=true" alt="p2"/>
              </li>

              <li className="parallaxLayer" data-depth="0.00" id="p6">
                <img src="https://github.com/DanBurbach/PersonalPortfolio_2.0/blob/master/src/assets/parallax_images/layer_6.png?raw=true" alt="p6"/>
              </li>
            </ul>
          </div>
          <div className="parallax__cover" data-depth="0.00"></div>
        </div>
      </div>
    );
  }
}


export default ParallaxWallpaper;
