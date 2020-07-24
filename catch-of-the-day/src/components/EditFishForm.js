import React from "react";

class EditFishForm extends React.Component {
  handleChange(event) {
    console.log(event.currentTarget.value);

    // updating the fish
    // 1. take a copy of the current fish
    const updateFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value, //matching the name of the field
    };

    //2.
    this.props.updateFish(this.props.index, updateFish);
  }
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange} //handle the changes of value
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={this.props.fish.desc}></textarea>

        <input type="text" name="image" value={this.props.fish.image} />

        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
