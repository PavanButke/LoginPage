import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import  {AuthProvider} from "./Components/Authentication/AuthProvider"

ReactDOM.render (
        <ChakraProvider>
            <AuthProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            </AuthProvider>
            </ChakraProvider>,
            document.getElementById("root")
)