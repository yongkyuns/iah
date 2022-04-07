import Layout from "../components/layouts/page";
import { Gallery } from "../components/Gallery/Gallery";
import { Box } from "@chakra-ui/react";

const Photography = () => (
  <Layout>
    <Box>
      <Gallery />
    </Box>
  </Layout>
);

export default Photography;
export { getServerSideProps } from "./chakra";
