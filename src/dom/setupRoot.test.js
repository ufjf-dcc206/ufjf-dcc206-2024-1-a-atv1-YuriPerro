import { describe, expect, it } from 'vitest';
import { setupCounter, setupIncrement, setupRoot } from './setupRoot';

describe('test setupRoot', () => {
  it('should have <p>', async () => {
    const app = document.createElement('div');
    app.innerHTML = setupRoot();
    const h1 = app.querySelector('p');
    expect(h1.textContent).toBe('count is 0');
  });
  it('should have an increment button', async () => {
    const app = document.createElement('div');
    app.innerHTML = setupRoot();
    const b = app.querySelector('#increment');
    expect(b.textContent).toBe('Increment counter');
  });

  it('should have a decrement button', async () => {
    const app = document.createElement('div');
    app.innerHTML = setupRoot();
    const b = app.querySelector('#decrement');
    expect(b.textContent).toBe('Decrement counter');
  });

  it('should increment count when click on button', async () => {
    const app = document.createElement('div');
    app.innerHTML = setupRoot();

    const count = app.querySelector('#counter_value');
    const incrementBtn = app.querySelector('#increment');
    setupIncrement(incrementBtn, app);

    incrementBtn.click();
    incrementBtn.click();
    incrementBtn.click();

    expect(count.textContent).toBe('count is 3');
  });
});
