import { Card, Text, Button, Center, Flex, Input } from "@mantine/core";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Loginpage() {
  // const storageUsers = JSON.parse(localStorage.getItem("items"));

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  // const [allUsers, setAllUsers] = useState("");
  const [messageError, setMessageError] = useState(false);
  const users = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => localStorage.setItem("user", JSON.stringify(userName)),
  });
  console.log(users);

  const validation = () => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const numbers = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{6,})");

    // if (
    //   lower.test(password) &&
    //   upper.test(password) &&
    //   numbers.test(password) &&
    //   special.test(password) &&
    //   length.test(password) &&
    //   userName.length > 2
    // ) {
      // setAllUsers(userName);
      // navigate("/configPage");
    // } else {
      // setMessageError(true);
    // }
  };
  // console.log(localStorage{password});

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
          <Input
            type="text"
            placeholder="user Name"
            onChange={(e: any) => setUserName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </Flex>
        <Button onClick={validation} color="blue" fullWidth mt="md" radius="md">
          Login
        </Button>
        {messageError ? (
          <Text c={"red"} size="xs">
            חייב להכיל: סימן, אות גדולה וקטנה, מספר ,וארך מינימלי 6 ,ושם משתמש
            מעל 2 אותיות
          </Text>
        ) : (
          <></>
        )}

        <a href="#">signUp</a>
      </Card>
    </Center>
  );
}

export default Loginpage;
