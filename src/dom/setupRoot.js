import javascriptLogo from '../../javascript.svg';
import viteLogo from '../../vite.svg';

let count = 0;

export const setupIncrement = (element, parent = document) => {
  const counter = element ?? parent.querySelector('#increment');
  const counterIndicator = parent.querySelector('#counter_value');

  counter.addEventListener('click', () => {
    count += 1;
    counterIndicator.textContent = `count is ${count}`;
  });
};

export const setupDecrement = (element, parent = document) => {
  const counter = element ?? parent.querySelector('#decrement');
  const counterIndicator = parent.querySelector('#counter_value');

  counter.addEventListener('click', () => {
    count -= 1;
    counterIndicator.textContent = `count is ${count}`;
  });
};

export const setupRoot = () => `
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  <h1>Hello Vite!</h1>

  <p id="counter_value">count is 0</p>

  <div class="card">
    <button id="increment" type="button">Increment counter</button>
  </div>
  <div class="card">
    <button id="decrement" type="button">Decrement counter</button>
  </div>
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
</div>
`;
