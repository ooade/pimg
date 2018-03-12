

## React

```js
import Image from 'pimg';

render(<Image src="someURL" />, document.querySelector('.root'));
```

## Preact

```js
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



