import FileUpload from "./file-upload";
import { render, screen, fireEvent } from "@testing-library/react";

describe("FileUpload_component", () => {
  // Tests that the component renders upload box when no files are added.
  it("test_FileUpload_when_files_are_not_added", async () => {
    const addNewBatch = jest.fn();
    render(<FileUpload addNewBatch={addNewBatch} />);
    expect(screen.getByTestId("upload-box")).toBeDefined();
  });

  // Tests that the component renders enter custodian component after files are added.
  it("renders_EnterCustodian_component_after_uploading_a_file", async () => {
    const mockAddNewBatch = jest.fn();
    render(<FileUpload addNewBatch={mockAddNewBatch} />);
    const file = new File(["test file"], "test.txt", { type: "text/plain" });
    const uploadInput = screen.getByTestId("upload-box");
    fireEvent.change(uploadInput, { target: { files: [file] } });
    // Ensure that the EnterCustodian component is rendered
    expect(screen.getByTestId("enter-custodian-form")).toBeDefined();
  });

  // Tests that the component renders Progress component after submit.
  it("renders_UploadProgress_component_after_submit", async () => {
    const mockAddNewBatch = jest.fn();
    render(<FileUpload addNewBatch={mockAddNewBatch} />);
    const file = new File(["test file"], "test.txt", { type: "text/plain" });
    const uploadInput = screen.getByTestId("upload-box");
    fireEvent.change(uploadInput, { target: { files: [file] } });
    const input = screen.getByTestId("enter-custodian-input");
    fireEvent.change(input, {
      target: { value: "test custodian" },
    });
    const button = screen.getByTestId("enter-custodian-submit");
    fireEvent.click(button);
    // Ensure that the Progress component is rendered
    expect(screen.getByTestId("upload-status")).toBeDefined();
  });
});
