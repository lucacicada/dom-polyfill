import { DOMParser } from './DOM/DOMParser'
import { Headers } from './DOM/Headers'
import 'core-js/actual/url'
import 'core-js/actual/url-search-params'

Object.defineProperties(globalThis, {
  DOMParser: {
    value: DOMParser,
  },
  Headers: {
    value: Headers,
  },
})
