import React, { Component } from "react";
import ListItem from "./ListItem";
import { Step1 } from "./Steps/Step1";
import { Step2 } from "./Steps/Step2";
import { Step3 } from "./Steps/Step3";
import { Step4 } from "./Steps/Step4";
import { Step5 } from "./Steps/Step5";

class Widget extends Component {
  state = {
    currentStep: 3,

    dataNew: [
      {
        date: "14 MAY",
        cars: [
          "2010 White Alto LXI",
          "2010 White Alto LXI",
          "2010 White Alto LXI"
        ]
      },
      {
        date: "20 MAY",
        carSelected: ["2010 White Alto LXI"]
      },
      {
        date: "25 MAY"
      },
      {
        date: "30 MAY",
        location: "Mumbai"
      },
      {
        date: "5 JUNE"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <ListItem
          data={this.state.dataNew[0]}
          step={1}
          currentStep={this.state.currentStep}
          content={(data, status) => {
            return <Step1 data={data} status={status} />;
          }}
        />
        <ListItem
          data={this.state.dataNew[1]}
          step={2}
          currentStep={this.state.currentStep}
          content={(data, status) => {
            return <Step2 data={data} status={status} />;
          }}
        />
        <ListItem
          data={this.state.dataNew[2]}
          step={3}
          currentStep={this.state.currentStep}
          content={() => {
            return <Step3 />;
          }}
        />
        <ListItem
          data={this.state.dataNew[3]}
          step={4}
          currentStep={this.state.currentStep}
          content={(data, status) => {
            return <Step4 data={data} status={status} />;
          }}
        />
        <ListItem
          data={this.state.dataNew[4]}
          step={5}
          currentStep={this.state.currentStep}
          content={() => {
            return <Step5 />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default Widget;
