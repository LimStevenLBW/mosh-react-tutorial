import React, { Component } from "react";
import CountersContainer from "./components/CountersContainer";
import NavBar from "./components/NavBar";

class App extends Component {
  //To access this.props in constructor, it must have been passed as constructor(props) and super(props)
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
  }

  componentDidMount() {}

  handleIncrement = counter => {
    //Clones the counters array references
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //Clones the counter object reference
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    //Clones the counters array references
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //Clones the counter object reference
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  //map() method creates a new array with the results of calling a function for every array element.
  //map() calls the provided function once for each element in an array, in order.
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    //The same as setting setState({counters:counters})
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        {/* only show counters with value greater than 0*/}
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />

        <main className="container">
          <CountersContainer
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
