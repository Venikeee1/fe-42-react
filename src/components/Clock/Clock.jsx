import { Component, createRef } from 'react';

export class Clock extends Component {
  state = {
    hours: '',
    minutes: '',
    seconds: '',
    intervalId: '',
  };

  constructor() {
    super();
    this.timerId = createRef('');
  }

  getCurrentTime() {
    const time = new Date();

    return {
      hours: this.formatValue(time.getHours()),
      minutes: this.formatValue(time.getMinutes()),
      seconds: this.formatValue(time.getSeconds()),
    };
  }

  formatValue = (value) => {
    return value > 9 ? value : `0${value}`;
  };

  componentDidMount() {
    this.setState(this.getCurrentTime());

    this.timerId.current = setInterval(() => {
      this.setState(this.getCurrentTime());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId.current);
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <section>
        <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
      </section>
    );
  }
}
