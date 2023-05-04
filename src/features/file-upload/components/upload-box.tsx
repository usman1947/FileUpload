import { InboxOutlined } from "@ant-design/icons";
import { UploadProps } from "antd";
import { StyledDragger } from "../../../components/dragger";
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
  const draggerProps: UploadProps = {
    name: "file",
    multiple: true,
    beforeUpload: (file) => {
      setFileList((prevState) => [...prevState, file]);
      return false;
    },
  };

  return (
    <StyledDragger {...draggerProps} data-testid="upload-box">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
    </StyledDragger>
  );
};

export default UploadBox;
