import classnames from 'classnames';
import './Input.scss';

interface InputProps {
    className?: string;
    type?: string;
    value?: string | number;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export function Input({ className, type = 'text', value, placeholder, onChange, onFocus, onBlur }: InputProps) {
    return (
        <input
            className={classnames('input', className)}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}
