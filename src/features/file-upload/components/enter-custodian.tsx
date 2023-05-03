import { UploadOutlined } from "@ant-design/icons";
import { Input, Button, Space, UploadFile, Card } from "antd";
import { Constants } from "../util";

interface EnterCustodianProps {
  setUploadStatus: React.Dispatch<React.SetStateAction<string>>;
  setCustodian: React.Dispatch<React.SetStateAction<string>>;
  addNewBatch: () => void;
  fileList: UploadFile<any>[];
}

/**
 * Renders a form that allows the user to enter a custodian and then submit files.
 *
 * @param {function} EnterCustodianProps.setUploadStatus - a function to set the upload status
 * @param {function} EnterCustodianProps.setCustodian - a function to set the custodian
 * @param {function} EnterCustodianProps.addNewBatch - a function that triggers the parent component to show new upload box
 * @param {array} EnterCustodianProps.fileList - an array of files to be uploaded (to get the count of files)
 * @returns {JSX.Element} a form element with input and button components
 */
const EnterCustodian: React.FC<EnterCustodianProps> = ({
  setUploadStatus,
  setCustodian,
  addNewBatch,
  fileList,
}) => {
  function onSubmit(): void {
    setUploadStatus(Constants.UploadStateEnum.UPLOADING);
    addNewBatch();
  }
  return (
    <form onSubmit={onSubmit}>
      <Card>
        <Space size={32} direction="horizontal" align="center">
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
      </Card>
    </form>
  );
};

export default EnterCustodian;
