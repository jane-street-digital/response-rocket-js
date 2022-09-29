'use strict';

import './style.css'
import { getPage } from './getPage';
import { rocketSvg } from './svgs';

const incrementUrl = import.meta.env.VITE_INCREMENT_URL;
const me = document.querySelector('script[site_key]');
const siteKey = me.getAttribute('site_key');
const darkMode = document.body.classList.contains('darkMode') || me.getAttribute('darkMode');

const responseRocketContainers = document.querySelector('.response-rocket');

if (! responseRocketContainers.length) {
  return;
}

for (let i = 0; i < responseRocketContainers.length; i++) {
  responseRocketContainers[i].innerHTML = `
      <button
        type="button"
        class="response-rocket-button rr-button-reset rr-rounded-full rr-p-4 rr-shadow rr-flex rr-items-center ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}"
      >
        ${rocketSvg}
        <span class="response-rocket-count">0</span>
      </button>
    `;
}

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
