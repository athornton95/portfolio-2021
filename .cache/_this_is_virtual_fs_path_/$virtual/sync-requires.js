
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/alexhopkins/Github/personal/portfolio-2021/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/alexhopkins/Github/personal/portfolio-2021/src/pages/index.js"))
}

