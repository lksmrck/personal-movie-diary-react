import { React } from "react";
import { TextField } from "@mui/material";

const Input = ({ input, placeholder, inputLabelProps }) => {
  return (
    <div>
      <TextField
        sx={{ width: 400, borderRadius: 1 }}
        className="inputs"
        label={input.id}
        variant="filled"
        size="small"
        placeholder={placeholder}
        inputProps={{ ...input }}
        color="primary"
        required={true}
        InputLabelProps={inputLabelProps}
      />
    </div>
  );
};

export default Input;
