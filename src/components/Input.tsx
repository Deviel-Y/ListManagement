import { useRef } from "react";

interface Props {
  label: string;
  onChange: (value: string) => void;
  defaultValue?: string;
}

const Input = ({ label, onChange, defaultValue }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full">
      <div className="relative">
        <input
          defaultValue={defaultValue}
          ref={ref}
          onChange={(event) => onChange(event.target.value)}
          className="peer w-full bg-transparent placeholder-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
        <label
          onClick={() => ref.current?.focus()}
          className={`absolute ${
            ref.current?.value || defaultValue
              ? "left-2.5 -top-2.5 text-xs"
              : "left-2.5 top-2.5"
          } bg-white px-1 text-slate-400 text-sm transition-all duration-200
          peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400
          peer-focus:-top-2 peer-focus:text-slate-400 peer-focus:scale-90`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;
