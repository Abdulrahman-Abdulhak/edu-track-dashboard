import Icon from "./Icon";

function BarChartIcon({ color = "black", size = "1rem" }) {
  return (
    <Icon
      color={color}
      size={size}
      penPath={
        <path
          d="M18 20V10M12 20V4M6 20V14"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      }
    />
  );
}

export default BarChartIcon;
