function NavItem({
  icon,
  label = "unknown",
  onClick = () => {},
  isExpanded = false,
}) {
  return (
    <div
      className="font-semibold text-md w-full gap-3 transition-all"
      onClick={onClick}
      style={{
        padding: isExpanded ? ".5rem .75rem" : ".75rem",
      }}
    >
      {icon}
      {/* {label} */}
    </div>
  );
}

export default NavItem;
