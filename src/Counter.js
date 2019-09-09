import React from "react";
class Counter extends React.PureComponent {
  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onIncrement}>Increment</button>{" "}
        <button onClick={onDecrement}>Decrement</button>
        <div>Clicked: {count} times</div>
      </div>
    );
  }
}
export default Counter;
