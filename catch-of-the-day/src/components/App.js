import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {}, //we can add some type of fishes in like fish1 fish2
    order: {},
  };
  addFish = (fish) => {
    console.log(fish);
    //1. take a copy of the existing state(fish1,fish2)
    const fishes = { ...this.state.fishes };
    //2. add our new fish to that fishes variable(which fish is which, unique number of them)
    fishes[`fish${Date.now()}`] = fish;
    //3. set the new fishes object into the state(create a new one like fish3 then add to state)
    this.setState({ fishes: fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    //1. take a copy of state
    const order = { ...this.state.order }; //... is making a copy ot it and putting the copy back
    //2. either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;

    //3. call setState to update our state object with the order
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              // <p>{this.state.fishes[key].name}</p>
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
