import React from 'react';

class CallNowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className="button">
        <span>Call Now</span>
      </button>
    );
  }
}

export default CallNowButton;
