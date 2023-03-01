import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import SignLevel1 from "./SignUp_authority";
import SignStudent from "./SignUp_student";
import { useEffect } from "react";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          color="black"
          textAlign="center"
        >
          Registration
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">SignUp as Authority</Tab>
            <Tab width="50%">SignUp as Student</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignLevel1 />
            </TabPanel>
            <TabPanel>
              <SignStudent />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
