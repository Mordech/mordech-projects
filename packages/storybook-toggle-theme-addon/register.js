import React, { useEffect } from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton } from '@storybook/components';
import styled from 'styled-components';

import '@mordech/web-components';

const ADDON_ID = 'toggleTheme';

const ToggleThemeContainer = styled(IconButton)`
  padding: unset;
  --mrd-icon-size: 1.25rem;
  --mrd-button-color: currentColor;
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
      <ToggleThemeContainer>
        <mrd-toggle-theme />
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
