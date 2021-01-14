import React from "react";
import styled from "styled-components";
import { AuthForm } from "./AuthForm";

const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #102250 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const AuthScreen = () => {
  return (
    <FormWrapper>
      <AuthForm />
    </FormWrapper>
  );
};
