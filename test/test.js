const ndex = require('../index');
const assert = require('assert');
const {
    describe,
    it
} = require('mocha');
const fs = require('fs');
const path = require('path');
const getPath = (url) => {
    return path.resolve(__dirname, url);
}
const deleteIndex = () => {
    fs.unlinkSync(getPath('./index.html'));
}

const readFile = (filename) => {
    return fs.readFileSync(getPath(filename), 'utf8');
}

const currentPath = getPath('./')

describe('generate', function () {
    it('generate index.html', (done) => {
        ndex(currentPath, 'html');
        try {
            require.resolve('./index.html');
            done()
            deleteIndex();
        } catch (e) {
            done(e)
        }
    })

    it('custom template for index.html', (done) => {
        ndex.config(getPath('./newtemp.js'));
        ndex(currentPath, 'html');
        try {
            let html = readFile('./index.html');
            assert.ok(html.indexOf('TestMM') > 0)
            ndex.reset();
            done()
            deleteIndex();
        } catch (e) {
            done(e)
        }
    })
})