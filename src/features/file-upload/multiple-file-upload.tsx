import { Layout, Card, Space } from "antd";
import { FileUpload } from "./components";
import { useState } from "react";
import { Utils } from "./util";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5%",
};

const cardStyle: React.CSSProperties = {
  overflowY: "auto",
  height: "fit-content",
  maxHeight: "100%",
};

const MultipleFileUpload: React.FC = () => {
  const [batchList, setBatchList] = useState<string[]>([
    Utils.generateRandomId(),
  ]);
  function addNewBatch() {
    setBatchList((prevState) => [...prevState, Utils.generateRandomId()]);
  }

  return (
    <Content style={contentStyle}>
      <Card style={cardStyle}>
        <Space direction="vertical" size={32}>
          {batchList.map((id) => (
            <FileUpload key={id} addNewBatch={addNewBatch} />
          ))}
        </Space>
      </Card>
    </Content>
  );
};

export default MultipleFileUpload;
