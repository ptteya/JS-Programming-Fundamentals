function extractFile(path) {
    let fileIndex = path.lastIndexOf("\\");
    let file = path.substring(fileIndex + 1);

    let index = file.lastIndexOf(".");
    let fileName = file.substring(0, index);
    let extension = file.substring(index + 1);

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');