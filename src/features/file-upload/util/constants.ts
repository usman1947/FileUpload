// Mock time in milliseconds to upload each file
// Tweak this to change the time needed to upload each file
export const MockUploadTime: number = 5000;

// Upload stages used to render different components
export const UploadStateEnum = {
  IDLE: "IDLE",
  UPLOADING: "UPLOADING",
  UPLOADED: "UPLOADED",
  FAILED: "FAILED",
};
