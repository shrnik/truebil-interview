import React from "react";

export class Step1 extends React.Component {
  state = {
    showCars: true
  };
  handleCarList = e => {
    e.preventDefault();
    const showCars = !this.state.showCars;
    this.setState({ showCars });
  };

  render() {
    let status = this.props.status;
    let data = this.props.data;
    console.log(this.state.showCars);
    return (
      <React.Fragment>
        <div className="heading">
          {status === "completed" && data.cars
            ? "You have taken test drive"
            : "Please Select cars for test drive"}
        </div>
        {status === "completed" && data.cars.length > 1 ? (
          this.state.showCars ? (
            <div className="details">
              {status === "completed" && data.cars[0]} and{" "}
              <a href="" type="button" onClick={this.handleCarList}>
                {data.cars.length - 1} others
              </a>
            </div>
          ) : (
            <div className="details">
              {data.cars.map(car => {
                return <div>{car}</div>;
              })}
              <a href="" type="button" onClick={this.handleCarList}>
                Hide
              </a>
            </div>
          )
        ) : (
          <div className="details">
            {status === "completed" && data.cars[0]}
          </div>
        )}
      </React.Fragment>
    );
  }
}
