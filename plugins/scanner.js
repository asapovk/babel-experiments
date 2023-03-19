const pathNode = require('node:path');



const BabelISSRPlugin = (api) => {
  let count= 0;
  const t = api.types;
  return {
    name: 'find-component',
    visitor: {
        VariableDeclaration(path, { opts: options, file }) {
            console.log(path.node)
      },
    },
  };
};

module.exports = BabelISSRPlugin;