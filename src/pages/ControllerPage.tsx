import { Box, Button,  Center, Flex, Input, Text } from "@mantine/core";
import NavBar from "./NavBar";

function ControllerPage() {
  return (
    <Box  >
    <NavBar/>
    <Center w={"100%"} h={"85vh"}>
      <Flex w={"20%"} h={"40%"} direction={"column"} justify={"space-around"} align={"center"} >
        <Text  >IP ADDRES</Text>
        <Input w={"70%"} type="text" placeholder="IP" />
        <Input w={"70%"} type="text" placeholder="PORT" />
        <Input w={"70%"} type="text" placeholder="IP NOTIFICATIONS" />

        <Button w={"50%"}>send</Button>
      </Flex>
    </Center>
    </Box>
  );
}

export default ControllerPage;
