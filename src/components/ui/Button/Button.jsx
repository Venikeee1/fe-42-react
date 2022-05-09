import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.css';

export class Button extends Component {
  /* Правильній спосіб оновлення компонента */

  // updateCounter() {
  //   this.setState((prevState) => ({
  //     counter: prevState.counter + 1,
  //   }));
  //   this.setState((prevState) => ({
  //     counter: prevState.counter + 1,
  //   }));
  //   this.setState((prevState) => ({
  //     counter: prevState.counter + 1,
  //   }));
  // }

  render() {
    const {
      onClick,
      children,
      className,
      color = 'primary',
      ...restProps
    } = this.props;

    const classList = cx(styles.button, className, {
      [styles.buttonPrimary]: color === 'primary',
      [styles.buttonAlert]: color === 'alert',
      [styles.buttonPlain]: color === 'plain',
    });

    return (
      <button {...restProps} className={classList} onClick={onClick}>
        <span className={cx(styles.circle, styles.circleSmall)}></span>
        <span className={cx(styles.circle, styles.circleMedium)}></span>
        <span className={cx(styles.circle, styles.circleLarge)}></span>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'alert', 'warning', 'plain']),
};
