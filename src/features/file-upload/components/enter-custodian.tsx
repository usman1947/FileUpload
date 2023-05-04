import { UploadOutlined } from "@ant-design/icons";
import { Input, Button, Space, UploadFile, Grid } from "antd";
import { Constants } from "../util";
import { StyledCard } from "../../../components/card";

const { useBreakpoint } = Grid;
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
  const screens = useBreakpoint();
  function onSubmit(e: any): void {
    e.preventDefault();
    setUploadStatus(Constants.UploadStateEnum.UPLOADING);
    addNewBatch();
  }
  return (
    <form onSubmit={onSubmit} data-testid="enter-custodian-form">
      <StyledCard>
        <Space
          direction="horizontal"
          align="center"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Input
            allowClear
            placeholder="Enter Custodian"
            required
            data-testid="enter-custodian-input"
            onChange={(e) => setCustodian(e.target.value)}
          />
          <Button
            type="primary"
            htmlType="submit"
            data-testid="enter-custodian-submit"
            icon={<UploadOutlined />}
          >
            {!screens.xs && `Submit ${fileList.length} Files`}
          </Button>
        </Space>
      </StyledCard>
    </form>
  );
};

export default EnterCustodian;
