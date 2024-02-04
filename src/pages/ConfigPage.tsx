import { Box, Button, Center, Flex, Input } from "@mantine/core";
import { JsonEditor as Editor } from "jsoneditor-react";
import { useState } from "react";
import "jsoneditor-react/es/editor.min.css";

import NavBar from "./NavBar";
function ConfigPage() {
  const [Name, setName] = useState<string>("");
  const [Age, setAge] = useState<number>();
  const [City, setCity] = useState<string>("");




  
  

  const [jsonData, setjsonData] = useState({
    name: "John",
    age: 50,
    city: "New York",
  });
  return (
    <Box>
      <NavBar />
      <Center w={"100%"} h={"85vh"}>
        <Editor
          key={JSON.stringify(jsonData)}
          value={jsonData}
          onChange={(updatedJson: any) => setjsonData(updatedJson)}
        />
        <Flex
          w={"20%"}
          h={"30%"}
          direction={"column"}
          justify={"space-around"}
          p={"5"}
          align={"center"}
          style={{
            border: "1px solid",
            borderRadius: "5%",
          }}
        >
          <Input
            w={"70%"}
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            w={"70%"}
            type="number"
            placeholder="age"
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <Input
            w={"70%"}
            type="text"
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <Button
            onClick={() =>
              setjsonData({ name: Name, age: Number(Age), city: City })
            }
          >
            change
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}

export default ConfigPage;
