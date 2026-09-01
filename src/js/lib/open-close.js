// click handler
document.addEventListener('click', e => {

  if (!e?.target?.closest('.themeswitcher')) closeDetails();

});

// debounced browser resize handler
let resizing, debounce;

window.addEventListener('resize', () => {

  if (!resizing) {
    resizing = true;
    resizeStart();
  }

  clearTimeout(debounce);
  debounce = setTimeout(() => {
    resizeEnd();
    resizing = false;
  }, 500);

}, false);


// resize initiated handler
function resizeStart() {
  closePopovers();
  closeDetails();
}

// resize completed handler
function resizeEnd() {}


// close all open popovers
function closePopovers() {

  Array.from( document.querySelectorAll(':popover-open') )
    .forEach( p => p.hidePopover() );

}


// close all open header <details> menus (except active)
function closeDetails() {

  Array.from( document.querySelectorAll('header details[open]') )
    .forEach( d => d.removeAttribute('open') );

}
