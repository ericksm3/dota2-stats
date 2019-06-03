import React, {Component} from 'react';
import MatchesService from '../../services/matches-service';
import HeroesService from '../../services/heroes-service';
import MatchListItem from '../../components/MatchListItem';

export default class Main extends Component {

    matchesService = new MatchesService
    heroesService = new HeroesService

    state = {
        matches: []
    }

    componentDidMount(){
        //this.renderHeroesJson()
        this.loadMatches();
    }

    loadMatches = async () => {
        const matches = await this.matchesService.getMatches();
        console.log(matches)

        this.setState({
            matches
        })
    };

    render (){
        return (
            <div className="matches">
                {this.state.matches.map(match => (
                    <MatchListItem key={match.match_id} match={match} />
                ))}
            </div>
        )
    }

    renderHeroesJson(){
        //to do
        let heroes = this.heroesService.getAll().map(function(hero){
            hero.image = "https://api.opendota.com/apps/dota2/images/heroes/"+hero.localized_name.toLowerCase().replace(' ', '_')+"_full.png"
            return hero
        })

        console.log(JSON.stringify(heroes))
    }
}