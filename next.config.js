const regions = require('./regions.json')

// create path map
let pathMap = {
  '/': { page: '/region', query: { id: 'apac' } },
  '/admin': { page: '/admin' }
}
regions.forEach(region => {
  pathMap[`/${region.id}`] = { page: '/region', query: { id: region.id } }
  if (region.cities) {
    region.cities.forEach(city => {
      pathMap[`/${region.id}/${city.id}`] = { page: '/city', query: { id: city.id } }
    })
  }
})

// console.log(pathMap)

// exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {}

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async () => {
    return pathMap
  }
}