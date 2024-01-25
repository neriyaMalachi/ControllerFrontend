import { Box,  Button, Center } from "@mantine/core";
import { JsonEditor as Editor } from "jsoneditor-react";
import { useState } from "react";
import "jsoneditor-react/es/editor.min.css";
import NavBar from "./NavBar";

function ConfigPage() {
  const [jsonData, setjsonData] = useState({
    name: "John",
    age: 50,
    city: "New York",
  });

  return (
    <Box>
      <NavBar />

      <Center w={"100%"} h={"85vh"}>
        <Button
          onClick={() => setjsonData({ name: "nnnn", age: 12, city: "rosh" })}
        >
          change
        </Button>
        <Editor
          value={jsonData}
          onChange={(updateJson: any) =>{ setjsonData(updateJson)}}
        />
      </Center>
    </Box>
  );
}

export default ConfigPage;
