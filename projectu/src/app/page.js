"use client";
import React from "react";
import NavbarComponent from "@/components/NavbarComponent";
import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function App() {

  return(
    <div>
      <NavbarComponent />
      <Banner />
      <Destinations />
      <Features />
      <Testimonials />
    </div>
  )
}