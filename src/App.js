import React from "react";
import Counter from "./Counter";
import DayList from "./DayList";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      days: []
    };
  }
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  onDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  onAddDay = () => {
    if (days.length !== this.state.days.length) {
      this.setState({
        days: [...this.state.days, days[this.state.days.length]]
      });
    }
  };
  onRemoveDay = () => {
    this.setState({
      days: this.state.days.splice(0, this.state.days.length - 1)
    });
  };
  render() {
    return (
      <div className="App">
        <h1>ItemList display not working</h1>
        <Counter
          count={this.state.count}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        <hr />
        <DayList
          days={this.state.days}
          onAddDay={this.onAddDay}
          onRemoveDay={this.onRemoveDay}
        />
      </div>
    );
  }
}

export default App;
