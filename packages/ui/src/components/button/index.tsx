"use client";

interface IButtonProps {}

function Button(props: IButtonProps) {
  return (
    <button
      onClick={() => {
        console.log(123, "=========> 123");
      }}
    >
      123
    </button>
  );
}

export { Button };
export type { IButtonProps };
