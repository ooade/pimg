# Intersection Observer API

You can check about this API [here](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). If it is not supported on the browser, we just go ahead and fetch the image for you.



How we implemented it:

```js
let observer = new IntersectionObserver(entries => {
	let image = entries[0]

	if (image.isIntersecting) {
		//-----------------
		// Fetch Image here
		//-----------------
		observer.disconnect()
	}
})

observer.observe(this.image())
```

It's worth pointing out that, unless your CSS specifies otherwise, the placeholder elements will be zero height. It's recommended that you make the dimensions of the placeholder as close as you can to the image being loaded via CSS and the `placeholderClassName` setting (default is `.pimg__placeholder`.)
