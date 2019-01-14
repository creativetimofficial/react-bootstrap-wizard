import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button
} from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";

class ReactWizard extends React.Component {
  constructor(props) {
    super(props);
    let width;
    if (this.props.steps.length === 1) {
      width = "100%";
    } else {
      if (window.innerWidth < 600) {
        if (this.props.steps.length !== 3) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      } else {
        if (this.props.steps.length === 2) {
          width = "50%";
        } else {
          width = 100 / 3 + "%";
        }
      }
    }
    this.state = {
      currentStep: 0,
      highestStep: 0,
      color: this.props.color !== undefined ? this.props.color : "primary",
      nextButton: this.props.steps.length > 1 ? true : false,
      previousButton: false,
      finishButton: this.props.steps.length === 1 ? true : false,
      width: width,
      wizardData:
        this.props.wizardData !== undefined ? this.props.wizardData : {},
      movingTabStyle: {
        transition: "transform 0s"
      },
      progressbarStyle: {
        width: 100 / this.props.steps.length / 2 + "%"
      }
    };
    this.navigationStepChange = this.navigationStepChange.bind(this);
    this.refreshAnimation = this.refreshAnimation.bind(this);
    this.previousButtonClick = this.previousButtonClick.bind(this);
    this.previousButtonClick = this.previousButtonClick.bind(this);
    this.finishButtonClick = this.finishButtonClick.bind(this);
  }
  componentDidMount() {
    this.refreshAnimation(0);
    window.addEventListener("resize", this.updateWidth.bind(this));
  }
  componentWillUnmount() {
    this.isCancelled = true;
    window.removeEventListener("resize", this.updateWidth);
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  updateWidth() {
    !this.isCancelled &&
      setTimeout(() => this.refreshAnimation(this.state.currentStep), 200);
  }
  navigationStepChange(key) {
    if (this.props.navSteps) {
      var validationState = true;
      if (this.props.validate && key > this.state.currentStep) {
        for (var i = this.state.currentStep; i < key; i++) {
          if (
            this.refs[this.props.steps[i].stepName].isValidated !== undefined &&
            this.refs[this.props.steps[i].stepName].isValidated() === false
          ) {
            validationState = false;
            break;
          }
        }
      }
      if (validationState) {
        this.setState({
          wizardData: {
            ...this.state.wizardData,
            [this.props.steps[this.state.currentStep].stepName]: this.refs[
              this.props.steps[this.state.currentStep].stepName
            ].state
          },
          currentStep: key,
          highestStep:
            key > this.state.highestStep ? key : this.state.highestStep,
          nextButton: this.props.steps.length > key + 1 ? true : false,
          previousButton: key > 0 ? true : false,
          finishButton: this.props.steps.length === key + 1 ? true : false
        });
        this.refreshAnimation(key);
      }
    }
  }
  nextButtonClick() {
    if (
      (this.props.validate &&
        ((this.refs[this.props.steps[this.state.currentStep].stepName]
          .isValidated !== undefined &&
          this.refs[
            this.props.steps[this.state.currentStep].stepName
          ].isValidated()) ||
          this.refs[this.props.steps[this.state.currentStep].stepName]
            .isValidated === undefined)) ||
      this.props.validate === undefined ||
      !this.props.validate
    ) {
      var key = this.state.currentStep + 1;
      this.setState({
        wizardData: {
          ...this.state.wizardData,
          [this.props.steps[this.state.currentStep].stepName]: this.refs[
            this.props.steps[this.state.currentStep].stepName
          ].state
        },
        currentStep: key,
        highestStep:
          key > this.state.highestStep ? key : this.state.highestStep,
        nextButton: this.props.steps.length > key + 1 ? true : false,
        previousButton: key > 0 ? true : false,
        finishButton: this.props.steps.length === key + 1 ? true : false
      });
      this.refreshAnimation(key);
    }
  }
  previousButtonClick() {
    var key = this.state.currentStep - 1;
    if (key >= 0) {
      this.setState({
        wizardData: {
          ...this.state.wizardData,
          [this.props.steps[this.state.currentStep].stepName]: this.refs[
            this.props.steps[this.state.currentStep].stepName
          ].state
        },
        currentStep: key,
        highestStep:
          key > this.state.highestStep ? key : this.state.highestStep,
        nextButton: this.props.steps.length > key + 1 ? true : false,
        previousButton: key > 0 ? true : false,
        finishButton: this.props.steps.length === key + 1 ? true : false
      });
      this.refreshAnimation(key);
    }
  }
  finishButtonClick() {
    if (
      (this.props.validate === false &&
        this.props.finishButtonClick !== undefined) ||
      (this.props.validate &&
        ((this.refs[this.props.steps[this.state.currentStep].stepName]
          .isValidated !== undefined &&
          this.refs[
            this.props.steps[this.state.currentStep].stepName
          ].isValidated()) ||
          this.refs[this.props.steps[this.state.currentStep].stepName]
            .isValidated === undefined) &&
        this.props.finishButtonClick !== undefined)
    ) {
      this.setState(
        {
          progressbarStyle: {
            width: "100%"
          },
          wizardData: {
            ...this.state.wizardData,
            [this.props.steps[this.state.currentStep].stepName]: this.refs[
              this.props.steps[this.state.currentStep].stepName
            ].state
          }
        },
        () => {
          this.props.finishButtonClick(this.state.wizardData);
        }
      );
    }
  }
  refreshAnimation(index) {
    var total = this.props.steps.length;
    var li_width = 100 / total;

    var total_steps =
      this.props.steps !== undefined ? this.props.steps.length : 0;
    var move_distance =
      this.refs.wizard !== undefined
        ? this.refs.navStepsLi.children[0].clientWidth / total_steps
        : 0;
    var index_temp = index;
    var vertical_level = 0;

    var mobile_device = window.innerWidth < 600 && total > 3;

    if (mobile_device) {
      move_distance = this.refs.navStepsLi.children[0].clientWidth / 2;
      index_temp = index % 2;
      li_width = 50;
    }

    this.setState({ width: li_width + "%" });

    var step_width = move_distance;

    move_distance = move_distance * index_temp;

    if (mobile_device) {
      vertical_level = parseInt(index / 2);
      vertical_level = vertical_level * 38;
    }

    var movingTabStyle = {
      width: step_width,
      transform:
        "translate3d(" + move_distance + "px, " + vertical_level + "px, 0)",
      transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"
    };
    this.setState({
      movingTabStyle: movingTabStyle,
      progressbarStyle: {
        width: move_distance + step_width / 2
      }
    });
  }
  render() {
    return (
      <div className="wizard-container" ref="wizard">
        <Card className="card card-wizard active" data-color={this.state.color}>
          {this.props.title !== undefined ||
          this.props.description !== undefined ? (
            <CardHeader
              className={
                this.props.headerTextCenter !== undefined ? "text-center" : ""
              }
              data-background-color={this.state.color}
            >
              {this.props.title !== undefined ? (
                <CardTitle tag="h3">{this.props.title}</CardTitle>
              ) : null}
              {this.props.description !== undefined ? (
                <h3 className="description">{this.props.description}</h3>
              ) : null}
              <div className="wizard-navigation" ref="navStepsLi">
                <div className="progress-with-circle">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={this.state.progressbarStyle}
                  />
                </div>
                <Nav pills>
                  {this.props.steps.map((prop, key) => {
                    return (
                      <NavItem key={key} style={{ width: this.state.width }}>
                        <NavLink
                          className={classnames(
                            { active: key === this.state.currentStep },
                            { checked: key <= this.state.highestStep }
                          )}
                          onClick={() => this.navigationStepChange(key)}
                        >
                          {prop.stepIcon !== undefined &&
                          prop.stepIcon !== "" ? (
                            <i className={prop.stepIcon} />
                          ) : null}
                          {this.props.progressbar ? (
                            <p>{prop.stepName}</p>
                          ) : (
                            prop.stepName
                          )}
                        </NavLink>
                      </NavItem>
                    );
                  })}
                </Nav>
                {this.props.progressbar ? null : (
                  <div className="moving-tab" style={this.state.movingTabStyle}>
                    {this.props.steps[this.state.currentStep].stepIcon !==
                      undefined &&
                    this.props.steps[this.state.currentStep].stepIcon !== "" ? (
                      <i
                        className={
                          this.props.steps[this.state.currentStep].stepIcon
                        }
                      />
                    ) : null}
                    {this.props.steps[this.state.currentStep].stepName}
                  </div>
                )}
              </div>
            </CardHeader>
          ) : null}
          <CardBody>
            <TabContent activeTab={this.state.currentStep}>
              {this.props.steps.map((prop, key) => {
                return (
                  <TabPane
                    tabId={key}
                    key={key}
                    className={classnames("fade", {
                      show: this.state.currentStep === key
                    })}
                  >
                    {typeof prop.component === "function" ? (
                      <prop.component
                        ref={prop.stepName}
                        wizardData={this.state.wizardData}
                        {...prop.stepProps}
                      />
                    ) : (
                      <div ref={prop.stepName}>{prop.component}</div>
                    )}
                  </TabPane>
                );
              })}
            </TabContent>
          </CardBody>
          <CardFooter>
            <div style={{ float: "right" }}>
              {this.state.nextButton ? (
                <Button
                  className={classnames("btn-next", {
                    [this.props.nextButtonClasses]:
                      this.props.nextButtonClasses !== undefined
                  })}
                  onClick={() => this.nextButtonClick()}
                >
                  {this.props.nextButtonText !== undefined
                    ? this.props.nextButtonText
                    : "Next"}
                </Button>
              ) : null}
              {this.state.finishButton ? (
                <Button
                  className={classnames("btn-finish d-inline-block", {
                    [this.props.finishButtonClasses]:
                      this.props.finishButtonClasses !== undefined
                  })}
                  onClick={() => this.finishButtonClick()}
                >
                  {this.props.finishButtonText !== undefined
                    ? this.props.finishButtonText
                    : "Finish"}
                </Button>
              ) : null}
            </div>
            <div style={{ float: "left" }}>
              {this.state.previousButton ? (
                <Button
                  className={classnames("btn-previous", {
                    [this.props.previousButtonClasses]:
                      this.props.previousButtonClasses !== undefined
                  })}
                  onClick={() => this.previousButtonClick()}
                >
                  {this.props.previousButtonText !== undefined
                    ? this.props.previousButtonText
                    : "Previous"}
                </Button>
              ) : null}
            </div>
            <div className="clearfix" />
          </CardFooter>
        </Card>
      </div>
    );
  }
}

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
      stepProps: PropTypes.object
    })
  ).isRequired
};

export default ReactWizard;
