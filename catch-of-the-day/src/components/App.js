import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import _ from "lodash";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
    sorted_fishes: {},
    editing: false,
  };

  componentDidMount() {
    const { params } = this.props.match;
    const _this = this;
    const localStorageRef = localStorage.getItem(params.storeId);

    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
      onFailure(err) {},
      then() {
        _this.setState({ sorted_fishes: _this.state.fishes });
      },
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  editHandle = () => {
    this.setState({ editing: !this.state.editing });
  };

  //
  sortAscending = () => {
    const starting_data = { ...this.state.fishes };
    const sorted_fishes = _.orderBy(starting_data, ["price"], ["asc"]); // Use Lodash to sort array by 'name'
    console.log("sorted fishes", starting_data);
    this.setState({ sorted_fishes: sorted_fishes });
  };

  sortDescending = () => {
    const starting_data = { ...this.state.fishes };
    const sorted_fishes = _.orderBy(starting_data, ["price"], ["desc"]);
    console.log("sorted fishes", starting_data);
    this.setState({ sorted_fishes: sorted_fishes });
  };
  //
  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({
      fishes,
    });
  };

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="A little shop." />
          <button onClick={this.props.loadSampleFishes}>Products</button>
          <button onClick={() => this.props.Cart}>Cart</button>

          <ul className="sorting">
            <select name="sorting" ref={this.statusRef}>
              <option onClick={this.sortAscending}>Price</option>
            </select>
            <button onClick={this.sortAscending}>asc</button>
            <button onClick={this.sortDescending}>desc</button>
          </ul>

          <button onClick={this.editHandle}>
            {this.state.editing ? "Done" : "Edit"}
          </button>
          {this.state.editing ? (
            <Inventory
              addFish={this.addFish}
              updateFish={this.updateFish}
              deleteFish={this.deleteFish}
              loadSampleFishes={this.loadSampleFishes}
              fish={this.state.fishes}
              storeId={this.props.match.params.storeId}
            />
          ) : (
            <ul className="fishes">
              {Object.keys(this.state.sorted_fishes).map((key) => (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.sorted_fishes[key]}
                  addToOrder={this.addToOrder}
                />
              ))}
              <Order
                fishes={this.state.fishes}
                order={this.state.order}
                removeFromOrder={this.removeFromOrder}
              />
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
