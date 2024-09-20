const title = document.querySelector('.title');
const text = '"Have Something for U"'.split('');

function createSpan(char, delay) {
  const span = document.createElement('span');
  span.textContent = char;

  // Add spacing only for spaces between words
  if (char === ' ') {
    span.style.display = 'inline-block'; // Make the space behave like a block
    span.style.width = '40px'; // Fixed width for spacing
  } else {
    span.style.display = 'inline'; // Ensure characters are inline
  }

  title.appendChild(span);

  // Delay animation
  setTimeout(() => {
    span.classList.add('animate');
  }, delay);
}

// Loop through the text and apply animation delay
text.forEach((char, index) => {
  createSpan(char, index * 100); // Adjust 100ms delay per letter
});

// Add random animation delay for each span
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
  element.style.animationDelay = `${randomDelay}s`;
});
