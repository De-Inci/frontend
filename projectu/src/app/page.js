import FrontDisplayComponent from "@/components/webpage/section/FrontDisplayComponent";
import HeaderComponent from "../components/webpage/section/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import DestinationComponent from "@/components/webpage/section/DestinationComponent";
import ActionComponent from "@/components/webpage/section/ActionComponent";
import TestimonialComponent from "@/components/webpage/section/TestimonialComponent";
import FooterComponent from "@/components/webpage/FooterComponent";

import { useUser } from "./context/user";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <FrontDisplayComponent />
      <DestinationComponent />
      <ActionComponent />
      <TestimonialComponent />
      <FooterComponent />
    </div>
  );
}
