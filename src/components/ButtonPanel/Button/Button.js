import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Button">
        <button>{this.props.value}</button>
      </div>
    );
  }
}
export default Button;