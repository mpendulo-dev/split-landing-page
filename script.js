const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// when you hover on the left image it dynamically add the hover left class to the conatiner
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
// It stops the photo expansion soon as the cursor leaves the picture.
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));


// when you hover on the right image it dynamically add the hover left class to the conatiner
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
// It stops the photo expansion soon as the cursor leaves the picture.
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
