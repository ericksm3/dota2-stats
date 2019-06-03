import React from 'react';
import Api from './api'

export default class HeroesService {
    api = new Api

    getMatches = async (id) => {
        const {data, ...requestInfo} = await this.api.request('players/'+this.api.player+'/matches?limit=10');
        return data
    }
}