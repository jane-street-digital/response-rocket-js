'use strict';

import './style.css'
import { getPage } from './getPage';
import { rocketSvg, smileSvg, heartSvg, thumbsUpSvg } from './svgs';

console.log('Reaction Rocket v1.0.7');

const me = document.querySelector('script[data-rocket-key]');
const siteKey = me.getAttribute('data-rocket-key');
const darkMode = document.body.classList.contains('darkMode') || me.getAttribute('darkMode');
const responseRocketContainers = document.getElementsByClassName('rocket-widget');

let url = 'https://responserocket.app/api/';
if (me.getAttribute('data-dev')) {
  url = 'https://responserocket.test/api/';
}

if (responseRocketContainers.length) {
  for (let i = 0; i < responseRocketContainers.length; i++) {
    const widgetId = responseRocketContainers[i].dataset.rocketWidget;
    responseRocketContainers[i].innerHTML = `
      <div class="rr-flex rr-justify-center">
        <div class="rr-flex shrink rr-rounded-full rr-py-2 rr-px-4 rr-justify-center rr-shadow ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}">
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-flex rr-items-center"
              data-reaction="rocket"
              ${widgetId ? 'data-widget-id=' + widgetId : ''}
            >
              ${rocketSvg}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}"
              data-reaction="smile"
              ${widgetId ? 'data-widget-id=' + widgetId : ''}
            >
              ${smileSvg}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}"
              data-reaction="heart"
              ${widgetId ? 'data-widget-id=' + widgetId : ''}
            >
              ${heartSvg}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${darkMode ? 'rr-bg-white rr-text-black' : 'rr-bg-black rr-text-white'}"
              data-reaction="thumbsUp"
              ${widgetId ? 'data-widget-id=' + widgetId : ''}
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
      const reaction = this.getAttribute('data-reaction');
      const widgetId = this.getAttribute('data-widget-id');

      let route = 'increment';
      if (widgetId) {
        route = 'widgets/increment';
      }

      if (!exceededClickLimit || true) {
        fetch(`${url}${route}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          body: JSON.stringify({
            siteKey,
            hash,
            pathname,
            reaction,
            widgetId
          })
        })
        .then((response) => response.json())
        .then((data) => {
          exceededClickLimit = data.exceededClickLimit;
          const publicId = data.public_id;
          if (data.reactions) {
            data.reactions.map((reaction) => {
              let elements = document.querySelectorAll(`.response-rocket-button:not([data-widget-id])[data-reaction="${reaction.reaction}"]`);
              if (publicId) {
                elements = document.querySelectorAll(`.response-rocket-button[data-widget-id="${publicId}"][data-reaction="${reaction.reaction}"]`);
              }

              for (let i = 0; i < elements.length; i++) {
                if (reaction.clicks) {
                  elements[i].querySelector('span.response-rocket-count').innerHTML = reaction.clicks;
                }
              }
            });
          }
        })
        .catch((err) => console.error(err));
      }
    });
  }

  let pageUrl = 'https://responserocket.app/api';
  if (me.getAttribute('data-dev')) {
      pageUrl = 'https://responserocket.test/api';
  }

  getPage(siteKey, pageUrl);
}
