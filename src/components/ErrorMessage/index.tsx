import styles from "./ErrorMessage.module.scss";

type ErrorMessageProps = {
  message?: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={styles["error-wrapper"]}>
      <p className={styles["error-message"]}>ERROR: {message}</p>
    </div>
  );
};

export default ErrorMessage;
