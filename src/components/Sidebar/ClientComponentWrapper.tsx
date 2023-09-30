"use client";
import React from "react";
import { Content } from "@carbon/react";
import "./ClientComponentWrapper.scss";

const ClientComponentWrapper = ({ children }: any) => {
  return <Content>{children}</Content>;
};

export default ClientComponentWrapper;
