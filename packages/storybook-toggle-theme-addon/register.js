import React, { useEffect } from 'react';
import { createComponent } from '@lit/react';
import { MrdToggleThemeElement } from '@mordech/web-components';
import { addons, types } from '@storybook/addons';
import { IconButton } from '@storybook/components';
import styled from 'styled-components';

const ToggleThemeButton = createComponent({
  tagName: 'mrd-toggle-theme',
  elementClass: MrdToggleThemeElement,
  react: React,
});

const ADDON_ID = 'toggleTheme';

const ToggleThemeContainer = styled(IconButton)`
  mrd-toggle-theme::part(button) {
    --mrd-icon-size: 1rem;
    --mrd-button-color: currentColor;
    --mrd-button-background: transparent;
    --mrd-button-padding: 0.5rem 0;

    &:hover,
    &:active {
      --mrd-button-hover-opacity: 0;
    }
  }
`;

export const ToggleThemeAddon = () => {
  useEffect(() => {
    const toggleThemeCallback = (e) => {
      const { theme } = e.detail;
      const iframe = document.querySelector('iframe');
      const iframeDocument = iframe.contentDocument;
      const iframeBody = iframeDocument.querySelector('body');
      iframeBody.setAttribute('data-theme', theme);
    };
    window.addEventListener('toggle-theme', toggleThemeCallback);
    return () => {
      window.removeEventListener('toggle-theme', toggleThemeCallback);
    };
  }, []);

  return (
    <>
      <ToggleThemeContainer title="Toggle theme">
        <ToggleThemeButton saveToStorage={false} />
      </ToggleThemeContainer>
    </>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Toggle Theme',
    match: ({ viewMode }) => viewMode.match(/^(story|docs)$/),
    type: types.TOOLEXTRA,
    render: () => {
      return <ToggleThemeAddon />;
    },
  });
});
