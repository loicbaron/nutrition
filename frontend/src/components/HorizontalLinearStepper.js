import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CategoryListContainer from '../containers/CategoryListContainer';
import './HorizontalLinearStepper.css';
import PersonDetailsContainer from '../containers/PersonDetailsContainer';
import ConsumptionContainer from '../containers/ConsumptionContainer';
import ConsumptionReportContainer from '../containers/ConsumptionReportContainer';
import Consumption from '../models/Consumption';
import TooltipControlled from './Navigation/TooltipControlled';
import { resetAge } from '../store/Person/personActions';
import { resetConsumption } from '../store/Consumption/consumptionActions';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

function getSteps() {
  // TODO: replace hardcoded by translations .json
  return [
    'step.1',
    'step.2',
    'step.3',
  ];
}

class HorizontalLinearStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      isNextDisabled: true,
      isTooltipActive: false,
    };
    this.classes = styles;
    this.steps = getSteps();
  }

  componentDidUpdate(prevProps, prevState) {
    const { consumption } = this.props;
    if (prevState.activeStep !== this.state.activeStep) {
      if (Object.keys(consumption.result).length > 0) {
        this.setNextActive(true);
        this.setTooltipActive(false);
      } else {
        this.setNextActive(false);
      }
    }
    if (prevProps.consumption.result !== consumption.result) {
      if (Object.keys(consumption.result).length > 0) {
        this.setNextActive(true);
        this.setTooltipActive(true);
      }
    }
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonDetailsContainer handlePersonDetails={this.setNextActive} />;
      case 1:
        return <CategoryListContainer />;
      case 2:
        return <ConsumptionContainer />;
      default:
        return 'Unknown step';
    }
  }

  setNextActive = value => (this.setState({ isNextDisabled: value === false }));

  setTooltipActive = value => (this.setState({ isTooltipActive: value === true }));

  isStepSkipped = (step) => {
    const { skipped } = this.state;
    skipped.has(step);
  };

  isStepOptional = step => false;

  handleNext = () => {
    const { activeStep, skipped } = this.state;
    let newSkipped = skipped;
    if (this.isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped: newSkipped,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep - 1 });
  };

  handleSkip = () => {
    const { activeStep, skipped } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    const newSkipped = new Set(skipped.values());
    newSkipped.add(activeStep);
    this.setState({
      activeStep: activeStep + 1,
      skipped: newSkipped,
    });
  };

  handleReset = () => {
    this.props.resetConsumption();
    this.props.resetAge();
    this.setState({ activeStep: 0 });
  };

  render() {
    const { activeStep, isNextDisabled, isTooltipActive } = this.state;
    const { intl } = this.props;
    let nextButton = (
      <Button
        variant="contained"
        color="primary"
        onClick={this.handleNext}
        className={this.classes.button}
        disabled={isNextDisabled}
      >
        { activeStep === this.steps.length - 1 ? <FormattedMessage id="Finish" /> : <FormattedMessage id="Next" /> }
      </Button>
    );
    if (isTooltipActive) {
      nextButton = (
        <TooltipControlled
          title={intl.formatMessage({ id: 'get.report.title' })}
          text={intl.formatMessage({ id: 'get.report.text' })}
        >
          { nextButton }
        </TooltipControlled>
      );
    }
    return (
      <div className={this.classes.root}>
        <Stepper activeStep={activeStep}>
          {this.steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"><FormattedMessage id="Optional" /></Typography>;
            }
            if (this.isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  <FormattedMessage id={label} />
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === this.steps.length ? (
            <div>
              <div className="stepper-buttons-container">
                <div className="stepper-buttons-start">
                  <Button disabled={activeStep === 0} onClick={this.handleBack} className={this.classes.button}>
                    <FormattedMessage id="Back" />
                  </Button>
                </div>
                <div className="stepper-buttons-end">
                  <Button onClick={this.handleReset} className={this.classes.button}>
                    <FormattedMessage id="Reset" />
                  </Button>
                </div>
              </div>
              <Paper className="stepper-main">
                <ConsumptionReportContainer />
              </Paper>
            </div>
          ) : (
            <div>
              <div className="stepper-buttons-container">
                <div className="stepper-buttons-start">
                  <Button disabled={activeStep === 0} onClick={this.handleBack} className={this.classes.button}>
                    <FormattedMessage id="Back" />
                  </Button>
                </div>
                {this.isStepOptional(activeStep) && (
                  <div className="stepper-buttons-center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleSkip}
                      className={this.classes.button}
                    >
                      <FormattedMessage id="Skip" />
                    </Button>
                  </div>
                )}
                <div className="stepper-buttons-end">
                  { nextButton }
                </div>
              </div>
              <Paper className="stepper-main">
                {this.getStepContent(activeStep)}
              </Paper>
            </div>
          )}
        </div>
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  consumption: Consumption.shape.isRequired,
};

const mapStateToProps = state => ({
  consumption: state.consumption,
});

const mapDispatchToProps = dispatch => ({
  resetAge: () => dispatch(resetAge()),
  resetConsumption: () => dispatch(resetConsumption()),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HorizontalLinearStepper));
