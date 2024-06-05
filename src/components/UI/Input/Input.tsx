import { HTMLInputTypeAttribute, useRef, useState } from "react";
import PasswordHandler from "./PasswordHandler";
import styles from './Input.module.css';

type InputProps = {
    id?: string,
    type: HTMLInputTypeAttribute,
    placeholder?: string,
    name?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    [x: string]: unknown,
};

const Input = (props: InputProps) => {
    const [passType, setPassType] = useState("password");
    const [isInputActive, setIsInputActive] = useState(false);
  
    const inputRef = useRef<HTMLInputElement>(null);
  
    const handlePassShow = () => {
      if (passType === "password")
        setPassType("text");
      else
        setPassType("password");
    }
  
    const handleFocusOut = () => {
      if (inputRef.current && !inputRef.current.value) {
        setIsInputActive(false);
      }
    }
  
    return (
      <div className={[props.className ?? '', styles['container']].join(' ')}>
        <input
          type={props.type === "password" ? passType : "text"}
          id={props.id}
          value={props.value}
          name={props.name}
          onBlur={handleFocusOut}
          onFocus={() => setIsInputActive(true)}
          onChange={props.onChange}
          ref={inputRef}
          className={styles['container__input']}
        />
        <label 
              htmlFor={props.name} 
              className={[styles['container__placeholder'], 
                            isInputActive ? styles['container__placeholder_active'] : ''].join(' ')}
              onClick={() => {
                inputRef.current && inputRef.current.focus();
                setIsInputActive(true);
              }}
        >
          {props.placeholder}
        </label>
        {
          props.type === "password" && <PasswordHandler type={passType} onClick={handlePassShow} />
        }
      </div>
    )
  }

export default Input;