'use strict';

import './style.css'
import { getPage } from './getPage';
import { rocketSvg, smileSvg, heartSvg, thumbsUpSvg } from './svgs';

let url = 'https://responserocket.test/api/increment';
if (import.meta.env.PROD) {
    url = 'https://responserocket.app/api/increment';
}

const me = document.querySelector('script[site_key]');
const siteKey = me.getAttribute('site_key');
const darkMode = document.body.classList.contains('darkMode') || me.getAttribute('darkMode');
const responseRocketContainers = document.getElementsByClassName('response-rocket');

if (responseRocketContainers.length) {
  for (let i = 0; i < responseRocketContainers.length; i++) {
    responseRocketContainers[i].innerHTML = `
      <div class="rr-flex rr-justify-center">
        <div class="rr-flex shrink rr-rounded-full rr-py-2 rr-px-4 rr-justify-center rr-shadow ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}">
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-flex rr-items-center"
              data-reaction="rocket"
            >
              ${rocketSvg}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}"
              data-reaction="smile"
            >
              ${smileSvg}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}"
              data-reaction="heart"
            >
              ${heartSvg}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}"
              data-reaction="thumbsUp"
            >
              ${thumbsUpSvg}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
          </div>
        </div>
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
          if (data.reactions) {
            this.getElementsByTagName('span')[0].innerHTML = data.reactions
          }
        })
        .catch((err) => console.error(err));
      }
    });
  }

  getPage(siteKey);
}
