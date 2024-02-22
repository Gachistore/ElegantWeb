import styles from './Dropdown.module.css';

type DropdownProps = {
    isOpen: boolean,
    chosenIndex: number,
    elements: string[],
    onCurClick: () => void,
    onItemClick: (index: number) => void,
    [x: string]: any,
}

const Dropdown = ({isOpen, chosenIndex, elements, onCurClick, onItemClick, ...rest}: DropdownProps) => {
    return (
        <div className={[styles['dropdown'], isOpen && styles['dropdown_open']].join(' ')}  {...rest}>
            <span onClick={onCurClick} className={styles['dropdown__cur']}>{elements[chosenIndex]}</span>
            <ul className={styles['dropdown__list']}>
                {
                    elements.map((element, i) => 
                        <li key={i} 
                            className={[styles['dropdown__item'], 
                                elements[chosenIndex] === element && styles['dropdown__item_chosen']].join(' ')} 
                            onClick={() => onItemClick(i)}
                        >{element}</li>)
                }
            </ul>
        </div>
    )
}

export default Dropdown;