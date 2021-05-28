const width = 1000;
const height = 550;
const cx = width / 2;
const cy = 100;

let g = 9.81 / (50 ** 2);

let sys;

function sin(x) {
  let ans = Math.sin(x);
  return ans;
}

function cos(x) {
  let ans = Math.cos(x);
  return ans;
}

function prod(x) {
  let ans = 1;
  for (let i = 0; i < x.length; i++) {
    ans *= x[i];
  }
  return ans;
}

function sum(x) {
  let ans = 0;
  for (let i = 0; i < x.length; i++) {
    ans += x[i];
  }
  return ans;
}

function setup() {
  frameRate(50);
  system = new System();
  createCanvas(width, height).position(5, 5);
  background(30);
}

function draw() {
  background(30);
  system.update();
  system.draw();
}
