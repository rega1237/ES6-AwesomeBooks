import { dateText } from './domElements.js';

import { DateTime } from './luxon.js';

export default () => {
  const d = DateTime.now();
  const date = d.toLocaleString(DateTime.DATETIME_MED);
  dateText.textContent = date;
};