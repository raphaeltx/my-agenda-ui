import React from "react";
import { Box, TextField, Grid } from "@mui/material";
import { useIntl } from "react-intl";
import { PersonalInfoFormProps } from "../../domain/interfaces/properties/IPersonalInfoFormProps";

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  values,
  handleChange,
  errors,
  touched,
}) => {
  const intl = useIntl();

  return (
    <Box className="form-section">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="grid-item-row">
          <TextField
            label={intl.formatMessage({ id: "newUser.firstNameLabel" })}
            variant="standard"
            margin="normal"
            fullWidth
            name="first_name"
            className="custom-textfield"
            value={values.first_name}
            onChange={handleChange}
            error={
              touched["person.first_name"] && !!errors["person.first_name"]
            }
            helperText={
              touched["person.first_name"] && errors["person.first_name"]
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} className="grid-item-row">
          <TextField
            label={intl.formatMessage({ id: "newUser.lastNameLabel" })}
            variant="standard"
            margin="normal"
            fullWidth
            name="last_name"
            className="custom-textfield"
            value={values.last_name}
            onChange={handleChange}
            error={touched["person.last_name"] && !!errors["person.last_name"]}
            helperText={
              touched["person.last_name"] && errors["person.last_name"]
            }
          />
        </Grid>
        <Grid item xs={12} className="grid-item-row">
          <TextField
            label={intl.formatMessage({ id: "newUser.phoneLabel" })}
            variant="standard"
            margin="normal"
            fullWidth
            name="phone"
            className="custom-textfield"
            value={values.phone}
            onChange={handleChange}
            error={touched["person.phone"] && !!errors["person.phone"]}
            helperText={touched["person.phone"] && errors["person.phone"]}
          />
        </Grid>
        <Grid item xs={12} className="grid-item-row">
          <TextField
            label={intl.formatMessage({ id: "newUser.emailLabel" })}
            variant="standard"
            margin="normal"
            fullWidth
            name="email"
            className="custom-textfield"
            value={values.email}
            onChange={handleChange}
            error={touched["person.email"] && !!errors["person.email"]}
            helperText={touched["person.email"] && errors["person.email"]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInfoForm;
