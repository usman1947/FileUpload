import UploadProgress from "./upload-progress";
import { render, screen } from "@testing-library/react";
import { Constants } from "../util";

describe("UploadProgress_component", () => {
  // Tests that the function shows correct text when the upload is in progress.
  it("test_UploadProgress_with_uploading_status", async () => {
    render(
      <UploadProgress
        uploadPercent={0}
        uploadStatus={Constants.UploadStateEnum.UPLOADING}
        custodian="Test"
      />
    );
    const statusText = screen.getByTestId("upload-status");
    expect(statusText.innerHTML).toEqual("Uploading Test...");
  });

  // Tests that the function shows correct text when the upload is complete.
  it("test_UploadProgress_with_uploaded_status", async () => {
    render(
      <UploadProgress
        uploadPercent={0}
        uploadStatus={Constants.UploadStateEnum.UPLOADED}
        custodian="Test"
      />
    );
    const statusText = screen.getByTestId("upload-status");
    expect(statusText.innerHTML).toEqual("Uploaded Test");
  });
});
