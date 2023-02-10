import type { PluginMessage } from '../../types';

export function postMessage(message: PluginMessage) {
  figma.ui.postMessage(message);
}
