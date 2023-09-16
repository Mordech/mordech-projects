import type { PluginMessage } from '../../types/modules';

export function postMessage(message: PluginMessage) {
  parent.postMessage({ pluginMessage: message }, '*');
}
