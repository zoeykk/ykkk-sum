const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'ykkk-sum.js',
        library: {
            name: 'ykkkSum',
            type: 'umd',
        },
        globalObject: 'this',
    }
}