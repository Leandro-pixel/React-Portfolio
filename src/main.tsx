import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/footer"
import { ContextProvider } from './context/store';



import "./styles/main.sass";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    <Footer/>
    </ContextProvider>
  </React.StrictMode>,
)
