import React, {Component} from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default class Hero extends Component{

    state = {
        hero: {}
    }

    componentDidMount(){
        const { id } = this.props.match.params
        this.loadHero(id)
    }

    loadHero = async (id) => {
        const {data, ...requestInfo} = await api.get('heroes');
        const hero = data.filter(hero => (hero.id == id))[0]
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
                <Link to ="/">Voltar</Link>
            </div>
        )
    }
}