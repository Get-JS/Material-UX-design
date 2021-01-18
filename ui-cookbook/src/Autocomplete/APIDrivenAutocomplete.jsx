import React, { useState } from 'react';
import clsx from 'clsx';
import AsyncSelect from 'react-select/async';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const someAPI = searchText =>
  new Promise(resolve => {
    setTimeout(() => {
      const teams = [
        { label: 'Boston Bruins', value: 'BOS' },
        { label: 'Buffalo Sabres', value: 'BUF' },
        { label: 'Detroit Red Wings', value: 'DET' },
        { label: 'Florida Panthers', value: 'FLA' },
        { label: 'Montreal Canadiens', value: 'MTL' },
        { label: 'Ottawa Senators', value: 'OTT' },
        { label: 'Tampa Bay Lightning', value: 'TBL' },
        { label: 'Toronto Maple Leafs', value: 'TOR' },
        { label: 'Carolina Hurricanes', value: 'CAR' },
        { label: 'Columbus Blue Jackets', value: 'CBJ' },
        { label: 'New Jersey Devils', value: 'NJD' },
        { label: 'New York Islanders', value: 'NYI' },
        { label: 'New York Rangers', value: 'NYR' },
        { label: 'Philadelphia Flyers', value: 'PHI' },
        { label: 'Pittsburgh Penguins', value: 'PIT' },
        { label: 'Washington Capitals', value: 'WSH' },
        { label: 'Chicago Blackhawks', value: 'CHI' },
        { label: 'Colorado Avalanche', value: 'COL' },
        { label: 'Dallas Stars', value: 'DAL' },
        { label: 'Minnesota Wild', value: 'MIN' },
        { label: 'Nashville Predators', value: 'NSH' },
        { label: 'St. Louis Blues', value: 'STL' },
        { label: 'Winnipeg Jets', value: 'WPG' },
        { label: 'Anaheim Ducks', value: 'ANA' },
        { label: 'Arizona Coyotes', value: 'ARI' },
        { label: 'Calgary Flames', value: 'CGY' },
        { label: 'Edmonton Oilers', value: 'EDM' },
        { label: 'Los Angeles Kings', value: 'LAK' },
        { label: 'San Jose Sharks', value: 'SJS' },
        { label: 'Vancouver Canucks', value: 'VAN' },
        { label: 'Vegas Golden Knights', value: 'VGK' },
      ];

      resolve(searchText ?teams.filter(team => searchText && team.label.toLowerCase().includes(searchText.toLowerCase())) : teams);
    }, 1000);
  });

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    height: '2.5rem',
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  noOptionsMessage: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  singleValue: {
    color: theme.palette.primary.main,
    fontSize: 16,
  },
  chip: {
    margin: `${theme.spacing(1) / 2}px ${theme.spacing(1) / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
}));

// 텍스트 입력 제어
function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}
function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

// Placeholder, SingleValue, MultiValue, ... 구성 요소를 래핑
function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

// 자리표시자 텍스트
function Placeholder(props) {
  return (
    <Typography color="textSecondary" className={props.selectProps.classes.placeholder} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

// 자동 완성 입력 내의 메뉴에서 선택한 값을 렌더링
function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

// 다중 선택값 표시
function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

// 취소 옵션 표시
function ClearIndicator(props) {
  return (
    <IconButton {...props.innerProps}>
      <CancelIcon />
    </IconButton>
  );
}

// 메뉴 표시자 표시
function DropdownIndicator(props) {
  return (
    <IconButton {...props.innerProps}>
      <ArrowDropDownIcon />
    </IconButton>
  );
}

// 옵션 메뉴 래핑
function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

// 옵션 아이템
function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

// 가능한 옵션이 없음
function NoOptionsMessage(props) {
  return (
    <Typography color="textSecondary" className={props.selectProps.classes.noOptionsMessage} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

// Select 구성요소는 default로 파이프 문자를 자동 완성 메뉴 오른쪽에 있는 버튼의 구분자로 사용한다.
// 머티리얼 UI 버튼 구성요소로 대체될 것이므로 구분자는 더이상 필요하지 않다.
const IndicatorSeparator = () => null;

// 자동 완성 텍스트 입력 오른쪽에 표시된다.
function LoadingIndicator() {
  return <CircularProgress size={20} />;
}

// 메뉴가 표시될 때 로딩 텍스트가 표시되지만 options를 해결하는 Promise는 아직 보류중이다.
// 그 때 대체 메시지를 표시한다.
function LoadingMessage(props) {
  return (
    <Typography color="textSecondary" className={props.selectProps.classes.noOptionsMessage} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function Autocomplete(props) {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  return (
    <div className={classes.root}>
      <AsyncSelect
        value={value}
        onChange={value => setValue(value)}
        textFieldProps={{
          label: 'Team',
          InputLabelProps: {
            shrink: true,
          },
        }}
        {...{ ...props, classes }}
      />
    </div>
  );
}

Autocomplete.defaultProps = {
  cacheOptions: true,
  defaultOptions: true,
  loadOptions: someAPI,
  isMulti: true,
  isClearable: true,
  components: {
    Control,
    Menu,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    MultiValue,
    ValueContainer,
    IndicatorSeparator,
    ClearIndicator,
    DropdownIndicator,
    LoadingIndicator,
    LoadingMessage,
  },
};

export default Autocomplete;
