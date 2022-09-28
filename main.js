'use strict';

import './style.css'
import { getPage } from './getPage';
import { rocketSvg } from './svgs';

const incrementUrl = 'https://responserocket.test/api/increment';
const me = document.querySelector('script[site_key]');
const siteKey = me.getAttribute('site_key');

document.querySelector('.response-rocket').innerHTML = `
  <button
    type="button"
    class="response-rocket-button rr-button-reset rr-rounded-full rr-p-4 rr-shadow rr-flex rr-items-center rr-big-white rr-text-black"
  >
    ${rocketSvg}
    <span class="response-rocket-count">0</span>
  </button>
`;

const buttons = document.getElementsByClassName('response-rocket-button');

for (let i = 0; i < buttons.length; i ++) {
  buttons[i].addEventListener('click', function () {
    const { hash, pathname } = window.location;
		fetch(incrementUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
      mode: 'cors',
			body: JSON.stringify({
				siteKey,
				hash,
				pathname,
			})
		})
    .then((response) => response.json())
		.then((data) => this.getElementsByTagName('span')[0].innerHTML = data.reactions)
    .catch((err) => console.error(err));
  });
}

getPage(siteKey);
