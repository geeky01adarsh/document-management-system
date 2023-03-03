import React from "react";
import "../App.css";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleClick = () => setShow(!show);

  // for submit data in database >>>>>>>>>>>>>>>>>>>>>>>>>>
  const submitHandler = async () => {
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the required Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Password and ConfirmPassword should be Same",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      toast({
        title: "Registration is Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "Error Occured",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter Your Name" />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input type="email" placeholder="Enter Your Email Address" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
          />
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
          />
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        onClick={submitHandler}
        width="100%"
        style={{ marginTop: 15 }}
      >
        Sign Up
      </Button>
      <div>
        <a href="" className="font-medium text-blue-500 text-sm">
          {" "}
          Already have an Account? <> </>
          <a className="text-black">Login Here</a>
        </a>
      </div>
    </VStack>
  );
};

export default Signup;
