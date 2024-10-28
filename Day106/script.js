const fs = require("fs");
const path = require("path");

const todayFolder = `./${new Date().toISOString().slice(0, 10)}`;
if (!fs.existsSync(todayFolder)) {
    fs.mkdirSync(todayFolder);
}

const level101Folder = path.join(todayFolder, "level101");
const classworkFolder = path.join(level101Folder, "classwork");
const homeworkFolder = path.join(level101Folder, "homework");

fs.mkdirSync(classworkFolder, { recursive: true });
fs.writeFileSync(path.join(classworkFolder, "file.txt"), "Classwork file content");

fs.mkdirSync(homeworkFolder, { recursive: true });
fs.writeFileSync(path.join(homeworkFolder, "file.txt"), "Homework file content");

for (let i = 1; i <= 10; i++) {
    const levelFolder = `level${100 + i}`;
    const currentLevelPath = path.join(todayFolder, levelFolder);

    fs.mkdirSync(path.join(currentLevelPath, "classwork"), { recursive: true });
    fs.writeFileSync(path.join(currentLevelPath, "classwork", "file.txt"), `Classwork content for ${levelFolder}`);

    fs.mkdirSync(path.join(currentLevelPath, "homework"), { recursive: true });
    fs.writeFileSync(path.join(currentLevelPath, "homework", "file.txt"), `Homework content for ${levelFolder}`);
}

for (let i = 1; i <= 10; i++) {
    const levelFolder = `level${100 + i}`;
    const currentLevelPath = path.join(todayFolder, levelFolder);

    if (fs.existsSync(currentLevelPath)) {
        fs.rmdirSync(currentLevelPath, { recursive: true });
    }
}

for (let i = 2; i <= 20; i += 2) {
    const evenFolder = path.join(todayFolder, `level${i}`);
    fs.mkdirSync(evenFolder, { recursive: true });

    for (let j = 1; j <= 20; j++) {
        const fileName = `task${j}.txt`;
        const filePath = path.join(evenFolder, fileName);
        fs.writeFileSync(filePath, `Homework ${j}`);
    }
}
