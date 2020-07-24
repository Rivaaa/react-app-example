// import React from "react";

// class Search extends React.Component {
//   state = {
//     input: "",
//   };
//   handleTyping = (e) => {
//     this.setState({ input: e.target.value });
//     let text = e.target.value;
//     text = text
//       .toLowerCase()
//       .split(" ")
//       .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//       .join(" ");
//     this.props.filterNames(name);
//   };
//   render() {
//     return (
//       <div className="search">
//         <form
//           onKeyPress={(event) => {
//             if (event.which === 13 /* Enter */) {
//               event.preventDefault();
//             }
//           }}
//         >
//           <input
//             type="text"
//             placeholder="Filter by name..."
//             onChange={this.handleTyping}
//           />
//         </form>
//       </div>
//     );
//   }
// }
// export default Search;

// filterNames = (input) => {
//   let fishes = this.state.fishes.find((fishes) => {
//     return fishes.name === input;
//   });
//   this.setState({ foundFish: fishes, filtered: true });
// };
