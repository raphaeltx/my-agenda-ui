import React from "react";
import { Box, TextField, Grid } from "@mui/material";
import { useIntl } from "react-intl";
import { IUserInfoFormProps } from "../../domain/interfaces/properties/IUserInfoFormProps";

const UserInfoForm: React.FC<IUserInfoFormProps> = ({
  values,
  handleChange,
  errors,
  touched,
}) => {
  const intl = useIntl();

  return (
    <Box className="form-section">
      <Grid container spacing={2}>
        <Grid item xs={12} className="grid-item-row">
          <TextField
            label={intl.formatMessage({ id: "newUser.userNameLabel" })}
            variant="standard"
            margin="normal"
            fullWidth
            name="user_name"
            className="custom-textfield"
            value={values.user_name}
            onChange={handleChange}
            error={touched.user_name && !!errors.user_name}
            helperText={touched.user_name && errors.user_name}
          />
        </Grid>
        <Grid item xs={12} className="grid-item-row">
          <TextField
            label={intl.formatMessage({ id: "newUser.passwordLabel" })}
            type="password"
            variant="standard"
            margin="normal"
            fullWidth
            name="password"
            className="custom-textfield"
            value={values.password}
            onChange={handleChange}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserInfoForm;
