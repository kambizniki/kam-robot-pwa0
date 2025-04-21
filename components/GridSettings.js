// components/GridSettings.js

import { t } from '../i18n.js';

export function renderGridSettings(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const wrapper = document.createElement('div');
  wrapper.id = 'grid-settings';

  wrapper.innerHTML = `
    <h2>${await t('grid_bot')}</h2>
    <label>
      Min Price:
      <input type="number" id="min-price" placeholder="e.g. 100" />
    </label>
    <br/>
    <label>
      Max Price:
      <input type="number" id="max-price" placeholder="e.g. 200" />
    </label>
    <br/>
    <label>
      Investment (USDT):
      <input type="number" id="investment" placeholder="e.g. 50" />
    </label>
    <br/>
    <label>
      Grid Count:
      <input type="number" id="grid-count" placeholder="e.g. 10" />
    </label>
    <br/>
    <button id="start-bot-btn">${await t('start_bot')}</button>
    <button id="stop-bot-btn">${await t('stop_bot')}</button>
  `;

  container.appendChild(wrapper);
}
