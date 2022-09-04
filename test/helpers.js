const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

jsdom({
  html, src
});






// Write your solution here!
const cats = [
  "Milo", "Otis", "Garfield"
];


function destructivelyAppendCat(_Ralph){
  cats.push(_Ralph);
  return cats;
}


function destructivelyPrependCat(_Bob){
  cats.unshift(_Bob);
  return cats;
}


function destructivelyRemoveLastCat(_Garfield){
cats.pop(_Garfield);
return cats;
}

function destructivelyRemoveFirstCat(_Milo){
  cats.shift(_Milo);
  return cats;
}

function appendCat(_Broom) {
  const newCats = [...cats, _Broom]
  return newCats;
}

function prependCat(_Arnold) {
  const delCats = [_Arnold, ...cats];
  return delCats;
}

function removeLastCat(){
  const remCat = cats.slice(0,cats.length-1);
  return remCat;
}
function removeFirstCat() {
  const fCats = cats.slice(1);
  return fCats;

}
