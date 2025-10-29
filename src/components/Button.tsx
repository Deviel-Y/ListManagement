import { motion } from "motion/react";
import type { JSX } from "react";
import type { ModalTriggerButtonVarients } from "./Modal/ModalTriggerButton";

interface ButtonProps {
  label: string | JSX.Element;
  onClick?: () => void;
  varients?: ModalTriggerButtonVarients;
  type?: "submit" | "button";
  disable?: boolean;
}

const Button = ({
  disable,
  label,
  onClick,
  varients = "primary",
  type = "button",
}: ButtonProps) => {
  return (
    <motion.button
      disabled={disable}
      type={type}
      className={`${
        varientMapping[varients!].style
      } transition-colors cursor-pointer rounded-xl disabled:bg-gray-400 disabled:text-white`}
      onClick={onClick}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.125 }}
    >
      {label}
    </motion.button>
  );
};

export default Button;

const varientMapping: Record<ModalTriggerButtonVarients, { style: string }> = {
  primary: {
    style: "bg-blue-600 hover:bg-blue-700 px-4 py-1 text-white",
  },
  warning: {
    style:
      "text-yellow-500 hover:text-yellow-600 font-semibold hover:bg-yellow-400/60 p-2",
  },
  danger: {
    style:
      "text-red-500 hover:text-red-600 font-semibold hover:bg-red-400/60 p-2",
  },
};
