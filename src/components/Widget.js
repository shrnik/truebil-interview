import React, { Component } from "react";
import ListItem from "./ListItem";
import { Step1 } from "./Details/Step1";
import { Step2 } from "./Details/Step2";
import { Step3 } from "./Details/Step3";
import { Step4 } from "./Details/Step4";
import { Step5 } from "./Details/Step5";

class Widget extends Component {
  state = {
    currentStep: 3,
    data: [
      {
        date: "14 May",
        action: "You Have taken test Drive",
        details: "2010 White Alto LXI and 2 others"
      },
      {
        date: "15 May",
        action: "Pay Token",
        details: "for 2010 White Alto LXI"
      },
      {
        date: "15 May",
        action: "Processing your loan",
        details: "Usually takes 3-6 for different banks"
      },
      {
        date: "25 May",
        action: "Take car Delivery",
        details: "From our Mumbai showroom"
      },
      {
        date: "14 May",
        action: "Start Ownership Transfer Process",
        details: "Please bring the listed documents at the time of delivery"
      }
    ],
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
          data={this.state.data[0]}
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
          data={this.state.data[0]}
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
