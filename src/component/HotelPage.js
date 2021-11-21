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
      <div className="container">
        <main className="card">
          <header className="card-header">
            <h1 className="title">{this.props.name}</h1>
          </header>
          <article className="card-content">
            <h2 className="secondary-title"> {this.props.address}</h2>
            <p className="text"> {this.props.info} </p>
          </article>
          <footer className="card-footer">
            <CallNowButton />
          </footer>
        </main>
      </div>
    );
  }
}

export default HotelPage;
