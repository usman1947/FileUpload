import { UploadFile, Card, Grid } from "antd";

const { useBreakpoint } = Grid;
interface StyledCardProps {
  children: React.ReactNode;
}

/**
 * Renders a styled card component with responsive width based on current screen size.
 * @param {StyledCardProps} props - The props object containing children and additional props for the Card component.
 * @returns {JSX.Element} - The JSX element representing the styled card component.
 */
const StyledCard: React.FC<StyledCardProps> = ({ children, ...rest }) => {
  const screens = useBreakpoint();

  return (
    <Card
      {...rest}
      style={{
        width: screens.xs ? "300px" : "400px",
      }}
    >
      {children}
    </Card>
  );
};

export default StyledCard;
