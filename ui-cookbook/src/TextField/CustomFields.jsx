import React from 'react';
import { fade, ThemeProvider, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    borderRadius: 4,
    border: '1px solid #ced4da',
    backgroundColor: theme.palette.common.transition,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}))(InputBase);

const OutlineInput = withStyles(theme => ({
  root: {
    width: 300,
    height: 40,
    backgroundColor: '#f1f3f5',

    'label + &': {
      marginTop: theme.spacing(2),
    },

    '&:hover $notchedOutline': {
      borderWidth: 2,
      borderColor: 'gray',
    },

    '&$focused $notchedOutline': {
      borderWidth: 2,
      borderColor: 'green',
    },

    '& input:invalid + $notchedOutline': {
      borderColor: 'pink',
    },
  },
  input: {
    padding: '10px 8px',
    fontSize: 16,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  notchedOutline: {
    outline: 0,
    borderRadius: 3,
    border: '0.5px solid #ced4da',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  focused: {},
}))(OutlinedInput);

const useStylesReddit = makeStyles(theme => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function CustomFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <Grid container>
        <Grid item lg="12" mg="12" sm="12">
          <Typography>CssTextField</Typography>
          <CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" />
          <CssTextField
            className={classes.margin}
            label="Custom CSS"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </Grid>

        <Grid item lg="12" mg="12" sm="12">
          <ThemeProvider theme={theme}>
            <Typography>ThemeProvider</Typography>
            <TextField className={classes.margin} label="ThemeProvider" id="mui-theme-provider-standard-input" />
            <TextField
              className={classes.margin}
              label="ThemeProvider"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
          </ThemeProvider>
        </Grid>

        <Grid item lg="12" mg="12" sm="12">
          <Typography>Bootstrap</Typography>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Bootstrap
            </InputLabel>
            <BootstrapInput id="bootstrap-input" />
          </FormControl>
        </Grid>

        <Grid item lg="12" mg="12" sm="12">
          <Typography>OutLinInputCustom</Typography>
          <FormControl className={classes.margin}>
            <InputLabel shrink htmlFor="OutLinInputCustom">
              OutLinInputCustom
            </InputLabel>
            <OutlineInput id="OutLinInputCustom" />
          </FormControl>

          <FormControl className={classes.margin} required>
            <InputLabel shrink htmlFor="OutLinInputCustom-valid">
              OutLinInputCustom-validation
            </InputLabel>
            <OutlineInput id="OutLinInputCustom-valid" />
          </FormControl>

          <FormControl className={classes.margin} error>
            <InputLabel shrink htmlFor="OutLinInputCustom-error">
              OutLinInputCustom-error
            </InputLabel>
            <OutlineInput id="OutLinInputCustom-error" />
          </FormControl>
        </Grid>

        <Grid itme lg="12" mg="12" sm="12">
          <Typography>RedditTextField</Typography>
          <RedditTextField className={classes.margin} label="Reddit" variant="filled" id="reddit-input" />
        </Grid>

        <Grid itme lg="12" mg="12" sm="12">
          <Typography>InputBase</Typography>
          <InputBase className={classes.margin} defaultValue="Naked input" inputProps={{ 'aria-label': 'naked' }} />
        </Grid>

        <Grid itme lg="12" mg="12" sm="12">
          <Typography>CSS validation</Typography>
          <ValidationTextField
            className={classes.margin}
            required
            label="CSS validation style"
            variant="outlined"
            defaultValue="Success"
            id="validation-outlined-input"
          />
        </Grid>
      </Grid>
    </form>
  );
}
export default CustomFields;
