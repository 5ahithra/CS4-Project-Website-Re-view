import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { LOGIN } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";
import QuestionImage from "../Question.jpg";

function ForgotPassword() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent. Please check your inbox.");
      navigate("/login");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(
        "An error occurred while sending the password reset email. Please try again later."
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${QuestionImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Center w="100%" h="100vh">
        <Box
          backgroundColor="white"
          mx="1"
          maxW="md"
          p="9"
          borderWidth="1px"
          borderRadius="lg"
        >
          <Heading mb="4" size="lg" textAlign="center">
            Forgot Password
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl py="2">
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" placeholder="user@email.com" />
            </FormControl>
            <Button
              mt="4"
              type="submit"
              colorScheme="teal"
              size="md"
              width="full"
            >
              Reset Password
            </Button>
          </form>
          <Text fontSize="xlg" align="center" mt="6">
            Remember your password?{" "}
            <Link
              as={RouterLink}
              to={LOGIN}
              color="teal"
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: "teal" }}
            >
              Log In
            </Link>{" "}
          </Text>
        </Box>
      </Center>
    </div>
  );
}

export default ForgotPassword;
