import { Box, Center } from "@mantine/core";
import { JsonEditor as Editor } from "jsoneditor-react";
import { useState } from "react";
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
        <Editor
          theme="monokai"
          value={jsonData}
          onChange={(newValue: any) => {
            console.log(newValue);

            setjsonData(newValue);
          }}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </Center>
    </Box>
  );
}

export default ConfigPage;
