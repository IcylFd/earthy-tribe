/*
 * @Date: 2026-03-09 14:32:45
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-03-09 14:32:48
 */
const InfinityLogo = ({ size = 80, color = "#E7C6A3" }) => {
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 30
           C10 10,50 10,60 30
           C70 50,110 50,110 30
           C110 10,70 10,60 30
           C50 50,10 50,10 30"
        stroke={color}
        strokeWidth="3"
      />
    </svg>
  );
};
export default InfinityLogo;
