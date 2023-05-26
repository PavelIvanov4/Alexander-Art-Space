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
