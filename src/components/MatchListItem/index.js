import React, {Component} from 'react';
import './style.scss';
import { Link } from 'react-router-dom'
import HeroesService from '../../services/heroes-service';

class MatchListItem extends Component {
    heroesService = new HeroesService
    match = this.props.match
    hero = this.heroesService.getHero(this.match.hero_id)

    componentDidMount(){

    }
    
    render (){
        return (
            <div className="match">
                <Link to={'/hero/'+this.match.hero_id}><img src={this.hero.image}></img></Link>
                <div className="matchContent">
                    <div className="matchInfo">
                        <h2>{this.hero.localized_name}</h2>
                        <p>{this.match.radiant_win ? "Radiant" : "Dire"} win</p>
                    </div>
                    <div className="kda">
                        <label className="k">{this.match.kills}</label>/
                        <label className="d">{this.match.deaths}</label>/
                        <label className="a">{this.match.assists}</label>
                    </div>
                </div>
            </div>
        
        )
        
    }
}

export default MatchListItem;