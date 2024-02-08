import classNames from 'classnames';
import type { ButtonProps } from './types';
import { StyledButton } from './styled';

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    style,
    type = 'default',
    shape = 'default',
    loading = false,
    danger = false,
    size = 'md',
    onClick,
  } = props;

  const buttonLoader = (
    <svg
      className="btn-loader"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width="20px"
      height="20px"
      viewBox="0 0 50 50"
    >
      <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );

  return (
    <StyledButton
      className={classNames(
        className,
        { [`${type}-danger`]: danger },
        { [`${type}`]: !danger },
        `${'btn-' + size}`,
        `${'btn-' + shape}`
      )}
      onClick={onClick}
      style={style}
    >
      {loading && buttonLoader}
      <span className={classNames({ ['btn-loader-on']: loading })}>{children}</span>
    </StyledButton>
  );
};

export default Button;
