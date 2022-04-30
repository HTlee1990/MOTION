type Props = {
  className?: string;
  children?: any;
  onClick?: (e?: any) => void;
  id?: string;
};

function Button({ children, className, onClick, id }: Props) {
  return (
    <button className={className} id={id} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
