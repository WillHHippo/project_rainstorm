import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import AuthService from "../../services/auth.service";

Login.propTypes = {
  setAppState: PropTypes.func,
};

function Login(props) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    AuthService.login(values.username, values.password).then(() => {
      props.setAppState("app");
    });
  };

  return (
    <div>
      <div className={style.login}>
        <FormControl className={style.textField}>
          <InputLabel htmlFor="standard-username">Username</InputLabel>
          <Input
            id="standard-username"
            type="text"
            value={values.username}
            onChange={handleChange("username")}
          />
        </FormControl>
      </div>

      <div className={style.login}>
        <FormControl className={style.textField}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <br />
          <Button variant="outlined" onClick={handleLogin}>
            Login
          </Button>
        </FormControl>
      </div>
    </div>
  );
}
export default Login;
