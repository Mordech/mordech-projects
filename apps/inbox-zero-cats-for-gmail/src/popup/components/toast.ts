import { html, render } from 'lit-html';

type ToastType = 'success' | 'error' | 'info';

const TYPE_DURATION: Record<ToastType, number | null> = {
  success: 3000,
  info: 3000,
  error: null, // no auto-dismiss
};

interface ToastOptions {
  message: string;
  type: ToastType;
  duration?: number;
}

export const showToast = ({ message, type, duration }: ToastOptions): void => {
  // Replace any existing status toast immediately
  const existing = document.querySelector('.toast-container');
  if (existing) existing.remove();

  const resolvedDuration =
    duration !== undefined ? duration : TYPE_DURATION[type];
  const shouldAutoDismiss = resolvedDuration !== null && resolvedDuration > 0;

  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);

  let timerId: ReturnType<typeof setTimeout> | undefined;

  const dismiss = () => {
    clearTimeout(timerId);
    container.classList.add('toast-exit');
    container.addEventListener('animationend', () => container.remove(), {
      once: true,
    });
  };

  if (shouldAutoDismiss) {
    container.style.setProperty(
      '--mrd-toast-duration',
      `${resolvedDuration}ms`,
    );
    timerId = setTimeout(dismiss, resolvedDuration);
  }

  render(
    html`
      <div class="toast">
        ${shouldAutoDismiss
          ? html`<div class="toast-timer toast-timer-${type}"></div>`
          : null}
        <span>${message}</span>
        <mrd-button
          size="tiny"
          variant="text"
          aria-label="Dismiss"
          @click=${dismiss}
          >✕</mrd-button
        >
      </div>
    `,
    container,
  );
};
