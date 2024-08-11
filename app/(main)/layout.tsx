import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <NavBar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default layout;
