/*
Code Analysis

Objective:
The objective of the completeProgress function is to mock the upload progress for a given number of files by periodically setting the upload percentage using a provided function. The function returns a promise that resolves with 100 when the upload is complete.

Inputs:
- numberOfFiles: The number of files to upload
- setUploadPercent: The function to call with the upload percentage

Flow:
1. Calculate the number of updates, duration, interval, and increment based on the number of files.
2. Create a promise that resolves with 100 when the upload is complete.
3. Initialize the progress to 0 and define an update function that increments the progress and calls the setUploadPercent function with the updated progress.
4. Set an interval to call the update function periodically.
5. When the progress reaches 100, clear the interval and resolve the promise with the progress.

Outputs:
- A promise that resolves with 100 when the upload is complete.

Additional aspects:
- The function uses Constants.MockUploadTime to mock the upload time for each file.
*/

import { completeProgress } from "./Utility";
jest.mock("./constants", () => ({
  ...jest.requireActual("./constants"),
  MockUploadTime: 10,
}));

describe("completeProgress_function", () => {
  // Tests that the function successfully sets the upload percentage for the given number of files.
  it("test_complete_progress_with_valid_input", async () => {
    const setUploadPercent = jest.fn();
    const numberOfFiles = 5;
    await completeProgress(numberOfFiles, setUploadPercent);
    expect(setUploadPercent).toHaveBeenCalledTimes(numberOfFiles * 10);
  });

  // Tests that the promise resolves with 100 when the upload is complete.
  it("test_complete_progress_resolves_with_100", async () => {
    const setUploadPercent = jest.fn();
    const numberOfFiles = 5;
    const result = await completeProgress(numberOfFiles, setUploadPercent);
    expect(result).toBe(100);
  });

  // Tests that the function handles the case where numberOfFiles is 0.
  it("test_complete_progress_with_zero_files", async () => {
    const setUploadPercent = jest.fn();
    const numberOfFiles = 0;
    const result = await completeProgress(numberOfFiles, setUploadPercent);
    expect(result).toBe(100);
  });
});
