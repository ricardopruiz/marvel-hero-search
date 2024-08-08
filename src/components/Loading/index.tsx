import LoadingSpinner from "../Icons/LoadingSpinner";
import styles from "./Loading.module.scss";

type LoadingProps = {
  type: "innerSpinner" | "pageSpinner";
};

const Loading = ({ type }: LoadingProps) => {
  return (
    <div className={styles["spinner"]}>
      <LoadingSpinner size={type === "innerSpinner" ? "100px" : "300px"} />
    </div>
  );
};

export default Loading;
