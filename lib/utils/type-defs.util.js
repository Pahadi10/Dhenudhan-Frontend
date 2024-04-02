/** @typedef {import('react-query/types/react/types').UseInfiniteQueryResult} InfiniteQueryResult */
/** @typedef {import('@types/react').MutableRefObject} MutableRefObject */

/**
 * @typedef {Object} StaticContent This is used to inject the css and other static content into the page.
 * @property {string[]} css - An array of all the css content to be injected
 * */

/**
 * Use this to define the type of the props of a component styles.
 * @typedef {import('@mui/system/styleFunctionSx/styleFunctionSx').SxProps} SxProps
 * @typedef {Record<string, SxProps>} Styles
 */

/**
 * Components override used in the Material UI theme.
 * @typedef {import('@mui/material/styles/components').Components} MuiComponents
 */

/**
 * Intrinsic and viewable of dimensions a video element
 * @typedef {Object} VideoElementOffsets
 * @property {!number} videoWidth The intrinsic width of a video element playback area.
 * @property {!number} videoHeight The intrinsic height of a video element playback area.
 * @property {!number} offsetWidth The viewable width of a video element.
 * @property {!number} offsetHeight The viewable height of a video element.
 */

/** @typedef {{ videoWidth: number, videoHeight: number, offsetWidth: number, offsetHeight: number }} Offsets */

/**
 * The inset of the frame size area.
 * @typedef {Object} FrameSizeInset
 * @property {number} TOP The top position of the frame.
 * @property {number} LEFT The left position of the frame.
 * @property {number} RIGHT The right position of the frame.
 * @property {number} BOTTOM The bottom position of the frame.
 */

/**
 * @callback captureCallback
 * @param {string} photo The URL of the cropped image.
 */
