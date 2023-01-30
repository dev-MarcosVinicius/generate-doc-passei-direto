const fs = require("fs");

async function getAllString() {
    const totalPages = 36; // Total de paginas do documento
    const documentId = "6b0c8ad4-9b04-4af9-9a2a-e7db84267ef1";
    const createStream = fs.createWriteStream("arquitetura_de_software.txt");
    let count = 1;

    while (count <= totalPages) {
        const response = await fetch(`https://files.passeidireto.com/${documentId}/${count}.html`)
        const string = await response.text();
        const stringFormated = string.replaceAll(/<[^>]*>/g, "");
        createStream.write(stringFormated);

        count++;
    }

    createStream.end();
}

getAllString();