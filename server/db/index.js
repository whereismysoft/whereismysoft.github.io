const fs = require('fs')
const path = require('path')

const statFile = path.resolve('performance-stats.json')

class DataBase {
    constructor() {

    }

    init() {
        if (!fs.existsSync(statFile)) {
            fs.writeFile(statFile, JSON.stringify([]), () => console.log('[db created]'))
        }
    }

    add(values) {
        // читаем файл --> конкатенируем значения --> записываем
        fs.readFile(statFile, 'utf8', (err, data) => {
            const value = [...JSON.parse(data), ...values]
            fs.writeFile(
                statFile,
                JSON.stringify(value),
                (writeFileError) => {
                    if (writeFileError) {
                        console.log('[writeFileError]', writeFileError)
                    }
                }
            )
        })
    }
}

module.exports = {
    DataBase: new DataBase()
}