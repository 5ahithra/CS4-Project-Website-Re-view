import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../lib/routes";
import { useRegister } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "../../utils/form-validate";
import RegisterImage from "../REGISTER.png";

export default function Register() {
  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
  }

  return (
    <div
      style={{
        backgroundImage: `url(${RegisterImage})`,
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
            Register
          </Heading>

          <form onSubmit={handleSubmit(handleRegister)}>
            <FormControl isInvalid={errors.username} py="2">
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="username"
                {...register("username", usernameValidate)}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email} py="2">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="user@email.com"
                {...register("email", emailValidate)}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password} py="2">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password123"
                {...register("password", passwordValidate)}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt="4"
              type="submit"
              colorScheme="teal"
              size="md"
              w="full"
              isLoading={isLoading}
              loadingText="Signing Up"
            >
              Register
            </Button>
          </form>

          <Text fontSize="xlg" align="center" mt="6">
            Already have an account?{" "}
            <Link
              as={RouterLink}
              to={LOGIN}
              color="teal.800"
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: "teal.100" }}
            >
              Log In
            </Link>{" "}
            instead!
          </Text>
        </Box>
      </Center>
    </div>
  );
}
