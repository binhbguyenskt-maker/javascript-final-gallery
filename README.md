# Accessible JavaScript Photo Gallery — Final Project

This version builds on the interactive photo gallery homework. It contains six illustrated images, descriptive alt text, and a JavaScript preview that responds to mouse hover/leave and keyboard focus/blur.

## How it works
- `<body onload="addTabFocus()">` calls JavaScript after page load.
- `addTabFocus()` loops through six `<figure>` elements and uses `setAttribute('tabindex', '0')`.
- Each figure listens for `onmouseover`, `onmouseleave`, `onfocus`, and `onblur`.
- `upDate()` shows the thumbnail alt text and large background image in `#image`.
- `undo()` restores the original preview text and blank background.

## Manual checks
1. Hover over each thumbnail and move the mouse out: preview should change and reset.
2. Reload, press Tab until a figure receives focus: preview should change. Press Tab again to leave the figure: preview should reset.
3. Open Developer Tools Console and reload: look for the `Page loaded` and `Added tabindex` messages.
4. Test the published website with W3C Nu Validator, WAVE and axe DevTools. Tests have not been executed on the published URL.
