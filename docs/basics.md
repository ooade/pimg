## React

```jsx
import Image from 'pimg'

render(<Image src="someURL" />, document.querySelector('.root'))
```

## Preact

```jsx
import Image from 'pimg/dist/preact'

render(<Image src="someURL" />, document.querySelector('.root'))
```

## Vue

#### Independently

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

#### Globally

```js
//------------------
// index.vue, maybe?
//------------------
import Vue from 'vue'
import pimg from 'pimg/dist/vue'

Vue.component('pimg', pimg)
```

### Cloudinary Images

We added a first class support for images hosted on cloudinary, so you don't have to do anything.
