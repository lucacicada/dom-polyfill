import { Document, DOMParser, parseHTML } from 'linkedom'

// see: https://developer.mozilla.org/en-US/docs/Web/API/Document/parseHTMLUnsafe_static
Object.defineProperties(Document, {
  parseHTMLUnsafe: {
    value: parseHTML,
  },
})

export { Document, DOMParser }
