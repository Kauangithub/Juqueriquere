import SimpleButton from "./SimpleButton";

interface SwitchProps {
    options: string[];
    onChange: (value: string) => void;
    value: string;
    style?: string;
}

export default function Switch({ options, onChange, value, style }: SwitchProps) {
    const styleClass = {
        "dark": "switch-dark",
        "traced": "switch-traced",
        "traced-dark": "switch-traced-dark"
    } as any;
    style = style && styleClass[style] ? styleClass[style] : '';
    return(
        <div className={'switch horizontal '+ style}>
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