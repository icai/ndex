const fs = require('fs');
const glob = require("glob");
const rpath = require('path');
const {
    condense,
    treeFromPaths
} = require('tree-from-paths');

let tmplPath = './tmpl';

const writeFileSync = function (filepath, contents, options = {}) {
    try {
        fs.writeFileSync(filepath, contents, 'mode' in options ? {
            mode: options.mode
        } : {});
    } catch (err) {
        throw err;
    }
}

/**
 * @name ndex
 * @param path the path of directory
 * @param ext ext name of file
 * @param ignore some ignore files
 */
const ndex = (path, ext = "*", ignore = false) => {
    let TmplMed;
    if (typeof tmplPath === 'string') {
        try {
            require.resolve(tmplPath);
        } catch (err) {
            console.error('Attempted to find template function "' + tmplPath + '" but could not.');
            console.error('Please verify you have installed "' + tmplPath + '" and saved it to your `package.json`');
            console.error('');
            console.error('    npm install ' + tmplPath + ' --save-dev');
            console.error('');
            throw err;
        }
        try {
            TmplMed = require(tmplPath);
            if (typeof TmplMed !== 'function') {
                throw err;
            }
        } catch (err) {
            console.error('Attempted to load template function "' + tmplPath + '" but could not.');
            console.error('Please verify you have installed its dependencies.');
            throw err;
        }
    }
    let data = glob.sync('**/*.' + ext, {
        cwd: rpath.resolve(process.cwd(), path),
        ignore
    });
    const treeData = ndex.renderData(data,
        '',
        (parent, file, explicit) => {
            return `<a href='${parent}${file}'>${file}</a>`
        }
    )
    writeFileSync(`${path}/index.html`, TmplMed(data, treeData, path))
}


ndex.config = (template) => {
    if (template) {
        tmplPath = template
    }
}
ndex.reset = () => {
    tmplPath = './tmpl';
}
ndex.glob = glob;
ndex.treeFromPaths = treeFromPaths;
ndex.renderData = function render(files, baseDir, renderLabelFn, options = {}) {
    baseDir = baseDir.replace(/\/$/, '/')
    const strippedFiles = files.map(file => {
        /* istanbul ignore else: Else-case should never happen */
        if (file.lastIndexOf(baseDir, 0) === 0) {
            return file.substr(baseDir.length)
        }
        /* istanbul ignore next: Should never happen */
        throw new Error('Basedir ' + baseDir + ' must be a prefix of ' + file)
    })
    const rootNode = treeFromPaths(strippedFiles, baseDir, renderLabelFn, options)
    return condensed = condense(rootNode)
};

module.exports = ndex;
