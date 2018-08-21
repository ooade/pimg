## Importing Non-React Packages in V1.1.2 Below

The Old version of Pimg does not grab the package from the root path. So, one would have to `import from /dist/[vue|preact]/` but that has been added to the latest version.

## React

```jsx
import Image from 'pimg'

render(<Image src="someURL" />, document.querySelector('.root'))
```

## Preact

```jsx
import Image from 'pimg/preact' //v1.1.2+

render(<Image src="someURL" />, document.querySelector('.root'))
```

## Vue

### Independently

```js
<template>
    <pimg src="someURL" />
</template>

<script type="text/javascript">
    import pimg from 'pimg/dist/vue';

    export default {
    components: {
            pimg
        }
    }
</script>
```

### Globally

```js
//------------------
// index.vue, maybe?
//------------------
import Vue from 'vue'
import pimg from 'pimg/vue' //v1.1.2+

Vue.component('pimg', pimg)
```

### Cloudinary Images

We added a first class support for images hosted on cloudinary, so you don't have to do anything.
