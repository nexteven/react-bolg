switch (process.env.NODE_ENV) {
    case 'development':
        module.exports = require('./webpack.dev.js');
        break;

    case 'production':
        module.exports = require('./webpack.prod.js');
        break;

    default:
        module.exports = require('./webpack.prod.js');
}
