import styles from "./index.module.scss";

interface IInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password";
}

function Input(props: IInputProps) {
  return <div>3333</div>;
}

export { Input };
export type { IInputProps };
