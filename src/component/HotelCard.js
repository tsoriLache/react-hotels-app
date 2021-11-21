import React from 'react';

//  <HotelCard name=""/>

class HotelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card 1">
        <div className="card_image">
          {' '}
          <img src={this.props.img} />{' '}
        </div>
        <div className="card_title title-white">
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}

HotelCard.defaultProps = {
  name: 'Hotel Name',
};
export default HotelCard;
