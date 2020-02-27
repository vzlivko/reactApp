import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
const SubmitFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Required field"),
  password: yup
    .string()
    .min(8, "Too short")
    .max(50, "Too long")
    .required("Required field"),
  familyName: yup
    .string()
    .max(40, "Too long")
    .required("Required field"),
  name: yup
    .string()
    .max(40, "Too long")
    .required("Required field"),
  mobile: yup
    .number()
    .max(90000000000, "Wrong number format")
    .min(70000000000, "Wrong number format")
});

const Contacts = () => (
  <>
    <div className="content">
      <Formik
        initialValues={{
          familyName: "",
          name: "",
          fatherName: "",
          email: "",
          mobile: "",
          password: ""
        }}
        validationSchema={SubmitFormSchema}
        onSubmit={values => console.log("123")}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid
        }) => (
          <>
            <Form
              onSubmit={handleSubmit}
              isValid={
                touched.familyName &&
                touched.name &&
                touched.email &&
                touched.mobile &&
                touched.password
              }
            >
              <p>
                <TextField
                  variant="outlined"
                  label="Фамилия"
                  name="familyName"
                  onChange={handleChange}
                  value={values.familyName}
                />
                {errors.familyName}
              </p>
              <p>
                <TextField
                  variant="outlined"
                  label="Имя"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name}
              </p>
              <TextField
                variant="outlined"
                label="Отчество"
                name="fatherName"
                onChange={handleChange}
                value={values.fatherName}
              />
              <p>
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder={errors.email}
                />
                {errors.email}
              </p>
              <p>
                <TextField
                  variant="outlined"
                  label="Моб. телефон"
                  name="mobile"
                  onChange={handleChange}
                  value={values.mobile}
                />
                {errors.mobile}
              </p>
              <p>
                <TextField
                  type="password"
                  variant="outlined"
                  label="Пароль"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password}
              </p>
              <Button disabled={isValid} variant="contained" type="submit">
                Submit
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  </>
);

export default Contacts;
