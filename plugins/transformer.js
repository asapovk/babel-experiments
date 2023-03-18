const pathNode = require('node:path');

const md5 = require('md5');


const BabelISSRPlugin = (api) => {
  const t = api.types;

  return {
    name: 'unique-key',
    visitor: {
      CallExpression(path, { opts: options, file }) {
        const { filename, cwd } = file.opts;

        
          if (path.node.callee.name === 'div') {
            if (path.node.arguments.length === 0) {
              const id = md5(pathNode.relative(cwd, filename));
              console.log(`id div ${id}`)
              //createDummy(globalCache, id, 'useRegisterEffect');
              //const effectID = `register-effect-${id}-${globalCache[id].useRegisterEffect++}`;
              path.node.arguments.push(t.StringLiteral(id));
            }
          }
      },
    },
  };
};

module.exports = BabelISSRPlugin;