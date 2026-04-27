import svgPaths from "../../imports/1Button1/svg-36v9006gt5";

export function HeartIcon({ className = "", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={svgPaths.p3c144080} fill={fill} />
    </svg>
  );
}

export function CopyIcon({ className = "", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg
      width="23"
      height="28"
      viewBox="0 0 23 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={svgPaths.p31f14a00} fill={fill} />
    </svg>
  );
}
