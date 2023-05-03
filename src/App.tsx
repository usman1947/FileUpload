import "./styles.css";
import { ConfigProvider } from "antd";
import { theme as AntTheme } from "./styling";
import MultipleFileUpload from "./features/file-upload";

export default function App() {
  return (
    <ConfigProvider theme={AntTheme}>
      <MultipleFileUpload />
    </ConfigProvider>
  );
}
