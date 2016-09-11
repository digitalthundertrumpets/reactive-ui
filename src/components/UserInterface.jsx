import React from 'react';

class UserInterface extends React.Component {

  renderShape() {

    var xPos = 0;
    var yPos = 0;

    if(this.props.shape=="Circle") {
      xPos = 50 + (this.props.location * 100);
      yPos = 50;
      return <circle cx={xPos} cy={yPos} r={40} fill={this.props.color} />
    } else if(this.props.shape=="Rectangle") {
      xPos = 10 + (this.props.location * 100);
      yPos = 10;
      return <rect x={xPos} y={yPos} height={80} width={80} fill={this.props.color} />
    } else if(this.props.shape=="Egg") {
      xPos = 50 + (this.props.location * 100);
      yPos = 50;
      return <ellipse cx={xPos} cy={yPos} rx={30} ry={40} fill={this.props.color} />
    } else if(this.props.shape=="Line") {
      xPos = 10 + (this.props.location * 100);
      yPos = 50;
      return <line x1={xPos} y1={yPos} x2={xPos+80} y2={yPos} fill={this.props.color} style={{ stroke:this.props.color, strokeWidth:4 }} />
    }

  }

  render() {
    return (
      <div>
        <svg width="400" height="100">
          {this.renderShape()}
        </svg>
      </div>
    )
  }
}

export default UserInterface;
