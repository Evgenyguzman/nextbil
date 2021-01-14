import React from "react";

export const FieldWrapper = ({ children, meta, style = {} }: any) => {
  return (
    <div style={{ position: "relative", marginBottom: style.marginBottom }}>
      {children}
      {meta.touched && meta.error ? (
        <span className="validation-msg error">{meta.error}</span>
      ) : null}
    </div>
  );
};
