import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps, Grid } from "antd";

const { Dragger } = Upload;
const { useBreakpoint } = Grid;
interface StyledDraggerProps {
  children: React.ReactNode;
}

/**
 * React functional component that renders a Dragger component with styled props.
 * @param {object} props - The props object.
 * @param {ReactNode} props.children - The child elements to render inside the Dragger.
 * @returns {JSX.Element} - The JSX element representing the Dragger with styled props.
 */
const StyledDragger: React.FC<StyledDraggerProps> = ({ children, ...rest }) => {
  const screens = useBreakpoint();
  return (
    <Dragger
      style={{
        height: "300px",
        width: screens.xs ? "300px" : "400px",
      }}
      {...rest}
    >
      {children}
    </Dragger>
  );
};

export default StyledDragger;
