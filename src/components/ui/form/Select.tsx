interface SelectProps {
    children?: React.ReactNode;
    options: string[];
    onChange: (value: string) => void;
    value: string;
    style?: string;
}

export default function Select({children, options, onChange, value, style }: SelectProps) {
    const styleClass = {
        "dark": "dropdown-dark",
        "none": "dropdown-none",
    } as any;
    style = style && styleClass[style] ? styleClass[style] : 'dropdown';
    
    return (
        <label>
        {children}
        <select 
        value={value}
        onChange={(newValue) => onChange(newValue.target.value)}
        className={style}
        >
            {options.map((option) => (
                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            ))}
        </select>
        </label>
    );
}
