import Icon from "./Icon";

function UsersIcon({ color = "black", size = "1rem" }) {
  return (
    <Icon
      color={color}
      size={size}
      penPath={
        <path
          d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15ZM4 15V22"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      }
    />
  );
}

export default UsersIcon;
