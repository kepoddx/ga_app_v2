import * as path from 'path'
import { of } from 'rxjs'
import { saveJson$ } from '../../utils';
import { getConfig$ } from '../../config';
import { switchMap } from 'rxjs/operators';

const platform = 'facebook'
const accountsFile = path.join(process.cwd(), 'data', platform, `${platform}.accounts.json`)

export function getAccountsFile$() {
    const accounts = require(accountsFile)
    return of(accounts)
}

export function saveAccountsToFile$(accounts) {
    return saveJson$(accountsFile, accounts)
}

export function filterAccounts$(accounts) {
    return getConfig$(platform)
        .pipe(
            switchMap(({accountsFilter}) => {
                let parts = /\/(.*)\/(.*)/.exec(accountsFilter)
                let reg = new RegExp(parts[1], parts[2])
                let filteredAccounts = accounts.filter(account => (reg.test(account.name) != true))
                return of(filteredAccounts)
            })
        )
}


