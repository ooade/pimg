# Fetch-On-Demand

Fetches the image as soon as we scroll to it's position on the page.

---

This is fairly easy to set-up.

How it's done in **React** and **Preact:**

```jsx
return (
    <Image fetchOnDemand src="someImageURL"/>
)
```

Also works in **Vue**:

```js
<template>
    <Image fetch-on-demand src="someImageURL"/>
</template>
```



