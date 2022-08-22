import { React } from "react";
import { TextField } from "@mui/material";

const Input = (props) => {
  return (
    <div>
      <TextField
        sx={{ width: 400, borderRadius: 1 }}
        className="inputs"
        id="fullWidth"
        label={props.input.id}
        variant="filled"
        size="small"
        placeholder={props.placeholder}
        onChange={props.onChangeInput}
        inputProps={{ ...props.input }}
        value={props.value}
        color="primary"
        required={true}
        InputLabelProps={props.inputLabelProps}
      />
    </div>
  );
};

export default Input;
