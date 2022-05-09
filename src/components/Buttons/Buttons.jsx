import style from './Buttons.module.css';

export const Buttons = ({ options, handleButton }) => {
  return options.map(option => {
    return (
      <button
        key={option}
        name={option}
        type="button"
        className={style.button}
        onClick={handleButton}
      >
        {option}
      </button>
    );
  });
};
