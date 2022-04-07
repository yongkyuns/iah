import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
// import theme from "./theme";

export default function Chakra({
  cookies,
  children,
}: {
  cookies: any;
  children: any;
}) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    // <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
    <ChakraProvider>{children}</ChakraProvider>
  );
}

export async function getServerSideProps({ req }: { req: any }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
