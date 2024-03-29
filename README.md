# Universe React Grid Layout

React Grid Layout is a grid layout system built with React. 
RGL is React-only and does not require jQuery.
This package is a meteor port of [STRML/react-grid-layout](https://github.com/STRML/react-grid-layout).

```js
import {ReactGridLayout} from '{universe:react-grid-layout}';
export default React.createClass({
    displayName: 'Demo',
    render: function () {
        return (
            <ReactGridLayout className="layout" cols={12} rowHeight={30}>
                <div key={1} _grid={{x: 0, y: 0, w: 1, h: 2}}>1</div>
                <div key={2} _grid={{x: 1, y: 0, w: 1, h: 2}}>2</div>
                <div key={3} _grid={{x: 2, y: 0, w: 1, h: 2}}>3</div>
            </ReactGridLayout>
        )
    }
});
```
### Installation

```sh
meteor add universe:react-grid-layout universe:modules
```
Also it works with `universe:ecmascript`
#### Demos

1. [Showcase](https://strml.github.io/react-grid-layout/examples/0-showcase.html)
1. [Basic](https://strml.github.io/react-grid-layout/examples/1-basic.html)
1. [No Dragging/Resizing (Layout Only)](https://strml.github.io/react-grid-layout/examples/2-no-dragging.html)
1. [Messy Layout Autocorrect](https://strml.github.io/react-grid-layout/examples/3-messy.html)
1. [Layout Defined on Children](https://strml.github.io/react-grid-layout/examples/4-grid-property.html)
1. [Static Elements](https://strml.github.io/react-grid-layout/examples/5-static-elements.html)
1. [Adding/Removing Elements](https://strml.github.io/react-grid-layout/examples/6-dynamic-add-remove.html)
1. [Saving Layout to LocalStorage](https://strml.github.io/react-grid-layout/examples/7-localstorage.html)
1. [Saving a Responsive Layout to LocalStorage](https://strml.github.io/react-grid-layout/examples/8-localstorage-responsive.html)
1. [Minimum and Maximum Width/Height](https://strml.github.io/react-grid-layout/examples/9-min-max-wh.html)
1. [Dynamic Minimum and Maximum Width/Height](https://strml.github.io/react-grid-layout/examples/10-dynamic-min-max-wh.html)
1. [No Vertical Compacting (Free Movement)](https://strml.github.io/react-grid-layout/examples/11-no-vertical-compact.html)

#### Responsive Usage

To make RGL responsive, use the `<ResponsiveReactGridLayout>` element:

```javascript
import {ResponsiveReactGridLayout} from '{universe:react-grid-layout}';
//...
render: function() {
  // {lg: layout1, md: layout2, ...}
  var layouts = getLayoutsFromSomewhere();
  return (
    <ResponsiveReactGridLayout className="layout" layouts={layouts}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
      <div key={1}>1</div>
      <div key={2}>2</div>
      <div key={3}>3</div>
    </ResponsiveReactGridLayout>
  )
}
```

When in responsive mode, you should supply at least one breakpoint via the `layouts` property.

When using `layouts`, it is best to supply as many breakpoints as possible, especially the largest one.
If the largest is provided, RGL will attempt to interpolate the rest.

#### Grid Layout Props

RGL supports the following properties (see the source for the final word on this):

```javascript
//
// Basic props
//

// If true, the container height swells and contracts to fit contents
autoSize: React.PropTypes.bool,

// {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
breakpoints: React.PropTypes.object,

// Number of columns in this layout.
cols: React.PropTypes.number,

// A selector that will not be draggable.
draggableCancel: React.PropTypes.string,
// A selector for the draggable handler
draggableHandle: React.PropTypes.string,

// If true, the layout will compact vertically
verticalCompact: React.PropTypes.bool,

// Layout is an array of object with the format:
// {x: Number, y: Number, w: Number, h: Number}
// The index into the layout must match the key used on each item component.
// If you choose to use custom keys, you can specify that key in the layout
// array objects like so:
// {i: String, x: Number, y: Number, w: Number, h: Number}
layout: React.PropTypes.array,

// This allows setting the initial width on the server side.
initialWidth: React.PropTypes.number,

// Margin between items [x, y] in px.
margin: React.PropTypes.array,

// Rows have a static height, but you can change this based on breakpoints
// if you like.
rowHeight: React.PropTypes.number,

//
// Flags
//
isDraggable: React.PropTypes.bool,
isResizable: React.PropTypes.bool,
// Uses CSS3 translate() instead of position top/left.
// This makes about 6x faster paint performance
useCSSTransforms: React.PropTypes.bool,

// If false, you should supply width yourself. Good if you want to debounce
// resize events or reuse a handler from somewhere else.
listenToWindowResize: React.PropTypes.bool,

//
// Callbacks
//

// Callback so you can save the layout.
// Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
onLayoutChange: React.PropTypes.func,

//
// All callbacks below have signature (layout, oldItem, newItem, placeholder, e).
// 'start' and 'stop' callbacks pass `undefined` for 'placeholder'.
//

// Calls when drag starts.
onDragStart: React.PropTypes.func,
// Calls on each drag movement.
onDrag: React.PropTypes.func,
// Calls when drag is complete.
onDragStop: React.PropTypes.func,
// Calls when resize starts.
onResizeStart: React.PropTypes.func,
// Calls when resize movement happens.
onResize: React.PropTypes.func,
// Calls when resize is complete.
onResizeStop: React.PropTypes.func
```

#### Responsive Grid Layout Props

The responsive grid layout can be used instead. It supports all of the props above, excepting `layout`.
The new properties and changes are:

```javascript
// {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
// Breakpoint names are arbitrary but must match in the cols and layouts objects.
breakpoints: React.PropTypes.object,

// # of cols. This is a breakpoint -> cols map, e.g. {lg: 12, md: 10, ...}
cols: React.PropTypes.object,

// layouts is an object mapping breakpoints to layouts.
// e.g. {lg: Layout, md: Layout, ...}
layouts: React.PropTypes.object

//
// Callbacks
//

// Calls back with breakpoint and new # cols
onBreakpointChange: React.PropTypes.func,

// Callback so you can save the layout.
// Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
onLayoutChange: React.PropTypes.func
```

#### Grid Item Props

RGL supports the following properties on grid items or layout items. When initializing a grid,
build a layout array (as in the first example above), or attach this object as the `_grid` property
to each of your child elements (as in the second example).

Note that if a grid item is provided but incomplete (missing one of `x, y, w, or h`), an error
will be thrown so you can correct your layout.

If no properties are provided for a grid item, one will be generated with a width and height of `1`.

You can set minimums and maximums for each dimension. This is for resizing; it of course has no effect if resizing
is disabled. Errors will be thrown if your mins and maxes overlap incorrectly, or your initial dimensions
are out of range.

Any GridItem properties defined directly on the layout item will take precedence over globally-set options. For
example, if the layout has the property `isDraggable: false`, but the grid item has `isDraggable: true`, the item
will be draggable.

```javascript
{
  // These are all in grid units, not pixels
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  w: React.PropTypes.number.isRequired,
  h: React.PropTypes.number.isRequired,
  minW: React.PropTypes.number,
  maxW: React.PropTypes.number,
  minH: React.PropTypes.number,
  maxH: React.PropTypes.number,

  // If true, equal to `isDraggable: false, isResizable: false`.
  static: React.PropTypes.bool,
  // If false, will not be draggable. Overrides `static`.
  isDraggable: React.PropTypes.bool,
  // If false, will not be resizable. Overrides `static`.
  isResizable: React.PropTypes.bool,

  className: React.PropTypes.string,
  // Selector for draggable handle
  handle: React.PropTypes.string,
  // Selector for draggable cancel (see react-draggable)
  cancel: React.PropTypes.string
}
```

#### Grid Layout Defaults

```javascript
{
  autoSize: true,
  breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
  cols: 10,
  rowHeight: 150,
  initialWidth: 1280,
  margin: [10, 10],
  minH: 1,
  minW: 1,
  maxH: Infinity,
  maxW: Infinity,
  isDraggable: true,
  isResizable: true,
  useCSSTransforms: true,
  listenToWindowResize: true,
  verticalCompact: true
}
```
