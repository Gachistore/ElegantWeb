import { MouseEvent } from "react";
import styles from './Button.module.css';

type ButtonProps = {
    children?: JSX.Element | string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
    [x: string]: any,
}

const Button = ({children, onClick, ...rest}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={styles['button']}
            {...rest}
        >{children}</button>
    );
};

export default Button;