import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'

export default class Main extends Component {
    state = {
        matches: [],
        requestInfo: []
    }

    componentDidMount(){
        this.loadMatches();
    }

    loadMatches = async () => {
        const response = await api.get('players/101652767/matches?limit=10');
        const { data, ...requestInfo } = response

        console.log(response)
        console.log(data)
        console.log(requestInfo)
        this.setState({
            matches: response.data,
            requestInfo
        })
    };

    getWinner = (radiant_win) => (
        radiant_win ? "Radiant" : "Dire"
    )

    render (){
        return (
            <div className="matches">
                {this.state.matches.map(match => (
                    <div className="match" key={match.match_id}>
                        <h2>Match id: {match.match_id}</h2>
                        <p>{this.getWinner(match.radiant_win)} win</p>
                        <Link to={'/hero/'+match.hero_id}>Abrir Hero Jogado {match.hero_id}</Link>
                    </div>
                ))}
            </div>
        )
    }
}