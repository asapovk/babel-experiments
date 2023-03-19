const pathNode = require('node:path');



const BabelISSRPlugin = (api) => {
  let names = [];
  const t = api.types;
  return {
    name: 'find-component',
    visitor: {
      VariableDeclarator(path, { opts: options, file }) {
            names.push(path.node.id.name)
            console.log(names)
      },
    },
  };
};

module.exports = BabelISSRPlugin;