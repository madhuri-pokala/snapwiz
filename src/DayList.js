import React from "react";

class ItemList extends React.PureComponent {
  render() {
    const { days, onAddDay, onRemoveDay } = this.props;
    return (
      <div>
        <button onClick={onAddDay}>Add Day</button>{" "}
        <button onClick={onRemoveDay}>Remove Day</button>
        <ul>
          {days.map((item, indx) => (
            <li key={indx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
