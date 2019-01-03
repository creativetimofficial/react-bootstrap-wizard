# React Wizard

[![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]

**React Bootstrap Wizard** is a react component package that allows you to split a complicated flow or a complicated form in multiple steps and it's made with [reactstrap components](https://reactstrap.github.io/) and [React](https://reactjs.org/) using [Creative Tim Now UI styles](https://www.creative-tim.com/product/now-ui-kit-pro).

## Installation

```
npm install --save react-bootstrap-wizard@latest
```

## Usage

Import *react-wizard* in your component:
```
import ReactWizard from 'react-bootstrap-wizard';
```
After that, in your component render method add the following line:
```
<ReactWizard {...props} /> // where props are the properties you want
```

## Properties
```
ReactWizard.defaultProps = {
  validate: false,
  previousButtonText: "Previous",
  finishButtonText: "Finish",
  nextButtonText: "Next",
  color: "primary",
  progressbar: false
};

ReactWizard.propTypes = {
  color: PropTypes.oneOf(["primary", "green", "orange", "red", "blue"]),
  previousButtonClasses: PropTypes.string,
  finishButtonClasses: PropTypes.string,
  nextButtonClasses: PropTypes.string,
  headerTextCenter: PropTypes.bool,
  navSteps: PropTypes.bool,
  validate: PropTypes.bool,
  finishButtonClick: PropTypes.func,
  previousButtonText: PropTypes.node,
  finishButtonText: PropTypes.node,
  nextButtonText: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
  progressbar: PropTypes.bool,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      stepName: PropTypes.string.isRequired,
      stepIcon: PropTypes.string,
      component: PropTypes.func.isRequired,
      stepProps: PropTypes.object,
    })
  ).isRequired
};
```

### *color*
This prop is used to create the background color of the header and can be one of (***default is the first option***):
```
1. 'primary'
2. 'green'
3. 'orange'
4. 'red'
5. 'blue'
```

### *previousButtonClasses*
This is a string prop that you can use it to add new classes to the previous button that appears in the footer.

### *nextButtonClasses*
This is a string prop that you can use it to add new classes to the next button that appears in the footer.

### *finishButtonClasses*
This is a string prop that you can use it to add new classes to the finish button that appears in the footer.

### *previousButtonText*
This is a prop used to add text/node to the previous button (default is ***Previous***).

### *nextButtonText*
This is a prop used to add text/node to the next button (default is ***Next***).

### *finishButtonText*
This is a prop used to add text/node to the previous button (default is ***Finish***).

### *headerTextCenter*
Use this prop to make the title and subtitle of the wizard center aligned.

### *navSteps*
Use this prop to make the wizard steps clickable.

### *title*
Use this prop to add a nice title to your wizard.

### *description*
Use this prop to add a nice description / subtitle to your wizard.

### *progressbar*
By setting this prop to true, a progressbar will we rendered instead of a moving tab for the active tab (default is ***false***).

### *steps*
This is an array of objects. This objects have two properties:
1. *stepName* -> used for the name that will appear in the nav (**these have to be unique**)
2. *stepIcon* -> used to add an icon alongside the name (**these has to be a string**)
3. *component* -> this is what will be rendered for each *stepName* (**has to be class/function**)
4. *stepProps* -> this props will be added to the step upon rendering (**has to be an object - like the state object**)
Example of steps:
```
var steps = [
  {
    stepName: "About",
    stepIcon: "tim-icons icon-single-02",
    component: Step1
  },
  {
    stepName: "Account",
    stepIcon: "tim-icons icon-settings-gear-63",
    component: Step2
  },
  {
    stepName: "Address",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step3,
    stepProp: {
      prop1: true,
      prop2: "A string"
    }
  }
];
```

### *validate*
This controls the validation of each step. The user won't be able to pass a step that isn't valid.
The validation is done in each step's component class/function.
You have to create a function **isValidated** with no parameters that will return one of *true* or *false*.
If returned *true*, than the user will be able to go to the next step, else if returned *false*, than the user won't be able to go to the next step.
If this prop is set, and the step component doesn't have the **isValidated** function, than the default will be considered **true**, and the user will be able to go to the next step.

### *finishButtonClick*
This function is called when the user presses the finish button.
See the bellow example to see how to use it.
```
function finishButtonClick(allStepStates)
```

## Example code

```
import React from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step here"
    };
  }
  render() {
    return <div>Hey from First</div>;
  }
}
class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondStep: "second step here"
    };
  }
  isValidated() {
    // do some validations
    // decide if you will
    return true;
    // or you will
    // return false;
  }
  render() {
    return <div>Hey from Second</div>;
  }
}
class ThirdStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thirdStep: "third step here"
    };
  }
  render() {
    return <div>Hey from Third</div>;
  }
}

var steps = [
  // this step hasn't got a isValidated() function, so it will be considered to be true
  { stepName: "First", component: FirstStep },
  // this step will be validated to false
  { stepName: "Second", component: SecondStep },
  // this step will never be reachable because of the seconds isValidated() steps function that will always return false
  { stepName: "Third", component: ThirdStep }
];

class WizardExample extends React.Component {
  finishButtonClick(allStates) {
    console.log(allStates);
  }
  render() {
    return (
      <Container fluid style={{ marginTop: "15px" }}>
        <Row>
          <Col xs={12} md={6} className="mr-auto ml-auto">
            <ReactWizard
              steps={steps}
              navSteps
              title="react-wizard"
              description="This will help you split a complicated flow or a complicated form in multiple steps."
              headerTextCenter
              validate
              color="primary"
              finishButtonClick={this.finishButtonClick}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<WizardExample />, document.getElementById("root"));
```

## Styles
Be sure to include the styles in your project.
You can either include the css:
```
import "react-bootstrap-wizard/dist/react-wizard.css"
```
Or the scss
```
import "react-bootstrap-wizard/dist/react-wizard.scss"
```

## Dependencies

For this component to work properly you need to have the following libraries installed in your project:

```
npm install --save reactstrap
npm install --save bootstrap
```


[CHANGELOG]: ./CHANGELOG.md

[LICENSE]: ./LICENSE.md
[version-badge]: https://img.shields.io/badge/version-0.0.6-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
