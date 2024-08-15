const defaultParams = {
  color: "black",
  size: "1rem",
};

function Icon({ penPath, size = "1rem", color = "black" }) {
  if (!color) color = defaultParams.color;
  if (!size) size = defaultParams.size;

  return (
    <div
      className="aspect-square"
      style={{ width: size, height: size, color: color }}
    >
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        {penPath}
      </svg>
    </div>
  );
}

export default Icon;
