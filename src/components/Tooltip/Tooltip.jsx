import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.css';

const positionReducer = (action) => {
  console.log(action);
  switch (action.type) {
    case 'top':
      return { class: styles.tooltipTop };
    case 'bottom':
      return { class: styles.tooltipBottom };
    default:
      return { class: styles.tooltipTop };
  }
};

export const Tooltip = ({ children, label, position }) => {
  const [state, dispatch] = useReducer(positionReducer, {
    class: styles.tooltipTop,
  });
  const tooltipClassList = [styles.tooltip, state.class].join(' ');

  useEffect(() => {
    dispatch({
      type: position,
    });
  }, [position]);

  return (
    <div className={styles.tooltipWrapper}>
      {children}
      <div className={tooltipClassList}>{label}</div>
    </div>
  );
};

Tooltip.propTypes = {
  label: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};
