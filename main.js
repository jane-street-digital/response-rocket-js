'use strict';

import './style.css'
import { getPage } from './getPage';
import { rocketSvg } from './svgs';

let url = 'https://responserocket.test/api/increment';
if (process.env.NODE_ENV === 'production') {
    url = 'https://responserocket.app/api/increment';
}

const me = document.querySelector('script[site_key]');
const siteKey = me.getAttribute('site_key');
const darkMode = document.body.classList.contains('darkMode') || me.getAttribute('darkMode');
const responseRocketContainers = document.getElementsByClassName('response-rocket');

if (responseRocketContainers.length) {
  for (let i = 0; i < responseRocketContainers.length; i++) {
    responseRocketContainers[i].innerHTML = `
        <button
          type="button"
          class="response-rocket-button rr-button-reset rr-rounded-full rr-p-4 rr-shadow rr-flex rr-items-center ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}"
        >
          ${rocketSvg}
          <span class="response-rocket-count"></span>
        </button>
      `;
  }

  const buttons = document.getElementsByClassName('response-rocket-button');
  let exceededClickLimit = false;
  for (let i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', function () {
      const { hash, pathname } = window.location;

      if (!exceededClickLimit) {
        fetch(url, {
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
        .then((data) => {
          exceededClickLimit = data.exceededClickLimit;
          this.getElementsByTagName('span')[0].innerHTML = data.reactions
        })
        .catch((err) => console.error(err));
      }
    });
  }

  getPage(siteKey);
}
