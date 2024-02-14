import { forwardRef } from "react";
import styles from './Checkbox.module.css';

type CheckboxProps = {
    body?: JSX.Element,
}

export type Ref = HTMLInputElement;

const Checkbox = forwardRef<Ref, CheckboxProps>((props, ref) => {
    return (
        <label className={styles['container']}>{props.body}
            <input type='checkbox' ref={ref}/>
            <span className={styles['checkmark']}></span>
        </label>
    ); 
}); 

export default Checkbox;