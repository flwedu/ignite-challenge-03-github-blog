import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(function InputWithRef(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return <input type="text" {...props} ref={ref} />;
});
