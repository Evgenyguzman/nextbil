import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../form/Button";
import { Checkbox } from "../form/fields/Checkbox";
import { Radiobox } from "../form/fields/Radiobox";
import { TextInput } from "../form/fields/TextInput";

import { useMutation } from "@apollo/client";
import { ADD_CUSTOMER } from "../graphql/schemas";
import { Select } from "../form/fields/Select";

const initialValue = {
  name: "",
  email: "",
  password: "",
  country: undefined,
  gender: undefined,
  aggree: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z]*$/, "Please enter a valid name")
    .required("Please enter a valid name"), // must be only latin
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must contain at least 6 symbols")
    .required("Required"),
  country: Yup.string().required("You must select your country"),
  gender: Yup.mixed()
    .oneOf(["MALE", "FEMALE"], "You must select the gender")
    .required("Required"),
  aggree: Yup.boolean()
    .isTrue("You must accept the policies")
    .required("You must accept the policies"),
});

const FormWrapper = styled.div`
  width: 400px;
  height: 605px;
  padding: 32px 28px 53px;
  box-sizing: border-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font: normal normal bold 28px/34px Roboto;
  letter-spacing: 0px;
  color: #222222;
  opacity: 1;
`;

export const AuthForm = () => {
  const [addCustomer, { data, error }] = useMutation(ADD_CUSTOMER);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (values: any) => {
    setIsSubmitting(true);

    setTimeout(async () => {
      try {
        await addCustomer({ variables: values });
        // alert(JSON.stringify(res.data));
      } catch (error) {
        // alert(error.message);
      }
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Title>Create a new account</Title>
          <div
            style={{
              margin: "37px 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <TextInput
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <TextInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              icon="Group845.svg"
            />
            <TextInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              icon="Group846.svg"
            />
            <Select
              name="country"
              placeholder="Select country"
              options={[
                { value: "latvia", name: "Latvia" },
                { value: "lebanon", name: "Lebanon" },
                { value: "lesotho", name: "Lesotho" },
                { value: "liberia", name: "Liberia" },
                { value: "libya", name: "Libya" },
                { value: "russia", name: "Russia" },
              ]}
            />
            <div className="radiobox-group">
              <Radiobox
                type="radio"
                name="gender"
                id="male"
                value="MALE"
                style={{
                  margin: "0 8px 0 0",
                }}
              >
                Male
              </Radiobox>
              <Radiobox
                type="radio"
                name="gender"
                id="female"
                value="FEMALE"
                style={{
                  margin: "0 8px 0 0",
                }}
              >
                Female
              </Radiobox>
            </div>
            <Checkbox
              type="checkbox"
              name="aggree"
              id="aggree"
              style={{
                margin: "0 8px 0 0",
              }}
            >
              Accept{" "}
              <a href="/" target="_blank">
                terms
              </a>{" "}
              and{" "}
              <a href="/" target="_blank">
                conditions
              </a>
            </Checkbox>
          </div>

          <Button
            type="submit"
            isLoading={isSubmitting}
            isSuccess={!!data}
            isError={!!error}
          >
            Sign up
          </Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
