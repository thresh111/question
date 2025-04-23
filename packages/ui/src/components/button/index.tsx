interface IButtonProps {
  title: string;
}

function Button(props: IButtonProps) {
  const { title } = props;
  return (
    <button
      onClick={() => {
        console.log(123, "=========> 123");
      }}
    >
      {title}
    </button>
  );
}

export { Button };
export type { IButtonProps };
