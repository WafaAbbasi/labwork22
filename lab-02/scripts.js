let counter = 0;

function incrementClickCount() {
  counter++;
	target.textContent = counter;
}

clickBtn.addEventListener('click', incrementClickCount);
