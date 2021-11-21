import React from 'react';

//  <HotelCard name=""/>

class HotelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <main className="card">
          <header className="card-header"></header>
          <article className="card-content">
            <h2 className="secondary-title"> {this.props.name}</h2>
          </article>
        </main>
      </div>
    );
  }
}

HotelCard.defaultProps = {
  name: 'Hotel Name',
};
export default HotelCard;
