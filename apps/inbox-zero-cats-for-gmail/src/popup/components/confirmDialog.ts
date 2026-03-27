import { html, render } from 'lit-html';

import '@mordech/web-components';

type SemanticColors = 'primary' | 'secondary' | 'success' | 'error';

interface SecondaryAction {
  label: string;
  onAction: () => void;
  color?: SemanticColors;
}

interface ConfirmDialogOptions {
  message?: string;
  confirmLabel?: string;
  confirmColor?: SemanticColors;
  secondaryAction?: SecondaryAction;
}

export const showConfirmDialog = (
  onConfirm: () => void,
  {
    message = 'Reset all settings? This cannot be undone.',
    confirmLabel = 'Reset',
    confirmColor = 'error',
    secondaryAction,
  }: ConfirmDialogOptions = {},
) => {
  const existing = document.querySelector('.dialog-container');
  if (existing) return;

  const container = document.createElement('div');
  container.className = 'dialog-container';
  document.body.appendChild(container);

  const dismiss = () => {
    container.classList.add('toast-exit');
    container.addEventListener('animationend', () => container.remove(), {
      once: true,
    });
  };

  container.addEventListener('click', dismiss);

  render(
    html`
      <div class="toast" @click=${(e: Event) => e.stopPropagation()}>
        <span>${message}</span>
        <div class="toast-actions">
          <mrd-button size="tiny" variant="text" @click=${dismiss}
            >Cancel</mrd-button
          >
          ${secondaryAction
            ? html`<mrd-button
                size="tiny"
                color=${secondaryAction.color ?? 'primary'}
                variant="inverted"
                @click=${() => {
                  dismiss();
                  secondaryAction.onAction();
                }}
                >${secondaryAction.label}</mrd-button
              >`
            : ''}
          <mrd-button
            size="tiny"
            color=${confirmColor}
            variant="fill"
            @click=${() => {
              dismiss();
              onConfirm();
            }}
            >${confirmLabel}</mrd-button
          >
        </div>
      </div>
    `,
    container,
  );
};
