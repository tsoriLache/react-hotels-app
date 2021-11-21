import React from 'react';

class CallNowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className="btn">
        <span className="btn-text">Call Now</span>
        <i className="fas fa-chevron-right"></i>
      </button>
    );
  }
}

export default CallNowButton;
