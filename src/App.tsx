import "./styles.css";
import FileUpload from "./features/file-upload";
import { ConfigProvider } from "antd";
import { theme as AntTheme } from "./styling";

export default function App() {
  return (
    <ConfigProvider theme={AntTheme}>
      <FileUpload />
    </ConfigProvider>
  );
}
