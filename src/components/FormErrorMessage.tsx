import { motion } from "motion/react";

interface Props {
  errorMessage: string;
}
const FormErrorMessage = ({ errorMessage }: Props) => {
  return (
    <motion.p
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
      className="text-xs text-red-600 overflow-hidden"
    >
      {errorMessage}
    </motion.p>
  );
};

export default FormErrorMessage;
