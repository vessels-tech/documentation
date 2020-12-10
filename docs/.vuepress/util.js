const tree = require('directory-tree');
const path = require('path');


/**
 * @function childrenForPath
 * @description Renders a sidebar for children based on a root path
 *  This is useful for directories which contain many children, 
 *  which is infeasible to maintain in a separate list
 * @param {string} rootPath - The root path to start rendering from
 */
function childrenForPath(rootPath) {
  // iterare through dirs, build out
  // TODO: clean up
  // console.log('rendering path ', rootPath)
  const fullRootPath = path.join(__dirname, '../../docs', rootPath)
  // console.log('rendering children ', fullRootPath)

  const children = tree(fullRootPath, { extensions: /\.md/ }).children
    .filter(child => child.name.toLowerCase() !== 'readme.md')
    .filter(thing => thing.name !== 'assets')

  // console.log('children', children)

  const rendered = children
    .map(child => {
      return {
        path: `${path.join(rootPath, child.name)}/`,
        title: child.name,
        sidebarDepth: 0,
        children: child.children
          .filter(thing => thing.name !== 'README.md')
          .filter(thing => thing.name !== 'assets')
          .map(grandChild => childrenForChildren(path.join(rootPath, child.name), grandChild))
      }
    })


  return rendered;
}

function childrenForChildren(rootPath, grandChild) {
  if (!grandChild) {
    return null;
  }

  // console.log("getting grandchildren", grandChild)
  let children
  if (grandChild.children) {
    const filteredChildren = grandChild.children
      .filter(thing => thing.name !== 'README.md')
      .filter(thing => thing.name !== 'assets')
    if (filteredChildren.length > 0) {
      children = filteredChildren
        .map(greatGrandChild => childrenForChildren(`${rootPath}/${grandChild.name}`, greatGrandChild))
    }
  }

  let hasChildReadmeMD = false
  if (grandChild.children && grandChild.children.filter(child => child.name.toLowerCase() === 'readme.md').length > 0) {
    hasChildReadmeMD = true
  }

  return {
    // TODO: when to put trailing slash?...
    // tx-req-service needs it, but sdk-scheme-adapter doesn't
    // a folder with a readme NEEDS a slash
    // a single filename needs to NOT have a slash
    path: `${path.join(rootPath, grandChild.name.replace('.md', ''))}${hasChildReadmeMD ? '/' : ''}`,
    title: grandChild.name.replace('.md', ''),
    sidebarDepth: 0,
    children
  }
}


module.exports = {
  childrenForChildren,
  childrenForPath
}