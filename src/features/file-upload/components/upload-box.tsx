import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps, Grid } from "antd";

const { Dragger } = Upload;
const { useBreakpoint } = Grid;
interface UploadBoxProps {
  setFileList: React.Dispatch<React.SetStateAction<any[]>>;
}

/**
 * Renders an upload box that allows a user to upload single or multiple files.
 *
 * @param {Object} UploadBoxProps.setFileList - A function that sets the list of uploaded files.
 * @return {JSX.Element} Returns a JSX element of an Ant Design Dragger component.
 */
const UploadBox: React.FC<UploadBoxProps> = ({ setFileList }) => {
  const screens = useBreakpoint();
  const draggerProps: UploadProps = {
    name: "file",
    multiple: true,
    beforeUpload: (file) => {
      setFileList((prevState) => [...prevState, file]);
      return false;
    },
  };

  const draggerStyle: React.CSSProperties = {
    height: "300px",
    width: screens.xs ? "250px" : "400px",
  };

  return (
    <Dragger style={draggerStyle} {...draggerProps} data-testid="upload-box">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
    </Dragger>
  );
};

export default UploadBox;
