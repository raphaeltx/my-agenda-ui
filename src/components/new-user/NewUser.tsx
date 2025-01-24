import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import PersonalInfoForm from "./PersonalInfoForm";
import UserInfoForm from "./UserInfoForm";
import { IUser } from "../../domain/interfaces/entities/IUser";
import UserService from "../../services/user/UserService";
import "./NewUser.css";
import { notificationUtil } from "../../utils/notification";
import { UserServiceError } from "../../errors/UserServiceError";

const NewUser: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const userService = new UserService();

  const [formValues, setFormValues] = useState<IUser>({
    user_name: "",
    password: "",
    person: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    },
  });

  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(
      intl.formatMessage({ id: "validation.required" })
    ),
    password: Yup.string()
      .min(8, intl.formatMessage({ id: "validation.passwordLength" }))
      .required(intl.formatMessage({ id: "validation.required" })),
    person: Yup.object().shape({
      first_name: Yup.string().required(
        intl.formatMessage({ id: "validation.required" })
      ),
      last_name: Yup.string().required(
        intl.formatMessage({ id: "validation.required" })
      ),
      email: Yup.string()
        .email(intl.formatMessage({ id: "validation.invalidEmail" }))
        .required(intl.formatMessage({ id: "validation.required" })),
      phone: Yup.string().required(
        intl.formatMessage({ id: "validation.required" })
      ),
    }),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setTouched((prevTouched: any) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handlePersonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      person: {
        ...prevValues.person,
        [name]: value,
      },
    }));
    setTouched((prevTouched: any) => ({
      ...prevTouched,
      person: {
        ...prevTouched.person,
        [name]: true,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});

      const createdUser = await userService.createUser(formValues);

      notificationUtil.showNotification(
        intl.formatMessage({ id: "newUser.successMessage" }),
        "success"
      );
      navigate("/home");
    } catch (errors) {
      if (errors instanceof UserServiceError) {
        notificationUtil.showNotification(
          intl.formatMessage({ id: "newUser.errorMessage" }),
          "error"
        );
      } else {
        const formattedErrors: any = {};
        const formattedTouched: any = {};
        (errors as Yup.ValidationError).inner.forEach((error: any) => {
          formattedErrors[error.path] = error.message;
          formattedTouched[error.path] = true;
        });

        setTouched(formattedTouched);
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="new-user-form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" className="form-title">
        {intl.formatMessage({ id: "newUser.title" })}
      </Typography>

      <PersonalInfoForm
        values={formValues.person}
        handleChange={handlePersonChange}
        errors={errors}
        touched={touched}
      />

      <UserInfoForm
        values={formValues}
        handleChange={handleChange}
        errors={errors}
        touched={touched}
      />

      <Button
        variant="outlined"
        fullWidth
        type="submit"
        size="small"
        className="custom-button"
      >
        {intl.formatMessage({ id: "newUser.submitButton" })}
      </Button>
    </Box>
  );
};

export default NewUser;
