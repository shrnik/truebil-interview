import React from "react";

export class Step1 extends React.Component {
  state = {
    showcars: false
  };
  handleCarList = e => {
    e.preventDefault();
    const showCars = !this.state.showCars;
    this.setState({ showCars });
  };

  render() {
    let status = this.props.status;
    let data = this.props.data;
    return (
      <React.Fragment>
        <div className="heading">
          {status === "completed" && data.cars
            ? "You have taken test drive"
            : "Please Select cars for test drive"}
        </div>
        {data.cars.length > 1 ? (
          <div className="details">
            {status === "completed" && data.cars[0]} and{" "}
            <a href="" type="button" onclick={this.handleCarList}>
              2 others
            </a>
          </div>
        ) : (
          <div className="details">
            {status === "completed" && data.cars[0]}
          </div>
        )}
      </React.Fragment>
    );
  }
}
