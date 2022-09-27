import * as React from "react";

interface CounterProps {
  onDelete: any;
  onInc: any;
  onDec: any;
  counter: any;
}

interface CounterState {}

class Counter extends React.Component<CounterProps, CounterState> {
  render() {
    return (
      <div className="flex gap-4 justify-between items-center mx-4 my-4">
        <span className="text-3xl text-white font-bold">
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onInc(this.props.counter)}
          className="px-2 py-2 bg-white shadow-black shadow-lg hover:bg-blue-400 rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDec(this.props.counter)}
          className="px-2 py-2 bg-white shadow-black shadow-lg hover:bg-blue-400 rounded-lg"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="px-2 py-2 bg-red-600 shadow-black shadow-lg hover:bg-blue-400 rounded-lg"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    if (this.props.counter.value === 0) {
      return "Zero";
    } else {
      return this.props.counter.value;
    }
  }
}

export default Counter;
