import React from "react";
export const FormErrors = ({ formErrors }) =>
    <div className="">
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p className="alert alert-danger">{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return ("")
            }
        })}
    </div>