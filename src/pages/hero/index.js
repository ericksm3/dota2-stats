import React, {Component} from 'react';
import HeroesService from '../../services/heroes-service'
import { Link } from 'react-router-dom'

export default class Hero extends Component{
    heroesApi = new HeroesService
    state = {
        hero: {}
    }

    componentDidMount(){
        const { id } = this.props.match.params
        this.loadHero(id)
    }

    loadHero = async (id) => {
        const hero = await this.heroesApi.getHero(id)
        console.log(hero)
        this.setState({
            hero
        })
    }

    render(){
        const {hero} = this.state;
        return (
            <div>
                <h1>{hero.localized_name}</h1>
                <img src={hero.image}></img>
                <Link to ="/">Voltar</Link>
            </div>
        )
    }
}