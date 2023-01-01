# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- White: hsl(0, 0%, 100%)
- Black: hsl(0, 0%, 0%)
- Dark Gray: hsl(0, 0%, 55%)
- Very Dark Gray: hsl(0, 0%, 41%)

### Neutral

## Typography

### Body Copy

- Font size: 15px

### Fonts

- Family: [Alata](https://fonts.google.com/specimen/Alata)
- Weight: 400

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weight: 300

## Icons

We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}