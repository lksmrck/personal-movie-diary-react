import { React } from "react";
import { TextField } from "@mui/material";

const Input = (props) => {
  return (
    <div>
      <TextField
        sx={{ width: 500, borderRadius: 1 }}
        className="inputs"
        id="fullWidth"
        label={props.input.id}
        variant="filled"
        size="small"
        placeholder={props.placeholder}
        onChange={props.onChangeInput}
        {...props.input}
        value={props.value}
        color="primary"
        defaultValue={props.defaultValue}
        required={true}
        InputLabelProps={props.inputLabelProps}
      />
    </div>
  );
};

export default Input;
