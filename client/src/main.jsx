import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/css/style.css";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider  activeChain={ Sepolia } 
        clientId="1e98b9a988fd79ce69528732edd55139" >
        <App />
    </ThirdwebProvider>
  </React.StrictMode>
);