"use client";

import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

const persistGateComponent = ({ children }) => {
  return (
    <PersistGate persistor={persistor} loading={null}>
      {children}
    </PersistGate>
  );
};

export default persistGateComponent;
