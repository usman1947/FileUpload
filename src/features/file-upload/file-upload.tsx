import { useState, useEffect } from "react";
import { UploadFile, Layout } from "antd";
import { Constants, Utils } from "./util";
import { UploadBox, EnterCustodian, UploadProgress } from "./components";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
  padding: "15%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const FileUpload: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>(
    Constants.UploadStateEnum.IDLE
  );
  const [uploadPercent, setUploadPercent] = useState<number>(0);
  const [custodian, setCustodian] = useState<string>("");

  useEffect(() => {
    if (uploadStatus === Constants.UploadStateEnum.UPLOADING) {
      Utils.completeProgress(fileList.length, setUploadPercent).then(() => {
        setUploadStatus(Constants.UploadStateEnum.UPLOADED);
      });
    }
  }, [fileList, uploadStatus]);

  return (
    <Content style={contentStyle}>
      {uploadStatus === Constants.UploadStateEnum.UPLOADING ||
      uploadStatus === Constants.UploadStateEnum.UPLOADED ? (
        <UploadProgress
          uploadPercent={uploadPercent}
          custodian={custodian}
          uploadStatus={uploadStatus}
        />
      ) : fileList.length > 0 ? (
        <EnterCustodian
          fileList={fileList}
          setCustodian={setCustodian}
          setUploadStatus={setUploadStatus}
        />
      ) : (
        <UploadBox setFileList={setFileList} />
      )}
    </Content>
  );
};

export default FileUpload;
