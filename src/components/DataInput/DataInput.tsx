import React from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import pt from 'date-fns/locale/pt';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('pt', pt);


interface IProps {
    startDate: Date | null | undefined
}

const handleDatePicker = () => {
    
}

const DataInput = ({startDate}: IProps) => {
    
  return (
    <DatePicker 
        onChange={handleDatePicker}
        data-testid="date_picker"
        locale="pt"
        selected={startDate}  />
  );
}

export default DataInput;