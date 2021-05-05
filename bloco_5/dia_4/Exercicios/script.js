window.onload = function() {
  function setBackgroundColor(color) {
    let content = document.querySelector('.content')
    content.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }
  function setTextColor(colortext) {
    let paragrafo = document.querySelectorAll('.paragrafo');
    for (let index = 0; index < paragrafo.length; index += 1) {
      paragrafo[index].style.color = colortext;
    }
    localStorage.setItem('fontColor', colortext);
  }

  function setFontSize(size) {
    let paragrafo = document.querySelectorAll('.paragrafo');
    for (let index = 0; index < paragrafo.length; index += 1) {
      paragrafo[index].style.fontSize = size;
    }
    localStorage.setItem('fontSize', size);
  }
  function setLineHeight(height) {
    let paragrafo = document.querySelectorAll('.paragrafo');
    for (let index = 0; index < paragrafo.length; index += 1) {
      paragrafo[index].style.lineHeight = height
    }
    localStorage.setItem('lineHeight', height);
  }

  function setFontFamily(family) {
    let paragrafo = document.querySelectorAll('.paragrafo');
    for (let index = 0; index < paragrafo.length; index += 1) {
      paragrafo[index].style.fontFamily = family;
    }
    localStorage.setItem('FontFamily', family);
  } 

  let backColorButton = document.querySelectorAll('#backgroundColor>button');
  for (let index = 0; index < backColorButton.length; index += 1) {
    backColorButton[index].addEventListener('click', function(event) {
      setBackgroundColor(event.target.innerHTML);
    })
  }

  let textColor = document.querySelectorAll('#textColor>button');
  for (let index = 0; index < textColor.length; index += 1) {
    textColor[index].addEventListener('click', function(event) {
      setTextColor(event.target.innerHTML);
    })
  }

  let fontSize = document.querySelectorAll('#fontSize>button');
  for (let index = 0; index < fontSize.length; index += 1) {
    fontSize[index].addEventListener('click', function(event) {
      setFontSize(event.target.innerHTML);
    })
  }

  let lineHeight = document.querySelectorAll('#fontHeight>button');
  for (let index = 0; index < lineHeight.length; index += 1) {
    lineHeight[index].addEventListener('click', function (event) {
      setLineHeight(event.target.innerHTML);
    })
  }

  let fontFamily = document.querySelectorAll('#fontFamily>button');
  for (let index = 0; index < fontFamily.length; index += 1) {
    fontFamily[index].addEventListener('click', function(event) {
      setFontFamily(event.target.innerHTML);
    })
  }
  function initialize () {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) setBackgroundColor(backgroundColor);
    
    let fontColor = localStorage.getItem('fontColor');
    if (fontColor) setTextColor(fontColor);
    
    let fontSize = localStorage.getItem('fontSize');
    if (fontSize) setFontSize(fontSize);
    
    let lineHeight = localStorage.getItem('lineHeight');
    if (lineHeight) setLineHeight(lineHeight);
    
    let fontFamily = localStorage.getItem('fontFamily');
    if (fontFamily) setFontFamily(fontFamily);
  }
  initialize();
}