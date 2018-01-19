
<p align="center">
<img src='logo.svg' width="200" alt="pimg"/>
<br/>
<a href="https://www.npmjs.org/package/pimg"><img src="https://img.shields.io/npm/v/pimg.svg?style=flat" alt="npm"></a> <a href="https://travis-ci.org/ooade/pimg"><img src="https://travis-ci.org/ooade/pimg.svg?branch=master" alt="travis"></a>
</p>

# PIMG

Progressive Image Component (Initially Implemented for Cloudinary Images). Now works with other sources :tada:

## Features

- ~20B gzipped.

- Lazy Loading of Images.

- Works with P(R)eact and Vue.

## Contents

- [Usage](#usage)
- [Basic Usage](#basic-usage)
- [Usage with Thumbnail](#usage-with-thumbnail)
- [Custom ClassName](#custom-classname)
- [Examples](#examples)
- [Goals](#goals)

### Usage

It's quite simple to use.

```sh
npm install pimg
```

#### Basic Usage

```js
import Image from 'pimg'; // react
import Image from 'pimg/dist/preact'; //preact
import Image from 'pimg/dist/vue'; //vue

render(<Image src='imageURL' />, document.getElementById('root'))
```

*Make sure you add this to your stylesheet:

```css
.pimg { width: 500px; } // You should change this to the width of your choice

.pimg__loading { filter: blur(5vw); transform: scale(1.05); } // This makes the thumbnail blurry
```

#### Usage with Thumbnail
```js
import Image from 'pimg'; // react
import Image from 'pimg/dist/preact'; //preact
// Thumbnail on Vue is a WIP

render(<Image src='imageURL'><Thumbnail src='thumbnailURL'/></Image>, document.getElementById('root'))
```

*Make sure you add this to your stylesheet:

```css
.pimg { width: 500px; } // You should change this to the width of your choice

.pimg__loading { filter: blur(5vw); transform: scale(1.05); } // This makes the thumbnail blurry
```

#### Custom ClassName
Components(Image and Thumbnail) now supports custom classNames which will be used if provided.

```js
import Image from 'pimg'; // react
import Image from 'pimg/dist/preact'; //preact

render(<Image className="myImage" src='imageURL' />, document.getElementById('root'))
```

*Make sure you add this to your stylesheet:

```css
.pimg { width: 500px; } // You should change this to the width of your choice

.pimg__loading { filter: blur(5vw); transform: scale(1.05); } // This makes the thumbnail blurry
```

### Examples

 - [Simple React Example](https://codesandbox.io/s/jzn7q44zzv)
 - [Simple Preact Example](https://codesandbox.io/s/ppwykw3w9m)

### Goals

- Scroll to viewing of images.

- Support non-cloudinary images.

- Working with other VDOM libraries.

### Contributions

Feel free to send a PR.

### License

MIT