import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import background from "./Review.png";
import "./Welcome.css";
export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Button
        className="reviewBtn"
        colorScheme="blue"
        onClick={() => navigate("/login")}
      >
        Review!
      </Button>
    </div>
  );
}
