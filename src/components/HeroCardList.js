import React, { Component } from 'react';

import HeroCard from './HeroCard';
import api from '../api/api';

class HeroCardList extends Component {
    state = {
        heroList: []
    }

    componentDidMount () {
        api.getMarvelComics().then((heroList) => {
            this.setState({
                heroList
            });   
        });
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 App-header">
                        Marvel Comics
                    </div>
                </div>
                <div className="row">
                {
                    this.state.heroList.length > 0 
                    ?
                    this.state.heroList.map((hero) => (<HeroCard key={hero.id} hero={hero} />))
                    :
                    <h4>Cargando...</h4>
                }
                </div>
            </div>
        );
    }
}

export default HeroCardList;
