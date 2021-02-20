import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  loading?: boolean;
  disabled?: boolean;
  red?: boolean;
  green?: boolean;
  outlined?: boolean;
  transparent?: boolean;
  grey?: boolean;
  error?: string;
  children?: string | JSX.Element;
  onClick?: () => void;
  size?: "small" | "big" | "medium";
}

const Container = styled.button<IButtonProps>`
  display: flex;
  padding:${({ theme, size }) => size === "small" ?
    theme.buttons.size.small : size === "medium" ? theme.buttons.size.medium : size === "big" ?
      theme.buttons.size.big : theme.buttons.size.medium
  };
  justify-content: center;
  outline: none;
  align-items: center;
  align-content: center;
  border-radius: ${({ theme }) => theme.buttons.borderRadius};
  height: ${({ theme }) => theme.buttons.height};
  background-color: ${({ theme, red, green, transparent, outlined, grey }) =>
    outlined ? `transparent` :
      red ? theme.buttons.red.backgroundColor :
        grey ? theme.buttons.grey.backgroundColor :
          green ? theme.buttons.green.backgroundColor :
            transparent ? theme.buttons.transparent.backgroundColor :
              theme.buttons.default.backgroundColor};
  opacity: ${({ disabled, theme }) => disabled ? theme.buttons.disabledOpacity : `1`};
  border-width: ${({ outlined }) => outlined ? `2px` : `0px`}
  border-color:${({ theme, red, green, transparent, grey }) =>
    grey ? theme.buttons.grey.backgroundColor :
      red ? theme.buttons.red.backgroundColor :
        green ? theme.buttons.green.backgroundColor :
          transparent ? theme.buttons.transparent.backgroundColor :
            theme.buttons.default.backgroundColor};
`;

export const Label = styled.p<IButtonProps>`
  font-size: ${({ theme }) => theme.buttons.labelFontSize};
  font-weight: 600;
  color:${({ theme, red, green, transparent, grey, outlined }) =>
    grey ? theme.buttons.grey.labelColor :
      red ? theme.buttons.red.labelColor :
        green ? theme.buttons.green.labelColor :
          transparent ? theme.buttons.transparent.labelColor :
            theme.buttons.default.labelColor};
`;

const Button = ({
  children, loading, disabled, red, green, transparent, onClick, outlined, grey, ...props
}: IButtonProps) => {
  return (
    <Container
      {...props}
      {...{ loading, disabled, red, green, transparent, outlined, grey, onClick }}
      disabled={loading === true || disabled}
    >
      { loading ?
        <Label {...{ red, green, transparent, grey, outlined }}>***loading***</Label> :
        typeof children === `string` ?
          <Label {...{ red, green, transparent, grey, outlined }}>{children}</Label> :
          children
      }
    </Container>
  );
};

export default Button;
