import { setupDecrement, setupIncrement, setupRoot } from './src/dom/setupRoot';
import './style.css';

document.querySelector('#app').innerHTML = setupRoot();

setupIncrement(document.querySelector('#increment'));

setupDecrement(document.querySelector('#decrement'));
