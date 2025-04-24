"use client";
import styles from "./index.module.scss";

interface IButtonProps {}

function Button(props: IButtonProps) {
  return <div onClick={() => alert("clicked")}>Button123333</div>;
}

export { Button };
export type { IButtonProps };
