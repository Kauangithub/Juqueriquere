interface SelectProps {
    children?: React.ReactNode;
    options: string[];
    onChange: (value: string) => void;
    value: string;
}

export default function Select({children, options, onChange, value}: SelectProps) {
  return (
    <label>
      {children}
      <select name="">
        {options.map((option) => (
            <option
                key={option}
                onClick={() => onChange(option)}
            >
                {option}
            </option>
        ))}
      </select>
    </label>
  );
}
