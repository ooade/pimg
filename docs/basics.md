## React

```jsx
import Image from 'pimg';

render(<Image src="someURL" />, document.querySelector('.root'));
```

## Preact

```jsx
import Image from 'pimg/preact';

render(<Image src="someURL" />, document.querySelector('.root'));
```

## Vue

#### Independently

```js
<template>
    <pimg src="someURL" />
</template>

<script type="text/javascript">
    import pimg from 'pimg/vue';

    export default {
    components: {
            pimg
        }
    }
</script>
```

#### Plugin \[WIP\]

```js
import Vue from 'vue';
import Image from 'pimg/vue';

Vue.use(Image);
```

### Cloudinary Images

We added a first class support for images hosted on cloudinary, so you don't have to do anything.



