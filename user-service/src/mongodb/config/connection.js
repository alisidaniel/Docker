const mongoose = require('mongoose');

import accessEnv from "#root/helpers/accessEnv";

const url = accessEnv("DB_URI");

const connection = mongoose.connect(url).then(() =>{ console.log('user mongo connected...')})
.catch(e => {console.log('User microservice mongo connection failure '+ e)});

export default connection;