# Handy-Notification
A very simple & useful toolkit that can be used easily with very simple API. Screenshots below.

# Quick links
1. [Screenshots](#screenshots)
2. [Requirements](#requirements)
3. [Usage with npm or Yarn](#usage-with-npm-or-yarn)
4. [Usage as a jQuery plugin](#usage-as-a-jquery-plugin)
4. [API](#api)

# Screenshots
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Tooltip/master/screenshots/Snap%202017-05-23%20at%2000.16.50.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Tooltip/master/screenshots/Snap%202017-05-23%20at%2000.29.37.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Handy-Tooltip/master/screenshots/Snap%202017-05-23%20at%2001.09.30.png)

These screenshots are from [Instagram-clone](https://github.com/yTakkar/Instagram-clone) I created & you can use the code with 5 simple & straight-forward steps!!

# Requirements
1. jQuery

# Usage with npm or Yarn

1. First install the package with `npm` or `Yarn`.

```
npm install handy-tooltip
```

```
yarn add handy-tooltip
```

2. Create a div with any `id`.
```html
<div id='hoverdiv'></div>
```

3. Go to `handy.css`, replace `REPLACE_IT` with our new div we just created i.e, `#hoverdiv` & then copy everything of `handy.css` into your stylesheet.

4. And here comes the fun part.
```javascript
import HandyTooltip from 'handy-notification'
HandyTooltip({
    value: "Like",            // Message to be displayed
    selector: $('.like_btn')  // selector you want tooltip of
})
```

If you think `Hoverdiv` is not at your desired position, see the [API](#api).

# Usage as a jQuery plugin

1. Copy `handy-tooltip-plugin.js` into your project & include it.

```html
<script src='/handy-tooltip-plugin.js'></script>
```

2. Create a div with any `id`.
```html
<div id='hoverdiv'></div>
```

3. Go to `handy.css`, replace `REPLACE_IT` with our new div we just created i.e, `#hoverdiv` & then copy everything of `handy.css` into your stylesheet.

4. And here comes the fun part.
```javascript
$('.like_btn').HandyTooltip({
  value: "Like"
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