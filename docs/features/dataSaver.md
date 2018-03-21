# Data Saver

Renders a button in the middle of the image, and fetches the image once the button is pressed.

---

This is fairly easy to set-up.

How it's done in **React** and **Preact:**

```jsx
return (
    <Image dataSaver src="someImageURL"/>
)
```

Also works in **Vue**:

```js
<template>
    <Image dataSaver src="someImageURL"/>
</template>
```



### Caveat

If you don't specify a _wrapperClassName_ or _buttonClassName_, we'd automatically use default classnames _**pimg\_\_**_**wrapper **and** **_**pimg\_\_button **_respectively. By doing so, it just renders a plain html button with no style. 

We can make it better by adding this to our stylesheet:

```css
.pimg__wrapper {
	display: inline-block !important;
	position: relative;
}

.pimg__btn {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 2px solid #fff;
	border-radius: 20px;
	font-size: 14px;
	padding: 0px 8px 2px;
	cursor: pointer;
	background: #333;
	color: #fdfdfd;
}
```

This gives you a really nice button. This is just an example, you can modify as you wish.

