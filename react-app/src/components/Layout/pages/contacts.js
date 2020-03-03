import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import "../pages/style.css";
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/;
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
  mobile:
    yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required field")
      .matches(phoneRegExp, "Phone number is not valid") || null
});

const Contacts = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );

  const sendForm = values => {
    localStorage.setItem("contacts", JSON.stringify(values));
    setContacts(values);
  };
  return (
    <>
      <div className="content">
        <Formik
          initialValues={{
            familyName: contacts.familyName || "",
            name: contacts.name || "",
            fatherName: contacts.fatherName || "",
            email: contacts.email || "",
            mobile: contacts.mobile || "",
            password: contacts.password || ""
          }}
          validationSchema={SubmitFormSchema}
          onSubmit={sendForm}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid
          }) => (
            <>
              <Form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  label="Family name"
                  name="familyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.familyName}
                />
                {errors.familyName && touched.familyName ? (
                  <div name="error">{errors.familyName}</div>
                ) : null}
                <TextField
                  variant="outlined"
                  label="Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <div name="error">{errors.name}</div>
                ) : null}

                <TextField
                  variant="outlined"
                  label="Fathers name"
                  name="fatherName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fatherName}
                />
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={errors.email}
                />
                {errors.email && touched.email ? (
                  <div name="error">{errors.email}</div>
                ) : null}

                <TextField
                  variant="outlined"
                  label="Phone number"
                  name="mobile"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                />
                {errors.mobile && touched.mobile ? (
                  <div name="error">{errors.mobile}</div>
                ) : null}

                <TextField
                  type="password"
                  variant="outlined"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <div name="error">{errors.password}</div>
                ) : null}
                <div className="submitButton">
                  <Button
                    disabled={!isValid || !touched.familyName}
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
      <div className="answer" id="answer">
        <ContactForm contacts={contacts} />
      </div>
    </>
  );
};

const ContactForm = ({ contacts }) => (
  <>
    <p>Family name: {contacts.familyName}</p>
    <p>Name: {contacts.name}</p>
    <p>Fathers name: {contacts.fatherName}</p>
    <p>Email: {contacts.email}</p>
    <p>Phone number: {contacts.mobile}</p>
    <p>Password: {contacts.password}</p>
  </>
);

export default Contacts;
