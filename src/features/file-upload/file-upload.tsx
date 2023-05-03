import { useState, useEffect } from "react";
import { UploadFile } from "antd";
import { Constants, Utils } from "./util";
import { UploadBox, EnterCustodian, UploadProgress } from "./components";

const FileUpload: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>(
    Constants.UploadStateEnum.IDLE
  );
  const [uploadPercent, setUploadPercent] = useState<number>(0);
  const [custodian, setCustodian] = useState<string>("");

  useEffect(() => {
    if (uploadStatus === Constants.UploadStateEnum.UPLOADING) {
      Utils.completeProgress(fileList.length, setUploadPercent);
    }
  }, [fileList, uploadStatus]);

  return uploadStatus === Constants.UploadStateEnum.UPLOADING ? (
    <UploadProgress uploadPercent={uploadPercent} custodian={custodian} />
  ) : fileList.length > 0 ? (
    <EnterCustodian
      fileList={fileList}
      setCustodian={setCustodian}
      setUploadStatus={setUploadStatus}
    />
  ) : (
    <UploadBox setFileList={setFileList} />
  );
};

export default FileUpload;
