import { useState, useEffect, FocusEvent } from "react";
import {
  Controller,
  Control,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./formThemes";

// interface Pattern {
//   value: RegExp;
//   message: string;
// }
// interface MUITextFieldProps {
//   name: string;
//   setValue: UseFormSetValue<FieldValues>;
//   type?: string;
//   control: Control<FieldValues>;
//   placeholder?: string;
//   defaultValue?: string | number | readonly string[] | undefined;
//   required?: string;
//   pattern?: Pattern;
//   variant?: "outlined" | "standard";
//   onFocus: (event: FocusEvent<unknown>) => unknown;
//   onBlur: (event: FocusEvent<unknown>) => unknown;
// }

// Formats phoneNumber text field
const handlePhoneNumberChange = (value, name, setValue) => {
  const unformattedValue = value.replace(/[^\d]/g, "").slice(0, 10);
  let formattedValue = "";
  if (unformattedValue.length < 4) {
    formattedValue = unformattedValue;
  } else if (unformattedValue.length < 7) {
    formattedValue = `(${unformattedValue.slice(
      0,
      3
    )}) ${unformattedValue.slice(3)}`;
  } else {
    formattedValue = `(${unformattedValue.slice(
      0,
      3
    )}) ${unformattedValue.slice(3, 6)}-${unformattedValue.slice(6)}`;
  }
  setValue(name, formattedValue);
};

export default function MUITextField({
  name,
  setValue,
  type,
  control,
  placeholder,
  defaultValue,
  minRows,
  maxRows,
  required,
  pattern,
  onFocus,
  onBlur,
  variant = "outlined",
}) {
  const [currentVal, setCurrentVal] = useState("");

  useEffect(() => {
    if (type === "phoneNumber" && currentVal) {
      handlePhoneNumberChange(currentVal, name, setValue);
    }
  }, [currentVal, name, setValue, type]);

  return (
    <ThemeProvider theme={theme}>
      <Controller
        name={name}
        control={control}
        rules={{ required, pattern }}
        render={({ field }) => {
          setCurrentVal(field.value);
          return (
            <div
              className={`${
                variant === "outlined" ? "bg-[#FFF] rounded-xl" : ""
              }`}
            >
              <TextField
                className="w-full"
                {...field}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                multiline={(minRows || maxRows) !== undefined}
                minRows={minRows}
                maxRows={maxRows}
                onFocus={onFocus}
                onBlur={onBlur}
                variant={variant}
              />
            </div>
          );
        }}
      />
    </ThemeProvider>
  );
}
