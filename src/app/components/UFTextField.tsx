import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";
import { useEffect, useState } from "react";

type YUFTextFieldProps = TextFieldProps & {
  name: string;
};

export const UFTextField: React.FC<YUFTextFieldProps> = ({ name, ...rest }) => {
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-input": {
          color: "text.secondary",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: 3.5,
          "&:hover fieldset": {
            borderColor: "black",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: "2px",
          // borderColor: "text.secondary",
        },
      }}
      {...rest}
      value={value}
      // fullWidth
      error={!!error}
      helperText={error}
      defaultValue={defaultValue}
      onKeyDown={() => (error ? clearError() : undefined)}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
};
