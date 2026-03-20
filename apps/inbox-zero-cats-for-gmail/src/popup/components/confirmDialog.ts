import { html, render } from 'lit-html';

type SemanticColors = 'primary' | 'secondary' | 'success' | 'error';

interface ConfirmDialogOptions {
  message?: string;
  confirmLabel?: string;
  confirmColor?: SemanticColors;
}

export const showConfirmDialog = (
  onConfirm: () => void,
  {
    message = 'Reset all settings? This cannot be undone.',
    confirmLabel = 'Reset',
    confirmColor = 'error',
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

  render(
    html`
      <div class="toast">
        <span>${message}</span>
        <div class="toast-actions">
          <mrd-button size="tiny" variant="text" @click=${dismiss}
            >Cancel</mrd-button
          >
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
