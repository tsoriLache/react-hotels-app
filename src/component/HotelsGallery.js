import React from 'react';
import HotelCard from './HotelCard';

class HotelsGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        {this.props.hotels.map((hotel, index) => {
          return (
            <HotelCard
              key={'' + index}
              name={hotel.name}
              // liClick={() => {
              //   this.props.liClick(item);
              // }}
            />
          );
        })}
      </main>
    );
  }
}

export default HotelsGallery;
