import { HTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';

export type PaperVariants = 'elevation' | 'outlined' | 'fill';

export type PaperProps = HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'header' | 'nav' | 'aside' | 'summary';
  variant?: PaperVariants;
};

export interface StyledPaperProps {
  borderColor: CSSProperties['borderColor'];
  boxShadow: CSSProperties['boxShadow'];
  backgroundColor: CSSProperties['backgroundColor'];
}
