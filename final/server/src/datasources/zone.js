const { DataSource } = require('apollo-datasource');

class ZoneAPI extends DataSource{

    constructor() {
        super();
    }

    async zoneData(key, dictionary) {
        console.log(dictionary, key);
        const keyValuePair = dictionary.find(element=> element.key===key);
        if(keyValuePair==undefined){
            return null;
        }
        const name= this.getName(keyValuePair);
        const property= this.getProperty(keyValuePair);
        if(property==="propA"){
            return{name:name, propA:keyValuePair.value.property};
        }
        if(property==="propB"){
            return{name:name, propB:keyValuePair.value.property};
        }
        return null;
    }

    getName(keyValuePair){
        return keyValuePair.value.name;
    }
    getProperty(keyValuePair){
        return keyValuePair.value.property;
    }


}

module.exports = ZoneAPI;

