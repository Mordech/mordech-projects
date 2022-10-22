import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from 'react';
import styled from 'styled-components';

import { colors, fontSizes, Icons } from '../../abstracts';
import { Icon } from '../Icon';

import { ButtonVariants } from './types';
import variantStyles from './variantStyles';

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asElement?: 'button' | 'a';
    variant?: ButtonVariants;
    children?: ReactNode;
    startIcon?: Icons;
    endIcon?: Icons;
  };

const StyledButton = styled.button<{ $variant: ButtonVariants }>`
  --border-size: 1.5px;
  --background-color: ${colors.dark};
  --color: ${colors.lightest};
  --outline-offset: calc(var(--border-size) * -1);
  --border-color: var(--background-color);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 0.5rem;

  background-color: var(--background-color);
  color: var(--color);

  cursor: pointer;

  padding: 0.65rem 1rem;
  min-width: 7rem;

  border-color: var(--border-color);
  border-width: var(--border-size);
  border-radius: 99rem;
  border-style: solid;

  font-size: ${fontSizes[1]};
  font-weight: inherit;

  outline-offset: var(--outline-offset);
  outline-width: var(--border-size);
  outline-color: transparent;
  outline-style: solid;

  transition: all 250ms ease, outline-offset var(--bounce-transition);
  transition-delay: outline-color 10ms;

  &:focus-visible {
    outline-style: solid;
    outline-color: ${colors.dark};
    outline-offset: 4px;
    outline-width: 2px;
  }

  &:hover {
    --background-color: ${colors.deepest};
    --border-color: var(--background-color);
    --color: ${colors.lightest};
  }

  &:active {
    --background-color: ${colors.black};
    --color: ${colors.lightest};
    --border-color: var(--background-color);

    outline-color: transparent;
    outline-width: var(--border-size);
    outline-offset: var(--outline-offset);
  }

  &:disabled {
    --background-color: ${colors.light};
    --color: ${colors.deep};

    outline: unset;
    border-color: transparent;
    cursor: not-allowed;
  }

  ${({ $variant }) => variantStyles[$variant]}
`;

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  asElement = 'button',
  children,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <StyledButton as={asElement} $variant={variant} {...rest}>
      {startIcon && <Icon icon={startIcon} />}
      {children}
      {endIcon && <Icon icon={endIcon} />}
    </StyledButton>
  );
};
