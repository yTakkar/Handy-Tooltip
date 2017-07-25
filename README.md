# Handy-Tooltip
A very simple & useful toolkit that can be used easily with very simple API. Screenshots below.

If you're reading on npmjs website, please visit [GitHub page](https://github.com/yTakkar/Handy-Tooltip) for better documentation!!

# Quick links
1. [Screenshots](#screenshots)
2. [Requirements](#requirements)
3. [Usage](#usage)
4. [API](#api)

# Screenshots
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Tooltip/master/screenshots/Snap%202017-05-23%20at%2000.16.50.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Tooltip/master/screenshots/Snap%202017-05-23%20at%2000.29.37.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Tooltip/master/screenshots/Snap%202017-05-23%20at%2001.09.30.png)

These screenshots are from [Instagram-clone](https://github.com/yTakkar/Instagram-clone) I created & you can use the code with 5 simple & straight-forward steps!!

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

**Thanks for reading!!**