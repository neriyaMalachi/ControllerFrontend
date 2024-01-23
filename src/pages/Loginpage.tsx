import { Card, Text, Button, Center, Flex, Input } from "@mantine/core";
import { useNavigate } from "react-router-dom";
function Loginpage() {
  const navigate = useNavigate();
  return (
    <Center h={"100vh"}>
      <Card
        variant="light"
        shadow="sm"
        padding="lg"
        radius="md"
        h={"50%"}
        w={"20%"}
        withBorder
      >
        <Flex h={"40%"} justify={"center"}>
          <Text size="50px" fw={"700"}>
            LOGIN
          </Text>
        </Flex>
        <Flex
          h={"40%"}
          direction={"column"}
          justify={"start"}
          gap={5}
          align={"center"}
        >
          <Input type="text" placeholder="user Name" />
          <Input type="password" placeholder="Password" />
        </Flex>
        <Button
          onClick={() => navigate("/configPage")}
          color="blue"
          fullWidth
          mt="md"
          radius="md"
        >
          Login
        </Button>
      </Card>
    </Center>
  );
}

export default Loginpage;
