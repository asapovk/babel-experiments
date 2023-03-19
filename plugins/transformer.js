const pathNode = require('node:path');

const md5 = require('md5');


const BabelISSRPlugin = (api) => {
  let count= 0;
  const t = api.types;
  return {
    name: 'unique-key',
    visitor: {
      CallExpression(path, { opts: options, file }) {
        const { filename, cwd } = file.opts;
        // console.log(path)
        console.log(path.node);
        console.log('NEXT');
        count++
        console.log(count)
            if(path.node.callee.object.name === 'tree') {
                if(path.node.callee.property.name === 'div') {
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