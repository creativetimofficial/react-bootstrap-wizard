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

### *steps*
This is an array of objects. This objects have two properties:
1. *stepName* -> used for the name that will appear in the nav (**these have to be unique**)
2. *component* -> this is what will be rendered for each *stepName* (**has to be class/function**)

### *validate*
This controls the validation of each step. The user won't be able to pass a step that isn't valid.
The validation is done in each step's component class/function.
You have to create a function **isValidated** with no parameters that will return one of *true* or *false*.
If returned *true*, than the user will be able to go to the next step, else if returned *false*, than the user won't be able to go to the next step.
If this prop is set, and the step component doesn't have the **isValidated** function, than the default will be considered **true**, and the user will be able to go to the next step.

## Example code

```
import React from 'react';
import ReactDOM from 'react-dom';
import ReactWizard from 'react-bootstrap-wizard';
import {
    Container, Row, Col
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

class FirstStep extends React.Component{
    render(){
        return (
            <div>Hey from First</div>
        )
    }
}
class SecondStep extends React.Component{
    isValidated(){
        // do some validations
        // decide if you will
        // return true;
        // or you will
        return false;
    }
    render(){
        return (
            <div>Hey from Second</div>
        )
    }
}
class ThirdStep extends React.Component{
    render(){
        return (
            <div>Hey from Third</div>
        )
    }
}

var steps = [
    // this step hasn't got a isValidated() function, so it will be considered to be true
    { stepName: 'First', component: FirstStep },
    // this step will be validated to false
    { stepName: 'Second', component: SecondStep },
    // this step will never be reachable because of the seconds isValidated() steps function that will always return false
    { stepName: 'Third', component: ThirdStep }
];

ReactDOM.render((
    <Container fluid style={{marginTop: "15px"}}>
        <Row>
            <Col xs={12} md={6} className="mr-auto ml-auto">
                <ReactWizard
                    steps={steps}
                    navSteps
                    title="react-wizard"
                    subtitle="This will help you split a complicated flow or a complicated form in multiple steps."
                    headerTextCenter
                    validate
                    color="primary"
                />
            </Col>
        </Row>
    </Container>
), document.getElementById('root'));
```

## Dependencies

For this component to work properly you have to have the following libraries installed in your project:

```
npm install --save reactstrap@5.0.0-alpha.4
npm install --save bootstrap@4.0.0-beta.2
```


[CHANGELOG]: ./CHANGELOG.md

[LICENSE]: ./LICENSE.md
[version-badge]: https://img.shields.io/badge/version-0.0.4-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
