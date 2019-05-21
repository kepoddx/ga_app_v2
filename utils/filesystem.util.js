import * as fse from 'fs-extra'

import { bindCallback } from 'rxjs'
import { map } from 'rxjs/operators'

import jsonfile from 'jsonfile'


export const exists$ = bindCallback(fse.pathExists)


const saveJsonFile$ = bindCallback(jsonfile.writeFile)

export function saveJson$(file, data) {
    return saveJsonFile$(file, data)
        .pipe(
            map(result => {
                if(result === null) return file
            })
        )
}