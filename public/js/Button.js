//Matthew Threader - 101034977
//IMD3901 - Assignment 2

//Component Handles Button Hover State
AFRAME.registerComponent('button-hover', {

    init: function () {
      var el = this.el;
      //Mouse Enter on Button (Hover)
      el.addEventListener('mouseenter', function () {
        el.setAttribute('material', {color:"red"}); //HighLight Button
      });
      //Mouse Leave on Button (Hover)
      el.addEventListener('mouseleave', function () {
        el.setAttribute('material', {color:"#780000"}); //Shadow Button
      });
    }
  });