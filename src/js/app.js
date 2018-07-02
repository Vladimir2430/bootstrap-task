import '../less/base.less';

document.getElementById('btn1').addEventListener("click", function() {
  document.getElementById('language-en-header').style.display='none';
  document.getElementById('language-en-main').style.display='none';
  document.getElementById('language-en-footer').style.display='none';
  document.getElementById('language-ru-header').style.display='block';
  document.getElementById('language-ru-main').style.display='block';
  document.getElementById('language-ru-footer').style.display='block';
});

document.getElementById('btn2').addEventListener("click", function() {
  document.getElementById('language-ru-header').style.display='none';
  document.getElementById('language-ru-main').style.display='none';
  document.getElementById('language-ru-footer').style.display='none';
  document.getElementById('language-en-header').style.display='block';
  document.getElementById('language-en-main').style.display='block';
  document.getElementById('language-en-footer').style.display='block';
});
