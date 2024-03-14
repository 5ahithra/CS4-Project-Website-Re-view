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
import { DASHBOARD, REGISTER, FORGET } from "../../lib/routes";
import { useLogin } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "../../utils/form-validate";
import LoginImage from "../LOGIN.png";

export default function Login() {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    const succeeded = await login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });

    if (succeeded) reset();
  }
  return (
    <div
      style={{
        backgroundImage: `url(${LoginImage})`,
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
            Log In
          </Heading>
          <form onSubmit={handleSubmit(handleLogin)}>
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
                placeholder="Password"
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
              width="full"
              //isLoading={true}
              loadingText="Logging In"
            >
              Log In
            </Button>
          </form>
          <Text fontSize="xlg" align="center" mt="6">
            <Link
              as={RouterLink}
              to={FORGET}
              color="teal"
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: "teal" }}
            >
              Forgot Password?
            </Link>
          </Text>
          <Text fontSize="xlg" align="center" mt="6">
            Dont have an account?{" "}
            <Link
              as={RouterLink}
              to={REGISTER}
              color="teal"
              fontWeight="medium"
              textDecor="underline"
              _hover={{ background: "teal" }}
            >
              Register
            </Link>{" "}
            instead!
          </Text>
        </Box>
      </Center>
    </div>
  );
}
