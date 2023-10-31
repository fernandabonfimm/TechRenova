import React from "react";
import Header from "../header";
import Footer from "../footer";
import './styles.css';

export default function Base({ children }) {
  return (
    <>
      <Header />
      <div className="contentChildren">{children}</div>
      <Footer />
    </>
  );
}
