import React from "react";
import { useField } from "formik";
import { FieldWrapper } from "./FieldWrapper";

export const Checkbox = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <FieldWrapper meta={meta} style={{ marginBottom: 0 }}>
      <label
        className="checkbox"
        style={{
          font: "normal normal normal 14px/17px Roboto",
          paddingRight: 25,
        }}
      >
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
    </FieldWrapper>
  );
};
