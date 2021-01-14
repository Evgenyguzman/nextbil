import React from "react";
import { useField } from "formik";
import { FieldWrapper } from "./FieldWrapper";

export const Radiobox = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <FieldWrapper meta={meta} style={{ marginBottom: 0 }}>
      <label
        className="radio"
        style={{
          font: "normal normal normal 14px/17px Roboto",
          paddingRight: 25,
        }}
      >
        <input type="radio" {...field} {...props} />
        {children}
      </label>
    </FieldWrapper>
  );
};
