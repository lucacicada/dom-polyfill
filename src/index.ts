import { Document, DOMParser } from './DOM/Document'
import { Headers } from './DOM/Headers'
import 'core-js/actual/url'
import 'core-js/actual/url-search-params'

Object.defineProperties(globalThis, {
  DOMParser: {
    value: DOMParser,
  },
  Document: {
    value: Document,
  },
  Headers: {
    value: Headers,
  },
})
