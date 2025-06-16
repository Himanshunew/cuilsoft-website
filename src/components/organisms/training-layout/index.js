import React from "react";
import Footer from "../footer";
import { TrainingHeader } from "../../molecules/training-header";

const TrainingLayout = ({ children, title }) => {
  return (
    <>
      <TrainingHeader title={title} />
      {children}
      <Footer />
    </>
  );
};

export default TrainingLayout;
