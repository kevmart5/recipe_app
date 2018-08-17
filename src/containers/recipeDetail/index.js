import React from "react";

export default class RecepiDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }

  }

  componentDidMount() {
    console.log(this.props.recipe);
  }

  render() {
    const { categorySelected } = this.state;
    return (
      <React.Fragment>
        <p>Hola</p>
      </React.Fragment>
    );
  }
}