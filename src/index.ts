import { Document, DOMParser } from './DOM/Document'
import { Headers } from './DOM/Headers'
import { URL, URLSearchParams } from './DOM/URL'

Object.defineProperties(globalThis, {
  DOMParser: {
    value: DOMParser,
  },
  Document: {
    value: Document,
  },
  URL: {
    value: URL,
  },
  URLSearchParams: {
    value: URLSearchParams,
  },
  Headers: {
    value: Headers,
  },
})
