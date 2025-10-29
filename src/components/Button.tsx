import { motion } from "motion/react";
import type { JSX } from "react";
import type { ModalTriggerButtonVarients } from "./Modal/ModalTriggerButton";

interface ButtonProps {
  label: string | JSX.Element;
  onClick?: () => void;
  varients?: ModalTriggerButtonVarients;
  type?: "submit" | "button";
}

const Button = ({
  label,
  onClick,
  varients = "primary",
  type = "button",
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      className={varientMapping[varients!].style}
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
    style:
      "bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer px-5 py-1.5 rounded-xl text-white",
  },
  warning: {
    style:
      "text-yellow-500 hover:text-black font-semibold hover:bg-yellow-400/50 transition-colors cursor-pointer p-2 rounded-xl",
  },
  danger: {
    style:
      "text-red-500 hover:text-white font-semibold hover:bg-red-400/80 transition-colors cursor-pointer p-2 rounded-xl",
  },
};
