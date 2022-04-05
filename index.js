var modal = document.querySelector('#basicModal');

var btn = document.querySelector('#btn');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// 2nd Modal

var modal2 = document.querySelector('#basicModal2');
var btn2 = document.querySelector('#btn2');
var span2 = document.getElementsByClassName('close2')[0];

btn2.onclick = function () {
  modal2.style.display = 'block';
};

span2.onclick = function () {
  modal2.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
};
