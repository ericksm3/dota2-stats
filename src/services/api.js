import axios from 'axios';

export default class Api {

    player = '101652767'

    request = axios.create({
        baseURL: 'https://api.opendota.com/api/'
    })
}
