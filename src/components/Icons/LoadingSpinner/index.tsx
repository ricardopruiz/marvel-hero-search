import { SVGProps } from "react";
import styles from "./LoadingSpinner.module.scss";

type LoadingSpinnerProps = {
  size: string;
} & SVGProps<SVGSVGElement>;

const LoadingSpinner = (props: LoadingSpinnerProps) => (
  <svg
    data-testid="loading-spinner"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    preserveAspectRatio="xMidYMid"
    style={{
      shapeRendering: "auto",
      display: "block",
      background: "0 0",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={35}
      fill="none"
      strokeDasharray="51.83627878423159 51.83627878423159"
      strokeLinecap="round"
      strokeWidth={5}
      className={styles["red-circle"]}
    >
      <animateTransform
        attributeName="transform"
        dur="5.5555555555555545s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={27}
      fill="none"
      strokeDasharray="42.411500823462205 42.411500823462205"
      strokeDashoffset={42.412}
      strokeLinecap="round"
      strokeWidth={5}
      className={styles["black-circle"]}
    >
      <animateTransform
        attributeName="transform"
        dur="5.5555555555555545s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;-360 50 50"
      />
    </circle>
  </svg>
);
export default LoadingSpinner;
