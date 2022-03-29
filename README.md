# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](images/screenshot.png)

### Links

- Solution URL: (https://github.com/chanelmarshall/faq-accordion-challenge)
- Live Site URL: (https://chanelmarshall.github.io/faq-accordion-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

This was fun and slightly difficult challenge for a newbie like me. At first I wasn't sure how to get the arrows to be aligned with each other and spaced out from the questions. Realizing I could put the questions and arrows in divs and set them to flex, I was able to accomplish that task.

The major challenge was the JavaScript. I knew I needed to target the questions, and I knew I needed to add a click event to them which would then target the hidden paragraphs and the arrows. I struggled with this at first, but I once finally realized the loop I needed to make, I quickly put the rest together. I'm proud of pushing through.

```html
<div class="questions-container">
  <h2 class="hover">What is the maximum file upload size?</h2><i class="fa-solid fa-angle-down"></i>
</div>
```
```css
.questions-container {
  display: flex;
  justify-content: space-between;
}
```
```js
var questions = document.querySelectorAll("h2");

questions.forEach((question) => question.addEventListener("click", function() {
// toggle code goes here
})
);
```

### Continued development

I definitely need more practice with JavaScript. I can get close to a solution, but find that I'm missing a step here or there. Once I realize the missing step, I'm able to figure the rest out pretty easily. I know this will just take more practice and application.

Additionally, positioning elements is something I learned more about in this challenge. I feel more practice with positioning elements, especially in relation to responsiveness, will help me become a better developer.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) - This helped me with the linear gradient. I remembered it was a CSS function, but I couldn't remember the property to use it in.
- [freeCodeCamp](https://www.freecodecamp.org/news/build-an-accordion-menu-using-html-css-and-javascript/) - This was a great resource in realizing that I needed a for loop and using the 'this' keyword to target the elements I needed.

## Author

- Author - Chanel Marshall
- Frontend Mentor - [@chanelmarshall](https://www.frontendmentor.io/profile/chanelmarshall)
