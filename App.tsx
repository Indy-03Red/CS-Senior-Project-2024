import React from "react";
import AppNavigation from "./src/navigation";
import { app } from "./firebaseConfig.js";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  const a = app;
  return <AppNavigation />;
}
