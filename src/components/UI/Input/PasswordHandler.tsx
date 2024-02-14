import { MouseEvent } from 'react';
import EyeFillIcon from 'src/assets/icons/eye_fill.svg';
import EyeLightIcon from 'src/assets/icons/eye_light.svg';
import styles from './Input.module.css';

export type PasswordHandlerProps = {
    type: string,
    onClick: (e: MouseEvent<HTMLImageElement>) => void,
}

const PasswordHandler = ({type, onClick}: PasswordHandlerProps) => {
  return (
      <img 
          src={type === "password" ? EyeLightIcon : EyeFillIcon} 
          className={styles['container__pass-handler']}
          onClick={onClick}
      />
  )
}

export default PasswordHandler;
