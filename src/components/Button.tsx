import classnames from 'classnames';
import './Button.scss';

interface ButtonProps {
    onClick?: () => void;
    background?: boolean;
    children?: React.ReactNode;
}

export function Button({ onClick, background = true, children }: ButtonProps) {
    return (
        <button className={classnames('btn', { 'btn--bg': background })} onClick={onClick}>
            {children}
        </button>
    );
}
