import React from 'react';
import {
    Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter, Nav, NavItem, NavLink, TabContent, TabPane, Button
} from 'reactstrap';

class ReactWizard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentStep: 0,
            nextButton: (this.props.steps.length > 1 ? true:false),
            previousButton: false,
            finishButton: (this.props.steps.length === 1 ? true:false)
        };
        this.navigationStepChange = this.navigationStepChange.bind(this);
    }
    navigationStepChange(key){
        if(this.props.navSteps){
            this.setState({
                currentStep: key,
                nextButton: (this.props.steps.length > key + 1 ? true:false),
                previousButton: (key > 0 ? true:false),
                finishButton: (this.props.steps.length === key + 1 ? true:false)
            });
        }
    }
    nextButtonClick(){
        if(
            this.props.validate &&
            ((this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined &&
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated()) ||
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined)){
                var key = this.state.currentStep + 1;
                this.setState({
                    currentStep: key,
                    nextButton: (this.props.steps.length > key + 1 ? true:false),
                    previousButton: (key > 0 ? true:false),
                    finishButton: (this.props.steps.length === key + 1 ? true:false)
                });
        }
    }
    previousButtonClick(){
        var key = this.state.currentStep - 1;
        if(
            key >= 0 &&
            this.props.validate &&
            ((this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined &&
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated()) ||
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined)){
                this.setState({
                    currentStep: key,
                    nextButton: (this.props.steps.length > key + 1 ? true:false),
                    previousButton: (key > 0 ? true:false),
                    finishButton: (this.props.steps.length === key + 1 ? true:false)
                });
        }
    }
    finishButtonClick(){
        if(
            this.props.validate &&
            ((this.refs[this.props.steps[this.state.currentStep].stepName].isValidated !== undefined &&
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated()) ||
            this.refs[this.props.steps[this.state.currentStep].stepName].isValidated === undefined) &&
            this.props.finishButtonClick !== undefined){
                    this.props.finishButtonClick();
        }
    }
    render(){

        return(
            <div className="wizard-container">
                <Card className="card-wizard active" data-color={this.props.color}>
                    <form>
                        {(this.props.title !== undefined || this.props.subtitle !== undefined) ? (<CardHeader className={this.props.headerTextCenter !== undefined ? "text-center":""}>
                            {this.props.title !== undefined ? (<CardTitle>{this.props.title}</CardTitle>):null}
                            {this.props.subtitle !== undefined ? (<CardSubtitle>{this.props.subtitle}</CardSubtitle>):null}
                        </CardHeader>):null}
                        <div className="wizard-navigation">
                            <Nav pills>
                                {
                                    this.props.steps.map((prop,key) => {
                                        return (
                                            <NavItem key={key} >
                                                <NavLink
                                                    className={key === this.state.currentStep ? "active":""}
                                                    onClick={() => this.navigationStepChange(key)}
                                                >
                                                    {prop.stepName}
                                                </NavLink>
                                            </NavItem>
                                        )
                                    })
                                }
                            </Nav>
                            <div className="moving-tab" style={{width: "238.885px", transform: "translate3d(-8px, 0px, 0px)", transition: "all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"}}>About</div>
                        </div>
                        <CardBody>
                            <TabContent activeTab={this.state.currentStep}>
                                {
                                    this.props.steps.map((prop,key) => {
                                        return (
                                            <TabPane tabId={key} key={key} className={this.state.currentStep === key ? "fade show":"fade"}>
                                                <prop.component ref={prop.stepName}/>
                                            </TabPane>
                                        );
                                    })
                                }
                            </TabContent>
                        </CardBody>
                        <CardFooter>
                            <div className="pull-right">
                                {this.state.nextButton ? (<Button className={"btn-next" + (this.props.nextButtonClasses !== undefined ? (" "+this.props.nextButtonClasses):"")} onClick={() => this.nextButtonClick()}>{this.props.nextButtonText !== undefined ? this.props.nextButtonText:"Next"}</Button>):null}
                                {this.state.finishButton ? (<Button className={"btn-finish" + (this.finishButtonClasses !== undefined ? (" "+this.props.finishButtonClasses):"")} onClick={() => this.finishButtonClick()}>{this.props.finishButtonText !== undefined ? this.props.finishButtonText:"Finish"}</Button>):null}
                            </div>
                            <div className="pull-left">
                                {this.state.previousButton ? (<Button className={"btn-previous" + (this.props.previousButtonClasses !== undefined ? (" "+this.props.previousButtonClasses):"")} onClick={() => this.previousButtonClick()}>{this.props.previousButtonText !== undefined ? this.props.previousButtonText:"Previous"}</Button>):null}
                            </div>
                            <div className="clearfix">

                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        );
    }
}

export default ReactWizard;
