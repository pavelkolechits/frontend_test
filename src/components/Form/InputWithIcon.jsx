import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

import SearchIcon from "@mui/icons-material/Search";

export default function InputWithIcon({ ...props }) {
  return (
    <OutlinedInput
      size="small"
      sx={{ width: "50vw" }}
      id="outlined"
      value={props.value}
      onChange={props.onChange}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon></SearchIcon>
        </InputAdornment>
      }
    />
  );
}
