import React, {Component} from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = time => {

}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
    };
    setInterval(() => {
      this.setState({
      })
    }, 1000)
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{moment(getTimeWithOffset(this.state.offset)).format("HH:mm:ss A")}</div>
      </div>
    )
  }
}

export default Clock;
