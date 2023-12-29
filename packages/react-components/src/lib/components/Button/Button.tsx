import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from 'react';
import { colors, fontFamilies, fontSizes, transitions } from '@mordech/tokens';
import styled from 'styled-components';

import { Icons } from '../../abstracts';
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
  --mrd-btn-border-size: 1.5px;
  --mrd-btn-background-color: ${colors.primary.base};
  --mrd-btn-color: ${colors.primary.onBase};
  --mrd-btn-outline-offset: calc(var(--mrd-btn-border-size) * -1);
  --mrd-btn-border-color: var(--mrd-btn-background-color);

  user-select: none;

  display: inline-flex;
  font-family: ${fontFamilies.sans};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 0.5rem;
  background-color: var(--mrd-btn-background-color);
  color: var(--mrd-btn-color);

  cursor: pointer;

  padding: 0.65rem 1rem;
  min-width: 7rem;

  border-color: var(--mrd-btn-border-color);
  border-width: var(--mrd-btn-border-size);
  border-radius: 99rem;
  border-style: solid;

  font-size: ${fontSizes[1]};
  font-weight: inherit;

  outline-offset: var(--mrd-btn-outline-offset);
  outline-width: var(--mrd-btn-border-size);
  outline-color: transparent;
  outline-style: solid;

  transition: all 250ms ease, outline-offset ${transitions.bounce};
  transition-delay: outline-color 10ms;

  &:focus-visible {
    outline-style: solid;
    outline-color: ${colors.primary.base};
    outline-offset: 4px;
    outline-width: 2px;
  }

  &:hover {
    --mrd-btn-background-color: ${colors.background.onBase};
    --mrd-btn-border-color: var(--mrd-btn-background-color);
    --mrd-btn-color: ${colors.background.base};

    filter: brightness(1.35);

    [data-theme='support-dark'] {
      @media (prefers-color-scheme: dark) {
        filter: brightness(0.9);
      }
    }
  }

  &:active {
    --mrd-btn-background-color: ${colors.primary.base};
    --mrd-btn-color: ${colors.primary.onBase};
    --mrd-btn-border-color: var(--mrd-btn-background-color);

    outline-color: transparent;
    outline-width: var(--mrd-btn-border-size);
    outline-offset: var(--mrd-btn-outline-offset);

    filter: brightness(1);
  }

  &:disabled {
    --mrd-btn-background-color: ${colors.disabled.container};
    --mrd-btn-color: ${colors.disabled.onContainer};

    outline: unset;
    border-color: transparent;
    cursor: not-allowed;

    &:hover {
      filter: unset;
    }
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
