import React, { FC } from 'react';
import {
  colors,
  colorTheme,
  elevation,
  fontFamilies,
  fontSizes,
  fontWeights,
} from '@mordech/tokens';
import { Token } from '@mordech/tokens/utils';
import styled from 'styled-components';

import { GlobalStyle } from '../../../abstracts';

const toUppercase = (str: string) =>
  str
    .split('')
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join('');

const ColorGridContainer = styled.div`
  display: grid;
  font-family: ${fontFamilies.sans};
`;

const ColorGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: 1rem 1.5rem;
`;

const ColorGroupName = styled.div`
  color: ${colors.primary.base};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes[1]};
`;

const ColorThemeName = styled.div`
  color: ${colors.primary.base};
  font-size: ${fontSizes[3]};
  font-family: ${fontFamilies.serif};
  width: fit-content;
`;

const ColorGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.background.base};

  & & {
    padding: unset;
  }
`;

const ColorBox = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  color: ${({ color }) => color};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: ${elevation[0]};
`;

const ColorName = styled.div`
  font-size: ${fontSizes[0]};
  filter: invert(1) grayscale(1) contrast(100);
`;

export const ColorGrid: FC = () => {
  const renderColorGroup = (colorGroup: Token) => {
    return (
      <ColorGroup>
        {Object.keys(colorGroup).map((colorName) => {
          const color = colorGroup[colorName];
          if (typeof color === 'string') {
            return (
              <ColorBox color={color} key={colorName}>
                <ColorName>{colorName}</ColorName>
                <ColorName>{color}</ColorName>
              </ColorBox>
            );
          } else if (typeof color === 'object') {
            return (
              <ColorGroupContainer key={colorName} data-theme={colorName}>
                {colorName === 'light' || colorName === 'dark' ? (
                  <ColorThemeName>
                    {toUppercase(colorName)} Theme
                  </ColorThemeName>
                ) : (
                  <ColorGroupName>{toUppercase(colorName)}</ColorGroupName>
                )}
                {renderColorGroup(color as Token)}
              </ColorGroupContainer>
            );
          } else {
            return null;
          }
        })}
      </ColorGroup>
    );
  };
  return (
    <>
      <GlobalStyle />
      <ColorGridContainer>{renderColorGroup(colorTheme)}</ColorGridContainer>
    </>
  );
};
