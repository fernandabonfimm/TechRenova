import React from "react";
import "./index.css";
import "antd/dist/antd.min.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/routes";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <ConfigProvider>
              <MainRoutes />
          </ConfigProvider>
        </BrowserRouter>
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
