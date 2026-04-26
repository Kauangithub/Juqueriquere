import SimpleButton from "./SimpleButton";

interface SwitchProps {
    options: string[];
    onChange: (value: string) => void;
    value: string;
}

export default function Switch({ options, onChange, value }: SwitchProps) {
    return(
        <div className="switch horizontal">
            {options.map((option) => (
                <SimpleButton
                    key={option}
                    icon="none"
                    tema={value === option ? 'dark' : ''}
                    onClick={() => onChange(option)}
                >
                    {option}
                </SimpleButton>
            ))}
        </div>
    )
}