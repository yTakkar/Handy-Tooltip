# Handy-Tooltip
A very simple & useful toolkit that can be used easily with very simple API. Screenshots below.

If you're reading on npmjs website, please visit [GitHub page](https://github.com/yTakkar/Handy-Tooltip) for better documentation!!

[![npm version](https://badge.fury.io/js/handy-tooltip.svg)](https://www.npmjs.com/package/handy-tooltip)

# Quick links
1. [Screenshots](#screenshots)
2. [Requirements](#requirements)
3. [Usage](#usage)
4. [API](#api)
5. [Contribute](#contribute)

# Screenshots
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Tooltip/master/screenshots/Snap%202017-05-23%20at%2000.16.50.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Tooltip/master/screenshots/Snap%202017-05-23%20at%2000.29.37.png)

These screenshots are from [React-Instagram-clone-2.0](https://github.com/yTakkar/React-Instagram-clone-2.0)!!

# Requirements
1. jQuery

# Usage

1. First install the package with `npm` or `Yarn`.
    ```
    npm install handy-tooltip
    ```
    or
    ```
    yarn add handy-tooltip
    ```

2. Create a div with id `hoverdiv`.
    ```html
    <div id='hoverdiv'></div>
    ```

3. Go to `handy-tooltip.css` & copy everything of it into your stylesheet.

4. And here comes the fun part.

    ```javascript
    import HandyTooltip from 'handy-notification'
    HandyTooltip({
        value: "Like",            // Message to be displayed
        selector: $('.like_btn')  // selector you want tooltip of
    })
    ```
You can also work with `attributes`.
```html
<a href='#' class='link' data-tooltip='Link!' >I am a cool link</a>
```
```javascript
import HandyTooltip from 'handy-notification'
HandyTooltip({
    selector: $('.link')  // selector you want tooltip of
})
```

If you think `Hoverdiv` is not at your desired position, see the [API](#api).

# API
```javascript
HandyTooltip(options:Object)
options = {
    value,
    selector,
    extraTop,
    extraLeft
}
```

<dl>
  <dt>value</dt>
  <dd>This will be the message.</dd>

  <dt>selector</dt>
  <dd>Selector you want to show tooltip of (NOTE: Not availabe to jQuery plugins).</dd>

  <dt>extraTop</dt>
  <dd>If hoverdiv is not at your desired position, adjust this property for top position.</dd>

  <dt>extraLeft</dt>
  <dd>If hoverdiv is not at your desired position, adjust this property for left position.</dd>
</dl>

# Contribute
Show your support by 🌟 the project!!

Feel free to contribute!!

**Thanks for reading!!**