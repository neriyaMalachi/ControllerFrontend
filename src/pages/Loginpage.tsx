import { Card, Text, Button, Center, Flex, Input } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Loginpage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [PasswordError, setPasswordError] = useState(false);
  const [userNotSignUp, setuserNotSignUp] = useState(false);
  const [generalError, setGeneralError] = useState(false);

  const [users, setUsers] = useState(["neriya", "mordechay", "yosi"]);

  const validation = () => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const numbers = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{6,})");
    if(userName && password){
      setGeneralError(false)
      setuserNotSignUp(false)
      setPasswordError(false)
      for (let i = 0; i < users.length; i++) {
        if (users[i] === userName) {
          setuserNotSignUp(false);
  
          if (
            lower.test(password) &&
            upper.test(password) &&
            numbers.test(password) &&
            special.test(password) &&
            length.test(password) &&
            userName.length > 2
          ) {
            navigate("/configPage");
          } else {
            setPasswordError(true);
          }
        }else{
          setuserNotSignUp(true);
  
        }
      }
    }else{
      setGeneralError(true)
    }
  };

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
        {PasswordError ? (
          <Text c={"red"} size="xs" dir="rtl">
            חייב להכיל: סימן, אות גדולה וקטנה, מספר ,וארך מינימלי 6 ,ושם משתמש
            מעל 2 אותיות
          </Text>
        ) : (
          <></>
        )}
        {userNotSignUp ? (
          <Text c={"red"} size="sm" dir="rtl">
            משתמש לא קיים!!
          </Text>
        ) : (
          <></>
        )}
         {generalError ? (
          <Text c={"red"} size="sm" dir="rtl">
            חייב למלא את שתי השדות
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
