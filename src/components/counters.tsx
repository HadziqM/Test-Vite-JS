import * as React from "react";
import Counter from "./counter";
interface CountersProps {}

interface CountersState {}

class Counters extends React.Component<CountersProps, CountersState> {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 2 },
    ],
  };
  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <button
          className="bg-yellow-400 px-2 py-2 shadow-black shadow-lg rounded-lg"
          onClick={this.resetFunc}
        >
          Reset
        </button>
        {this.state.counters.map((i) => (
          <Counter
            onDelete={() => this.deleteFunc(i.id)}
            key={i.id}
            counter={i}
            onInc={() => this.incFunc(i)}
            onDec={() => this.decFunc(i)}
          />
        ))}
      </div>
    );
  }

  resetFunc = () => {
    const rest = this.state.counters.map((i) => {
      i.value = 0;
      return i;
    });
    this.setState({ rest });
  };
  incFunc = (counte: any) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counte);
    counters[index].value += 1;
    this.setState({ counters });
  };
  decFunc = (counte: any) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counte);
    counters[index].value -= 1;
    this.setState({ counters });
  };

  deleteFunc = (counterId: number) => {
    const counters = this.state.counters.filter((i) => i.id !== counterId);
    this.setState({ counters: counters });
  };
}
export default Counters;
