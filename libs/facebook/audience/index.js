/**
 * Create Audience
 */
import * as fse from 'fs-extra'
import * as fs from 'fs'
import * as path from 'path'

import axios from 'axios'
import sha256 from 'simple-sha256'

import { bindCallback } from "rxjs";

import { createAudience$ } from './facebook.audience'
import { switchMap } from 'rxjs/operators';

const sites = require('../testdata/fbaccounts.json')

const readDir$ = bindCallback(fs.readdir)
const dataFiles = path.join(process.cwd(), 'libs', 'facebook', 'testdata', 'email')
 /**
  * @fields
  */
 const params = {
     name: "", 
     subtype: "", // formers, etc...
     description: "",
     ccustomer_file_source: "USER_PROVIDED_ONLY", //
     access_token: ""
 }

 const paywallConvertersAd = {
    campaignName: 'AG Paywall Converters',
    audiences: {
        include: ['Paywall Converters'],
        exclude: ['Active_FA', 'Active_DO']
    },
    budget: "75",
    schedule: {
        from: {
            time: 7,
            hours: 'am'
        },
        to: {
            time: 9,
            hours: 'pm'
        }
    },
    age: {
        from: '21',
        to: '65+'
    },
    placements: {
        facebook: ['Feeds'],
        instagram: [],
        audienceNetwork: []
    },
    blockList: ['USATN FB Ad Exclusions_2.9.18'],
    optimization: 'Landing Page Views',
    headline: "Keep reading and support local journalism.",
    text: "Staying connected, informed, and involved in the community is a purpose, a passion, and a big part of why we’d like you to support local journalism.  Click Learn More below to unlock exclusive and unlimited access to fdlreporter.com.",
    websiteUrl: "",
    conversionTracking: "Facebook Pixel",
    imageLink: "assets/facebook/Paywall Converter.png"
 }
 /**
  * Hash sha256(<string>)
  */

//   readDir$(dataFiles) 
//     .pipe(
//         map(files => files[1].filter(fileName => fileName.indexof(paywallConvertersAd.audiences.exclude)))
//     )
//     .subscribe(files => console.log(files))

const accId = "act_10154131483275667";
const listUploadDate = "3.5.19";
const audienceName = {
    name: `AG Paywall Converters Exclusions ${listUploadDate}`,
    description: "Paywall Converters Exclude from Ad"
};

// createAudience$(accId, audienceName)
// .pipe(
//     switchMap(({id}) => )
// )
// .subscribe(res => console.log(res))

const audienceId = "23843220233570182";