import { UploadOutlined } from "@ant-design/icons";
import { Input, Button, Space, UploadFile } from "antd";
import { Constants } from "../util";

interface EnterCustodianProps {
  setUploadStatus: React.Dispatch<React.SetStateAction<string>>;
  setCustodian: React.Dispatch<React.SetStateAction<string>>;
  fileList: UploadFile<any>[];
}

/**
 * Renders a form that allows the user to enter a custodian and then submit files.
 *
 * @param {function} EnterCustodianProps.setUploadStatus - a function to set the upload status
 * @param {function} EnterCustodianProps.setCustodian - a function to set the custodian
 * @param {array} EnterCustodianProps.fileList - an array of files to be uploaded (to get the count of files)
 * @returns {JSX.Element} a form element with input and button components
 */
const EnterCustodian: React.FC<EnterCustodianProps> = ({
  setUploadStatus,
  setCustodian,
  fileList,
}) => {
  return (
    <form onSubmit={() => setUploadStatus(Constants.UploadStateEnum.UPLOADING)}>
      <Space size={8} direction="vertical" align="center">
        <Input
          allowClear
          placeholder="Enter Custodian"
          required
          onChange={(e) => setCustodian(e.target.value)}
        />
        <Button type="primary" htmlType="submit" icon={<UploadOutlined />}>
          Submit {fileList.length} Files
        </Button>
      </Space>
    </form>
  );
};

export default EnterCustodian;
