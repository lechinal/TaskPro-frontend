import {forwardRef} from "react";
import React from 'react';
import DatePicker from 'react-datepicker';
import css from './MyDatePicker.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const MyDatePicker = ({ date, handleSetData }) => {

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={css.exampleCustomInput} onClick={onClick} ref={ref}>
      <p>{value}</p>
      <KeyboardArrowDownIcon sx={{ width: '20px', height: '20px', color: 'rgba(190, 219, 176, 1)' }} />
    </div>
  ));

  return (
    <div>
      <span className={css.deadline}>Today, </span>
      <DatePicker
        minDate={new Date()}
        dateFormat='MMMM d'
        className={css.myDatePickerStyle} // Override styles with custom class
        customInput={<CustomInput />}
        
      />
    </div>
  );
};

export default MyDatePicker;