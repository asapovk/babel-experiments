
function hello() {
    const tree = {
        div: () => {
            return {
                value: 12
            }
        },
        lobj: {
            tag: () => {
                console.log('Hello city');
            }
        }
    } 
    tree.div(10).value;
    tree.div(10).value;
    tree.div(10).value;
    tree.div(10).value;
    tree.div(10).value;
    //tree.lobj.tag(12);
}