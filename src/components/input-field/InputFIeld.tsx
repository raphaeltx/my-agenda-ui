import React from 'react';
import { TextField } from '@mui/material';
import { InputFieldType } from '../../interfaces/InputField.types';

const InputField: React.FC<InputFieldType> = ({ type, placeholder, value, onChange }) => {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default InputField;