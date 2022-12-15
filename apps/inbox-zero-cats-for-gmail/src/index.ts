import { findAndReplaceEmptyState } from './utils/findAndReplaceEmptyState';

(function () {
  'use strict';

  const observer = new MutationObserver(() => {
    findAndReplaceEmptyState('.aRu', ' tab is empty');
    findAndReplaceEmptyState('td', 'No new mail!');
  });

  const body = document.body;

  body &&
    observer.observe(body, {
      childList: true,
      subtree: true,
    });
})();
