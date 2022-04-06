import { Container, Flex, Box, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import NavBar from "../components/NavBar";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box my={6} align="center">
        <NextLink href="/art" passHref>
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
      <Flex h="100vh" py={20}></Flex>
    </Container>
  );
};

export default Home;
