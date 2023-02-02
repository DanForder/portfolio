import {
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  useState,
} from "react";
import styles from "../styles/toggle.module.scss";

type ToggleProps = {
  id: string;
  label: string;
  toggled: boolean;
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
};

const Toggle = ({
  id,
  label,
  toggled,
  onClick,
}: PropsWithChildren<ToggleProps>) => {
  const [checked, setIsChecked] = useState(toggled);

  const onToggle = (e: MouseEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    onClick(e);
  };

  return (
    <label htmlFor={id} className={styles.label}>
      <input
        id={id}
        type="checkbox"
        onClick={onToggle}
        defaultChecked={checked}
        className={styles.input}
      />
      <span className={styles.toggle}></span>
      <span className={styles.text}>{label}</span>
    </label>
  );
};

export default Toggle;
