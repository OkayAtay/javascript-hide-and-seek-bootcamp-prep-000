function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}
function increaseRankBy(n){
  const uls = document.getElementById('app').querySelectorAll('ul.ranked-list');

  for (let i=0; i<uls.length; i++){
    uls[i].innerHTML = (`i + ${n}`).toString();
  }
}
function deepestChild(){
  return document.getElementById('grand-node').querySelector('div div div div div');
}
