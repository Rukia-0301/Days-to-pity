'use strict';

let days = 1;
let pulls;
let tenPulls;

let storns = Number(prompt('現在の石の数を入力してください'));

const elem = document.getElementById('pulls');

if (storns >= 160) {
  const nowPulls = Math.floor(storns / 160);
  const li = document.createElement('li');
  li.textContent = `現在： ${nowPulls}回ガチャが引けます`;
  elem.appendChild(li);
} else {
  const li = document.createElement('li');
  li.textContent = '現在： ガチャは引けません';
  elem.appendChild(li);
}

do {
  storns += 130;
  pulls = storns / 160;
  tenPulls = Math.floor(pulls);
  if (tenPulls % 10 == 0) {
    console.log(`${days}日目： ${tenPulls}回ガチャが引けます`);
    const li = document.createElement('li');
    li.textContent = `${days}日目： ${tenPulls}回ガチャが引けます`;
    elem.appendChild(li);
  }
  days++;
} while (pulls <= 180);
