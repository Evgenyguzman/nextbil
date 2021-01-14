import React from "react";
import { useField } from "formik";
import styled, { css } from "styled-components";
import { FieldWrapper } from "./FieldWrapper";

export const TextInput = ({ icon, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <FieldWrapper meta={meta} style={{ marginBottom: 21 }}>
      <div style={{ position: "relative" }}>
        {icon && (
          <div className="input-icon" style={{ position: "absolute" }}>
            <img src={icon} alt={props.name} />
          </div>
        )}
        <Input
          className="text-input"
          autoComplete="off"
          withIcon={!!icon}
          isValid={!(meta.touched && meta.error)}
          {...field}
          {...props}
        />
      </div>
    </FieldWrapper>
  );
};

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding-top: 18px;
  padding-bottom: 15px;
  padding-left: 18px;
  background: #f5f8fa 0% 0% no-repeat padding-box;
  border-radius: 8px;
  border: none;
  opacity: 1;
  font: normal normal normal 14px/17px Roboto;
  letter-spacing: 0px;
  color: #a2a2a2;
  ${(props: any) =>
    props.withIcon &&
    css`
      padding-left: 52px;
    `}
  ${(props: any) =>
    props.isValid &&
    css`
      color: #222222;
    `}
`;
