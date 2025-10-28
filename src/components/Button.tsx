import { motion } from "motion/react";
import type { JSX } from "react";

interface ButtonProps {
 label: string | JSX.Element;
 onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
 return (
  <motion.button
   className="bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer px-5 py-1.5 rounded-xl text-white"
   onClick={onClick}
   initial={{ scale: 1 }}
   whileTap={{ scale: 0.95 }}
  >
   {label}
  </motion.button>
 );
};

export default Button;
