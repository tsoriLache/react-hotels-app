import React from 'react';
import { Link } from 'react-router-dom';
import HotelCard from './HotelCard';
import { kebabCase } from '../helpers/string';

class HotelsGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="gallery">
        {this.props.hotels.map((hotel, index) => {
          return (
            <Link to={kebabCase(hotel.name)} key={'' + index}>
              <HotelCard name={hotel.name} img={hotel.img} />
            </Link>
          );
        })}
      </main>
    );
  }
}

export default HotelsGallery;
