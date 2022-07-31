import { React, useState } from "react";
import { TextField } from "@mui/material";

const Input = (props) => {
  const [movies, setMovies] = useState([{}]);

  return (
    <div>
      <TextField
        sx={{ width: 500 }}
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
        required
      />
    </div>
  );
};

export default Input;
