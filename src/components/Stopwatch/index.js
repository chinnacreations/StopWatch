import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeElapsed: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeElapsed: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsed: prevState.timeElapsed + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSec = () => {
    const {timeElapsed} = this.state
    const sec = Math.floor(timeElapsed % 60)

    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  renderMin = () => {
    const {timeElapsed} = this.state
    const min = Math.floor(timeElapsed / 60)

    if (min < 10) {
      return `0${min}`
    }
    return min
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMin()}:${this.renderSec()}`

    return (
      <div className="bg-con">
        <div className="stop-timer-con">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="img"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="desc">Timer</p>
            </div>
            <h1 className="time">{time}</h1>
            <div className="btn-con">
              <button
                className="btn start-btn"
                type="button"
                onClick={this.onStartTimer}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                className="btn stop-btn"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="btn reset-btn"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
