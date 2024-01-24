import { Box, Button, Center, Flex, Input, Text } from "@mantine/core";
import NavBar from "./NavBar";
import { useState } from "react";

function ControllerPage() {
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("");
  const [ipNotifications, setIpNotifications] = useState("");

  const validateIpAddress = () => {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (ipv4Regex.test(ipAddress)) {
      const parts = ipAddress.split(".");
      for (let part of parts) {
        if (parseInt(part) > 255) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };
  const validateIpNotifications = () => {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (ipv4Regex.test(ipNotifications)) {
      const parts = ipNotifications.split(".");
      for (let part of parts) {
        if (parseInt(part) > 255) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };
  const validatePort = () => {
    if (parseInt(port) > 0 && parseInt(port) < 65536) {
      return true;
    }
    return false;
  };

  return (
    <Box>
      <NavBar />
      <Center w={"100%"} h={"85vh"}>
        <Flex
          w={"20%"}
          h={"50%"}
          direction={"column"}
          justify={"space-around"}
          p={"5"}
          align={"center"}
          style={{
            border:"1px solid",
            borderRadius:"5%"
          }}
        >
          <Text>IP ADDRES</Text>
          <Input
            w={"70%"}
            type="text"
            placeholder="IP"
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <Input
            w={"70%"}
            type="text"
            placeholder="PORT"
            onChange={(e) => setPort(e.target.value)}
          />
          <Input
            w={"70%"}
            type="text"
            placeholder="IP NOTIFICATIONS"
            onChange={(e) => setIpNotifications(e.target.value)}
          />

          <Button
            w={"50%"}
            onClick={() => {
            validateIpNotifications  
            validateIpAddress 
            validatePort

              
            }}
          >
            send
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}

export default ControllerPage;
