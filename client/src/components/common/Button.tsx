import { forwardRef } from "react";

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <button ref={ref} className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" {...props}>
      Upload Garmin Data
    </button>
  );
});

export default Button;
