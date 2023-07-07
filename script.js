const menu = document.getElementsByTagName('li'),
      part1 = document.getElementById('box1'),
	  part2 = document.getElementById('box2'),
	  part3 = document.getElementById('box3');
	  
menu[0].addEventListener('click', () => {
	part1.style.display = 'block';
	part2.style.display = 'none';
	part3.style.display = 'none';
})

menu[1].addEventListener('click', () => {
	part1.style.display = 'none';
	part2.style.display = 'block';
	part3.style.display = 'none';
})

menu[2].addEventListener('click', () => {
	part1.style.display = 'none';
	part2.style.display = 'none';
	part3.style.display = 'block';
})

let view = document.getElementsByClassName('view');
let back = document.getElementsByClassName('back');

view[0].onclick = function () {
	document.getElementById('popup1').style.display = 'block';
	document.getElementsByTagName('main')[0].style.display = 'none';
	document.getElementsByTagName('header')[0].style.display = 'none';
	window.scrollTo(0, 0);
}

back[0].onclick = function () {
	document.getElementById('popup1').style.display = 'none';
	document.getElementsByTagName('main')[0].style.display = 'block';
	document.getElementsByTagName('header')[0].style.display = 'block';
	window.scrollTo(0, 100);
}

view[1].onclick = function () {
	document.getElementById('popup2').style.display = 'block';
	document.getElementsByTagName('main')[0].style.display = 'none';
	document.getElementsByTagName('header')[0].style.display = 'none';
	window.scrollTo(0, 0);
}

back[1].onclick = function () {
	document.getElementById('popup2').style.display = 'none';
	document.getElementsByTagName('main')[0].style.display = 'block';
	document.getElementsByTagName('header')[0].style.display = 'block';
	window.scrollTo(0, 100);
}

view[2].onclick = function () {
	document.getElementById('popup3').style.display = 'block';
	document.getElementsByTagName('main')[0].style.display = 'none';
	document.getElementsByTagName('header')[0].style.display = 'none';
	window.scrollTo(0, 0);
}

back[2].onclick = function () {
	document.getElementById('popup3').style.display = 'none';
	document.getElementsByTagName('main')[0].style.display = 'block';
	document.getElementsByTagName('header')[0].style.display = 'block';
	window.scrollTo(0, 100);
}

view[3].onclick = function () {
	document.getElementById('popup4').style.display = 'block';
	document.getElementsByTagName('main')[0].style.display = 'none';
	document.getElementsByTagName('header')[0].style.display = 'none';
	window.scrollTo(0, 0);
}

back[3].onclick = function () {
	document.getElementById('popup4').style.display = 'none';
	document.getElementsByTagName('main')[0].style.display = 'block';
	document.getElementsByTagName('header')[0].style.display = 'block';
	window.scrollTo(0, 100);
}

view[4].onclick = function () {
	document.getElementById('popup5').style.display = 'block';
	document.getElementsByTagName('main')[0].style.display = 'none';
	document.getElementsByTagName('header')[0].style.display = 'none';
	window.scrollTo(0, 0);
}

back[4].onclick = function () {
	document.getElementById('popup5').style.display = 'none';
	document.getElementsByTagName('main')[0].style.display = 'block';
	document.getElementsByTagName('header')[0].style.display = 'block';
	window.scrollTo(0, 100);
}

view[5].onclick = function () {
	document.getElementById('popup6').style.display = 'block';
	document.getElementsByTagName('main')[0].style.display = 'none';
	document.getElementsByTagName('header')[0].style.display = 'none';
	window.scrollTo(0, 0);
}

back[5].onclick = function () {
	document.getElementById('popup6').style.display = 'none';
	document.getElementsByTagName('main')[0].style.display = 'block';
	document.getElementsByTagName('header')[0].style.display = 'block';
	window.scrollTo(0, 100);
}
