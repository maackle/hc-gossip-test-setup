const mergeYaml = require('merge-yaml-cli')
const fs = require('fs');

const path = process.argv[2];

if (!fs.existsSync(path)) {
    throw `input '${path}' does not exist`
}

const result = mergeYaml.merge([path, 'overlay.yaml'])

fs.writeFileSync(path, result)