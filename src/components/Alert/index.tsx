import React from "react";
import "./Alert.css";
import { type AlertProps } from "./type";

const Alert: React.FC<AlertProps> = ({ message, type = "info", className = "" }) => {
  return (
    <div className={`infinite-alert infinite-alert-${type} ${className}`}>
      {message}
    </div>
  );
};

export default Alert;
