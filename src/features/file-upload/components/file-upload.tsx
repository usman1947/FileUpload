import { useState, useEffect } from "react";
import { UploadFile } from "antd";
import { Constants, Utils } from "../util";
import UploadBox from "./upload-box";
import UploadProgress from "./upload-progress";
import EnterCustodian from "./enter-custodian";

interface FileUploadProps {
  addNewBatch: () => void;
}

/**
 * Renders a file upload component with options for user to enter custodian.
 *
 * @param {Object} addNewBatch - function to add new batch to the upload queue
 * @return {Object} - React component with upload functionality and custodian input
 */
const FileUpload: React.FC<FileUploadProps> = ({ addNewBatch }) => {
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
    //shows upload progress and upload complete when status is UPLOADING or UPLOADED
    uploadStatus === Constants.UploadStateEnum.UPLOADING ||
      uploadStatus === Constants.UploadStateEnum.UPLOADED ? (
      <UploadProgress
        uploadPercent={uploadPercent}
        custodian={custodian}
        uploadStatus={uploadStatus}
      />
    ) : fileList.length > 0 ? (
      // shows enter custodian input and submit button if files are added to upload queue
      <EnterCustodian
        fileList={fileList}
        setCustodian={setCustodian}
        setUploadStatus={setUploadStatus}
        addNewBatch={addNewBatch}
      />
    ) : (
      // shows upload box if no files are added to upload queue
      <UploadBox setFileList={setFileList} />
    )
  );
};

export default FileUpload;
