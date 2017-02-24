import React from 'react';

export default class CircularTimer extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Blaze template="circularTimer" align={this.props.align} />
  }
}

CircularTimer.propTypes = {
  align: React.PropTypes.string,
}

CircularTimer.defaultProps = {
  align: 'right',
}