# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [https://github.com/mdrizwanfk/fem-base-apparel-coming-soon](https://github.com/mdrizwanfk/fem-base-apparel-coming-soon)
- Live Site URL: [https://mdrizwanfk.github.io/fem-base-apparel-coming-soon/](https://mdrizwanfk.github.io/fem-base-apparel-coming-soon/)

## My process

### Built with

- CRA - Create React App

## NOTES

notes: i feel like, a div container with a background image will be much better as the img tag here when setting a height, is distorting the image and it is also not possible to contain/cover the image with direct image tag, if it's background, i could do background-size: cover/contain.

conclusion: just use div container with background image untill you figure out the picture>source>img process.

Now, i feel.. background-image to div > > > > > > > > > > picture element

used dangerouslySetInnerHTML attribute to render string as html, it's equivalent to setting DOM's innerHTML.

### What I learned

- Proper directory structure
- useState, useEffect and useContext hooks
- Static font assets
- using CSS Modules feature from create-react-app
- categorical classes and it's psuedo-classes.

## Author

- Website - [Rizwan Khan](https://www.mdrizwanfk.com)
- Frontend Mentor - [@mdrizwanfk](https://www.frontendmentor.io/profile/mdrizwanfk)
- Twitter - [@mdrizwanfk](https://www.twitter.com/mdrizwanfk)
