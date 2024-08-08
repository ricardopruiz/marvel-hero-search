import LoadingSpinner from "../Icons/LoadingSpinner";
import styles from "./Loading.module.scss";

type LoadingProps = {
  type: "innerSpinner" | "pageSpinner";
};

const Loading = ({ type }: LoadingProps) => {
  return (
    <div className={styles["spinner"]}>
      <LoadingSpinner size={type === "innerSpinner" ? "50px" : "200px"} />
    </div>
  );
};

export default Loading;
