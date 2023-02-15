import React from "react";
import { createRoot } from "react-dom/client";
import ChecksumVerifier from "./ChecksumVerifier";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<ChecksumVerifier />);