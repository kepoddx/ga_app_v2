import { createReadStream, createWriteStream } from 'fs'
import { Transform } from 'stream'
import * as path from 'path'


export function getFile(filePath) {
    let file = path.join(process.cwd(), filePath)
    return createReadStream(file)
}