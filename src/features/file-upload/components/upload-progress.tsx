import { Progress, Space, Typography } from "antd";

interface UploadProgressProps {
  uploadPercent: number;
  custodian: string;
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
  custodian,
}) => {
  return (
    <Space size={8} direction="vertical" align="center">
      <Typography.Text type="secondary">
        Uploading {custodian}...
      </Typography.Text>
      <Progress type="circle" percent={uploadPercent} />
    </Space>
  );
};

export default UploadProgress;
