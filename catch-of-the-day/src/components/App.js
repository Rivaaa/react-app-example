import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
