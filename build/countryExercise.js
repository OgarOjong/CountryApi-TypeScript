"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
/** Use Axios to get data from restcountries api */
const axios_1 = __importDefault(require("axios"));
/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */
/** Create getCountry Function here */
function getCountry(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getApi = yield axios_1.default.get(`http://api.countrylayer.com/v2/name/${name}?access_key=b3d08680ff67d780b7b8987c04c22116`);
            const countryData = getApi["data"];
            // return countryData[0];
            //console.log(countryData[0]);
            const result = countryData[0];
            const result2 = {
                capital: result.capital,
                alpha3Code: result.alpha3Code,
                region: result.region
            };
            console.log(result2);
            return result2;
        }
        catch (err) {
            console.log(err);
        }
    });
}
getCountry("Nigeria");
/** Create a test for this getRegion function */
function getRegionCountries(regionalbloc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getApi = yield axios_1.default.get(`http://api.countrylayer.com/v2/regionalbloc/${regionalbloc}?access_key=b3d08680ff67d780b7b8987c04c22116`);
            // eslint-disable-next-line quotes
            const result = getApi['data'];
            const countries = [];
            for (let i = 0; i < result.length; i++) {
                countries.push(result[i].name);
            }
            //console.log(countries);
            return countries;
        }
        catch (err) {
            console.log(err);
        }
    });
}
//getRegionCountries("EU");
/** Create getRegionCapitals function here
 * Promise<array | string>
 const cut3 = (arr: (string|number)[]):(string | number)[]
 : unknown
 According to Lexico, a promise, in the English language,
 is “a declaration or assurance that one will do a particular thing or that a particular thing will happen.”
In JavaScript, a promise refers to the expectation that something will happen at a particular time,
 and your app relies on the result of that future event to perform certain other tasks.
 */
/*const getRegionCapitals = async (capital:string) :Promise<(string | number)[]>  =>{
    try{
        const getApi = await axios.get(`http://api.countrylayer.com/v2/capital/${capital}?access_key=38216f107d32fa6560b98f1cb51d7719`);
        const result = getApi["data"];
        console.log(result);
        return result;
 
    }catch(error){
       //console.error(error);
      // throw new Error(err);
       
    }
}; */
function getRegionCapitals(capital) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchApi = yield axios_1.default.get(`http://api.countrylayer.com/v2/capital/${capital}?access_key=b3d08680ff67d780b7b8987c04c22116`);
            const result = fetchApi["data"];
            //console.log(result);
            return result[0];
        }
        catch (err) {
            console.log(err);
        }
    });
}
// eslint-disable-next-line quotes
//getRegionCapitals('Ottawa');
exports.default = {
    getCountry,
    getRegionCountries,
    getRegionCapitals
};
