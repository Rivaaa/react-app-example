import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    //1. stop the default form from submitting
    event.preventDefault();
    //2. collect the form data into an object
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };

    //console.log(fish);
    //3. send to the App component to store in state
    this.props.addFish(fish);
    //using the function written in app.js to put in the state of the app (storing fish data)

    //4. reset the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="Name" ref={this.nameRef} />
        <input
          name="price"
          type="text"
          placeholder="Price"
          ref={this.priceRef}
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="Desc" ref={this.descRef}></textarea>
        <input
          name="image"
          type="text"
          placeholder="Image"
          ref={this.imageRef}
        />

        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}
export default AddFishForm;
