const panels = document.querySelectorAll('.panel');
console.log(panels);

function toggleOpen() {
  removeOpen();
  this.classList.toggle('open');
}

function removeOpen() {
  panels.forEach((panel) => panel.classList.remove('open'));
}

function toggleActive(evt) {
  if (evt.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
