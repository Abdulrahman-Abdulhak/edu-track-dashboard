import Icon from "./Icon";

function LayersIcon({ color = "black", size = "1rem" }) {
  return (
    <Icon
      color={color}
      size={size}
      penPath={
        <path
          d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      }
    />
  );
}

export default LayersIcon;
