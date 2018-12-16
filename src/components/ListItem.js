import React, { Component } from "react";
import { Content } from "./content";
import { Sidebar } from "./Sidebar";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "" };
  }

  componentDidMount() {
    if (this.props.step < this.props.currentStep) {
      this.setState({ status: "completed" });
    } else if (this.props.step === this.props.currentStep) {
      this.setState({ status: "active" });
    }
    console.log(this.props);
  }
  render() {
    return (
      <div className="item">
        <Sidebar step={this.props.step} status={this.state.status} />
        <Content
          status={this.state.status}
          data={this.props.data}
          details={this.props.content}
        />
      </div>
    );
  }
}

export default ListItem;
