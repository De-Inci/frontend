"use client";
import React from "react";
import NavbarComponent from "@/components/NavbarComponent";
import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { UserProvider } from "@/lib/context/user";

export default function App() {
  return (
    <div>
      <UserProvider>
        <NavbarComponent />
        <Banner />
        <Destinations />
        <Features />
        <Testimonials />
        <Footer />
      </UserProvider>
    </div>
  );
}
