'use strict';

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here and playing around for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();
