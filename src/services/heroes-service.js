import React from 'react';
import Api from './api'
import HeroesData from '../locals/heroes.json'

export default class HeroesService {
    api = new Api

    getHeroImage(hero){
        return "https://api.opendota.com/apps/dota2/images/heroes/"+hero.localized_name.toLowerCase()+"_full.png"
    }

    getHero = (id) => {
        /*
        api
        const {data, ...requestInfo} = await this.api.request('heroes');
        const hero = data.filter(hero => (hero.id == id))[0]
        hero.image = this.getHeroImage(hero)*/

        //local file
        return HeroesData.filter(hero => hero.id == id)[0]
    }

    getAll(){
        return HeroesData
    }
}