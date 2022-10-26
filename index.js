import fs from 'fs';

const folders = ['src', 'docker', 'scripts', 'src/libs', 'src/models', 'src/services', 'src/controllers'];
const files = {
    './files/.gitignore': '.gitignore',
    './files/.env': '.env',
    './files/docker/docker-compose.yml': './docker/docker-compose.yml',
    './files/scripts/dcTool': './scripts/dcTool',
    './files/scripts/kill.sh': './scripts/kill.sh',
    './files/scripts/restart.sh': './scripts/restart.sh',
    './files/scripts/start.sh': './scripts/start.sh',
    './files/scripts/startWithConsole.sh': './scripts/startWithConsole.sh',
    './files/scripts/stop.sh': './scripts/stop.sh',
    './files/libs/colors.js': './src/libs/colors.js'
};

function createFolder(path) {
    try {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
            console.log(`Folder : ${path} was created !`);
        }
    } catch (err) {
        console.error(err);
    }
}

function createFile(path, dest) {
    fs.copyFile(`${path}`, `${dest}`, (err) => {
        if (err) throw err;
        console.log(`File : ${dest} was created !`);
    });
}

folders.forEach(folder => {
    createFolder(folder);
});

Object.values(files).forEach((dest, key) => {
    let path = Object.keys(files)[key];
    createFile(path, dest);
});