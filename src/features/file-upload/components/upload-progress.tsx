import { Progress, Space, Typography, Card } from "antd";
import { Constants } from "../util";
interface UploadProgressProps {
  uploadPercent: number;
  custodian: string;
  uploadStatus: string;
}

/**
 * Renders a progress bar to show the upload progress.
 *
 * @param {number} UploadProgressProps.uploadPercent - The percentage of the upload progress.
 * @param {string} UploadProgressProps.custodian - The name of the custodian whose file is being uploaded.
 *
 * @return {JSX.Element} Returns a React functional component that renders a progress bar and the name of the custodian being uploaded.
 */
const UploadProgress: React.FC<UploadProgressProps> = ({
  uploadPercent,
  uploadStatus,
  custodian,
}) => {
  return (
    <Card className="container">
      <Space
        direction="horizontal"
        align="center"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography.Text type="secondary" data-testid="upload-status">
          {uploadStatus === Constants.UploadStateEnum.UPLOADED
            ? "Uploaded"
            : "Uploading"}{" "}
          {custodian}
          {!(uploadStatus === Constants.UploadStateEnum.UPLOADED) && "..."}
        </Typography.Text>
        <Progress type="circle" size="default" percent={uploadPercent} />
      </Space>
    </Card>
  );
};

export default UploadProgress;
