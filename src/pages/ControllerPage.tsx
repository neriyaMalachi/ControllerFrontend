import { Box, Button, Center, Flex, Input, Text } from "@mantine/core";
import NavBar from "./NavBar";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
function ControllerPage() {
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("");
  const [ipNotifications, setIpNotifications] = useState("");

  const validateIpAddress = () => {
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (ipv4Regex.test(ipAddress) && ipv4Regex.test(ipNotifications)) {
      const partsforIpAddress = ipAddress.split(".");
      const partsForipNotifications = ipNotifications.split(".");

      for (let part of partsforIpAddress) {
        if (parseInt(part) > 255) {
          toast.error(" IP addres not legal", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          return false;
        }
      }
      for (let part of partsForipNotifications) {
        if (parseInt(part) > 255) {
          toast.error(" IP notifications addres not legal", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          return false;
        }
      }
      toast.success(" port and ip addres legal", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setIpAddress(" ")
      setIpNotifications(" ")
      setPort(" ")
     
      return true;
    } else {
      toast.error(" port or ip addres not legal", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
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
            border: "1px solid",
            borderRadius: "5%",
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
              validateIpAddress();
              validatePort();
            }}
          >
            send
          </Button>
        </Flex>
      </Center>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Box>
  );
}

export default ControllerPage;
