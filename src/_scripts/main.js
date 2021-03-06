// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import debounce from 'debounce';
import { mq, breakpoints } from './mq';

import codeLineNumbers from '~on-page-load-js/codeLineNumbers';
import smoothAnchors from '~on-page-load-js/smoothAnchors';

$(() => {
  codeLineNumbers();
  smoothAnchors();

  $('.btn.-one').click(function(e){
    e.preventDefault();

    mq.min('medium', (screen_width)=>{
      $(this).toggleClass('-active');
      console.log(screen_width);
    })
  });

  $('.btn.-two').click(function(e){
    e.preventDefault();

    if (mq.min('medium')){
      $(this).toggleClass('-active');
    }
  });

  $('.btn.-three').click(function(e){
    e.preventDefault();

    mq.max('medium', (screen_width)=>{
      $(this).toggleClass('-active');
      console.log(screen_width);
    })
  });

  $('.btn.-four').click(function(e){
    e.preventDefault();

    mq.inside('medium', 'small', (screen_width)=>{
      $(this).toggleClass('-active');

      //log the screen width at the time the button was clicked
      console.log(screen_width);
    })
  });

  $('.btn.-five').click(function(e){
    e.preventDefault();

    mq.outside('medium', 'small', (screen_width)=>{
      $(this).toggleClass('-active');

      //log the screen width at the time the button was clicked
      console.log(screen_width);
    })
  });

  const MQ_btn7__active = ()=> mq.max('medium');
  $('.btn.-six').click(function(e){
    e.preventDefault();

    if (MQ_btn7__active()){
      $(this).toggleClass('-active');
    }

  });


  $('.btn.-seven').click(function(e){
    e.preventDefault();

    mq.max(1000, (screen_width)=>{
      $(this).toggleClass('-active');

      //log the screen width at the time the button was clicked
      console.log(screen_width);
    })
  })

  $('.btn.-eight').click(function(e){
    e.preventDefault();

    mq.min(1000, (screen_width)=>{
      $(this).toggleClass('-active');

      //log the screen width at the time the button was clicked
      console.log(screen_width);
    })
  })

  $('.btn.-nine').click(function(e){
    e.preventDefault();

    mq.min(breakpoints.medium + 30, (screen_width)=>{
      $(this).toggleClass('-active');

      //log the screen width at the time the button was clicked
      console.log(screen_width);
    })
  })

  $('.btn.-ten').click(function(e){
    e.preventDefault();
  });

  function toggleBtn(){
    if (mq.inside('medium', 'small')){
      $('.btn.-ten').addClass('-active');
    } else {
      $('.btn.-ten').removeClass('-active');
    }
  };

  toggleBtn();
  window.onresize = debounce(toggleBtn, 200);

});
