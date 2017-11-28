import React from 'react';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

class ReactWizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: this.props.steps[0].stepName
        };
    }
    render() {
        return React.createElement(
            'div',
            { className: 'wizard-container' },
            React.createElement(
                Card,
                { className: 'card-wizard active', 'data-color': this.props.color },
                React.createElement(
                    'form',
                    null,
                    this.props.title !== undefined || this.props.subtitle !== undefined ? React.createElement(
                        CardHeader,
                        { className: this.props.headerTextCenter !== undefined ? "text-center" : "" },
                        this.props.title !== undefined ? React.createElement(
                            CardTitle,
                            null,
                            this.props.title
                        ) : null,
                        this.props.subtitle !== undefined ? React.createElement(
                            CardSubtitle,
                            null,
                            this.props.subtitle
                        ) : null
                    ) : null,
                    React.createElement(
                        'div',
                        { className: 'wizard-navigation' },
                        React.createElement(
                            Nav,
                            { pills: true },
                            this.props.steps.map((prop, key) => {
                                return React.createElement(
                                    NavItem,
                                    { key: key },
                                    React.createElement(
                                        NavLink,
                                        {
                                            className: this.state.currentStep === prop.stepName ? "active" : "",
                                            onClick: () => this.setState({ currentStep: prop.stepName })
                                        },
                                        prop.stepName
                                    )
                                );
                            })
                        )
                    ),
                    React.createElement(
                        CardBody,
                        null,
                        React.createElement(
                            TabContent,
                            { activeTab: this.state.currentStep, className: 'tab-space' },
                            this.props.steps.map((prop, key) => {
                                return React.createElement(
                                    TabPane,
                                    { tabId: prop.stepName, key: key },
                                    React.createElement(
                                        'h5',
                                        { className: 'info-text' },
                                        prop.stepText
                                    )
                                );
                            })
                        )
                    )
                )
            )
        );
    }
}

export default ReactWizard;
