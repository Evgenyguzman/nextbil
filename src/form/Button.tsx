import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormikContext } from "formik";
import React from "react";
import styled, { css } from "styled-components";

export const Button = ({ children, ...props }: any) => {
  const formik = useFormikContext();
  return (
    <StyledButton
      {...props}
      disabled={!formik || !formik.dirty || !formik.isValid}
    >
      {props.isLoading ? (
        <FontAwesomeIcon icon={faSpinner} spin={true} size="1x" />
      ) : props.isSuccess ? (
        "Success"
      ) : props.isError ? (
        "Error"
      ) : children ? (
        children
      ) : (
        "Button"
      )}
    </StyledButton>
  );
};

export const StyledButton = styled.button`
  width: 100%;
  max-width: 350px;
  background: #0094ff 0% 0% no-repeat padding-box;
  border-radius: 31px;
  font: normal normal normal 18px/22px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  padding: 20px 0;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      background: #a2a2a2 0% 0% no-repeat padding-box;
    `}
`;
