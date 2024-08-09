import { findAndReplaceEmptyState } from './utils/findAndReplaceEmptyState';

(function () {
  'use strict';

  const observer = new MutationObserver(() => {
    findAndReplaceEmptyState('.aRu');
    findAndReplaceEmptyState(
      'td.TC[colspan="3"][style="text-align:center"]:only-child',
    );
  });

  const body = document.body;

  body &&
    observer.observe(body, {
      childList: true,
      subtree: true,
    });
})();
