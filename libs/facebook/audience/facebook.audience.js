import axios from 'axios'
import { from,  of } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

const access_token = 'EAAFlOVB8mIABAAbpMYLaSDPb0eL7cqrpCdQZAujPRWMWfGgbAsRjmwgkvpSw5Jbewy8mAfvqI9ZAsZChi434CE0JYJD2CQ1zLAtZB5buzZCFvNg8juElaCTu9Cb1BEYDIZA3XFYI9HZCLVtvpSNXoIP5w0Ts8rLyoER4SmPSRhBEEVvYzBwf8RD';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("Called", config.url)
    console.log("Params", config.params)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  axios.defaults.baseURL = 'https://graph.facebook.com/v3.2';
  axios.defaults.params = {};
  axios.defaults.params['access_token'] = access_token;
  axios.defaults.params['customer_file_source'] = "USER_PROVIDED_ONLY"
  axios.defaults.params['subtype'] = "CUSTOM";

export function createAudience$(account_id, config){
    const params = Object.assign({}, config)
    return from(axios.post(`${account_id}/customaudiences`, null, { params: params })) 
        .pipe(
            map( res => res.data),
            catchError(err => of({status: err.response.status, data: err.response.data, headers: err.response.headers}))
        )
}

export function addToAudience(users) {

}