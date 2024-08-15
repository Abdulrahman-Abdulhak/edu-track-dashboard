function Divider({ label, vertical, color, borderRadius, thickness = "1px" }) {
  const className = `${vertical ? "h-full " : "w-full"}`;

  const style = { backgroundColor: color, borderRadius };
  vertical ? (style.width = thickness) : (style.height = thickness);

  return (
    <div className={className} style={style}>
      {label}
    </div>
  );
}

export default Divider;
