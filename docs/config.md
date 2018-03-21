# Global Config

This allows you to add some sensible defaults to your Progressive Image Component.

> Note: Image elements props have higher priorities than the props passed to the global config

**Config Structure**:

```js
/**
 * @function config
 * @instance instance
 * @prop {String} className - The default className's for your PIMG(s)
 * @prop {String} placeholderClassName - The default placeholder className's for your image(s)
 * @prop {Boolean | Object} dataSaver - Choose to use dataSaver mode
 * @prop {String} dataSaver.wrapperClassName - DataSaver wrapper className
 * @prop {String} dataSaver.buttonClassName - DataSaver button className
 */
```

You can make use of the global config this way:

```js
const { config } from 'pimg';

const ImageDefaults = config({
    className: "myImage",
    placeholderClassName: "myPlaceholderImage",
    dataSaver: {
        wrapperClassName: "myWrapperClassName",
        buttonClassName: "myButtonClassName"
    }
});
```

> Quick Note: Component props has higher priority than global config.



**Defaults: **

```js
className = 'pimg';
dataSaver = false;
placeholderClassName = 'pimg__thumbnail';

/* If dataSaver is set to true */
dataSaver = {
    wrapperClassName = "pimg_wrapper",
    buttonClassName = "pimg_btn"
}
```



