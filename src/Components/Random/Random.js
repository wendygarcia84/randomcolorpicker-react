import React from 'react';

export class Random extends React.Component {
    componentDidMount() {
        this.applyColor();
      }
    
      componentDidUpdate(prevProps, prevState) {
        this.applyColor();
      }
    
      formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
      }
    
      isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a,b) => a+b) < 127 * 3;
      }
    
      applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
      }
    
      chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
          random.push(Math.floor(Math.random()*256));
        }
        return random;
      }
    
      render() {
        return (
          <div>
            <h1 className={this.isLight() ? 'white' : 'black'}>
    
            </h1>
          </div>
        );
      }
}