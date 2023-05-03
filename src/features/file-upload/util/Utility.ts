import * as Constants from "./constants";

/**
 * Mocks the upload progress for the given number of files by setting the upload percentage periodically
 * Uses Constants.MockUploadTime in milliseconds to mock the upload time for each file
 * @param numberOfFiles - The number of files to upload
 * @param setUploadPercent - The function to call with the upload percentage
 * @returns A promise that resolves with 100 when upload is complete
 */
export function completeProgress(numberOfFiles: number, setUploadPercent: Function): Promise<number> {
    if (numberOfFiles === 0 || Constants.MockUploadTime === 0) {
        return Promise.resolve(100);
    }
    const updates = numberOfFiles * 10;
    const duration = numberOfFiles / 2;
    const interval = (duration * Constants.MockUploadTime) / updates;
    const increment = 100 / updates;

    return new Promise((resolve) => {
      let progress = 0;
      const update = () => {
        progress += increment;
        if (progress > 100) {
          progress = 100;
        }
        setUploadPercent(Number(progress.toFixed(2)));
        if (progress === 100) {
          clearInterval(intervalId);
          resolve(progress);
        }
      };
      const intervalId = setInterval(update, interval);
    });
  }