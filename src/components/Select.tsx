import { Fragment, useRef, useState } from 'react';
import './Select.scss';

interface SelectProps {
    options: Array<string>;
    onChange?: (value: string) => void;
}

export function Select({ options, onChange }: SelectProps) {
    const [selected, setSelected] = useState(-1);
    const ref = useRef<HTMLDivElement>(null);

    function chooseOption(index: number) {
        ref?.current?.focus();
        ref?.current?.blur(); // Not great solution for now, but it works
        setSelected(index);
        if (!onChange) return;
        onChange(options[index]);
    }

    return (
        <div className="select">
            <div tabIndex={0} className="select__value" ref={ref}>
                <span>{selected !== -1 ? options[selected] : 'Select'}</span>
                <svg
                    className="select__icon"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
            <ul className="select__options">
                {options.map((option, index) => (
                    <Fragment key={index}>
                        <li tabIndex={0} onClick={() => chooseOption(index)} className="select__option">
                            {option}
                        </li>
                        {index !== options.length - 1 && <div className="select__option-line" />}
                    </Fragment>
                ))}
            </ul>
        </div>
    );
}
