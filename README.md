# Technical Test

This repository contains an [example web page](index.html). Your task is to modify the [script file](script.js) and make this page interactive in several ways:

1. Show an overlay that covers the page, and ask the user to click and drag

![overlay](./screenshots/overlay.png)

2. Allow the user to draw a box on the page that removes part of this overlay

![drag](./screenshots/drag.gif)

3. Determine the largest element that is contained within the area that the user has drawn and add a red outline to that element (hint: `document.elementsFromPoint` and `MutationObserver` are two APIs you can use to help determine what elements are in given area)

![highlight](./screenshots/highlight.gif)
