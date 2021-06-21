import React, { Component } from "react";
export class Thumbnails extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          {this.props.images.map((item) => {
            return (
              <img
                style={{ height: 150, width: 150 }}
                key={item}
                src={item}
                alt={item}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Thumbnails;