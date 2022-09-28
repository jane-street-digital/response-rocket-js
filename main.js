import './style.css'
import { setupCounter } from './counter.js'
import rocket from './rocket.svg';

document.querySelector('.response-rocket').innerHTML = `
  <button
    type="button"
    class="rr-rounded-full rr-p-4 rr-shadow rr-flex rr-items-center rr-big-white rr-text-black"
  >
    ${rocket}
    <span>0</span>
  </button>
`

setupCounter(document.querySelector('#counter'))
