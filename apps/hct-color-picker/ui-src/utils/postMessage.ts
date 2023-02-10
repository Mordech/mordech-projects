import type { PluginMessage } from '../../types';

export function postMessage(message: PluginMessage) {
  parent.postMessage({ pluginMessage: message }, '*');
}
