'use strict';

var $clickMe = $('#click-me');
var $reset = $('#reset');
var count = 0;

function render(){
  $clickMe.html(count + ' likes')
  console.log('reset')
}

$clickMe.on('click', function(){
  if (count === 1){
    this.innerHTML = count + ' like';
  }else{
    this.innerHTML = count + ' likes';
  }
  count++
})

$reset.on('click', function(){
  count = 0
  render()
})

