import { ErrorMessage } from "@hookform/error-message";
import MUITextField from "./muiTextField";

export default function TextField({
  name,
  setValue,
  control,
  placeholder,
  defaultValue,
  errors,
  required,
  minRows,
  maxRows,
  pattern,
  variant,
}) {
  const containsErrors = errors ? Object.keys(errors).includes(name) : false;
  return (
    <div className={`flex flex-col ${!containsErrors && "pb-[20px]"}`}>
      <MUITextField
        name={name}
        type="text"
        control={control}
        setValue={setValue}
        defaultValue={defaultValue}
        placeholder={placeholder}
        minRows={minRows}
        maxRows={maxRows}
        required={required}
        pattern={pattern}
        variant={variant}
      />
      <div className="self-end w-fit">
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <div className="flex justify-end w-full text-red-400 text-sm font-bold">
              {message}
            </div>
          )}
        />
      </div>
    </div>
  );
}
