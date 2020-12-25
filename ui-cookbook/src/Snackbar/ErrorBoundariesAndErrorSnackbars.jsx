import React, {  Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
});

const ErrorBoundary = withStyles(styles)(
  class extends Component {
    state = { error: null };

    onClose = () => {
      this.setState({ error: null });
    };

    componentDidCatch(error) {
      this.setState({ error });
    }

    render() {
      const { classes } = this.props;

      return (
        <>
          {this.state.error === null && this.props.children}
          <Snackbar
            open={Boolean(this.state.error)}
            message={this.state.error !== null && this.state.error.toString()}
            ContentProps={{ classes: { root: classes.error } }}
          />
        </>
      );
    }
  },
);

const MyButton = ({ label, throwError }) => {
  if (throwError) {
    throw new Error('Random error');
  }
  return <Button>{label}</Button>;
};

export default () => (
  <>
    <ErrorBoundary>
      <MyButton label="First Button" />
    </ErrorBoundary>
    <ErrorBoundary>
      <MyButton label="Second Button" throwError />
    </ErrorBoundary>
  </>
);
