import Layout from "../components/layouts/page";
import { Container, Box } from "@chakra-ui/react";

const About = () => (
  <Layout>
    <Box my={6} w={300} textAlign={"left"}>
      <div>Hi! My name is Iah.</div>
      <div>
        I am a Photographer and Digital Artist located in Oakville. I have a
        strong passion for helping people learn photography.
      </div>
    </Box>
  </Layout>
);

export default About;
export { getServerSideProps } from "./chakra";
