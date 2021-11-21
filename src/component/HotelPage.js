import React from 'react';
import CallNowButton from './CallNowButton';

/* <HotelPage name="" ,address="" ,info=""/> */

class HotelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <h1>{this.props.name}</h1>
        <img src={this.props.img} alt="" width="300px" className="image i1" />
        <div className="details">
          <h1>
            <em>{this.props.address}</em>
          </h1>
          <h2>{this.props.info}</h2>
          <p>3 Days - 2 Nights</p>
        </div>
        <h1>£750</h1>
        <CallNowButton className="button" />
      </div>
    );
  }
}

export default HotelPage;
