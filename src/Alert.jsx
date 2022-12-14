import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  console.log("test");
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (type !== "loading") removeAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
