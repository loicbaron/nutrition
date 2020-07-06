import React from 'react';
import { FormattedMessage } from 'react-intl';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonDetails from './PersonDetails';
import CategoryListContainer from '../containers/CategoryListContainer';
import './HorizontalLinearStepper.css';

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
  return ['Qui êtes vous ?', 'Qu\'avez-vous mangé hier ?', 'Bilan de ma consommation'];
}

class HorizontalLinearStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      isNextDisabled: true,
    };
    this.classes = styles;
    this.steps = getSteps();
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonDetails handlePersonDetails={this.setNextActive} />;
      case 1:
        return <CategoryListContainer />;
      case 2:
        return 'Bilan de ma consommation...';
      default:
        return 'Unknown step';
    }
  }

  setNextActive = value => (this.setState({ isNextDisabled: value.length === 0 }));

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
    this.setState({ activeStep: 0 });
  };

  render() {
    const { activeStep, isNextDisabled } = this.state;
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
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === this.steps.length ? (
            <div>
              <Typography className={this.classes.instructions}>
                <FormattedMessage id="Finished" />
              </Typography>
              <Button onClick={this.handleReset} className={this.classes.button}>
                <FormattedMessage id="Reset" />
              </Button>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={this.classes.button}
                    disabled={isNextDisabled}
                  >
                    {activeStep === this.steps.length - 1 ? <FormattedMessage id="Finish" /> : <FormattedMessage id="Next" />}
                  </Button>
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

export default HorizontalLinearStepper;
