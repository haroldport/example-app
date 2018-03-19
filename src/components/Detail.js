import React, { Component } from "react";
import { PUBLIC_KEY_MARVEL, PRIVATE_KEY_MARVEL, getHash } from "../api/api";

import api from "../api/api";

class Detail extends Component {
  state = { hero: null };

  componentDidMount() {
    api.getIndividualCharacter(this.props.match.params.id).then(hero => {
      const firstHero = hero[0];
      this.setState({
        hero: firstHero
      });
    });
  }

  render() {
    const hero = this.state.hero;
    const ts = new Date().getTime();

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 App-header">Marvel Description Character</div>
        </div>
        {hero && (
          <div className="row center">
            <div className="col s4">
              <img
                className="detail-image"
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
              />
            </div>
            <div className="col s8">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{hero.name}</span>
                  <p>{hero.description}</p>
                </div>
                {hero.comics.items.length > 0 && (
                  <div>
                    <h6 className="detail-comic-list">Comics List</h6>
                    <div className="collection">
                      {hero.comics.items.map((comic, idx) => (
                        <a
                          key={idx}
                          href={`${comic.resourceURI}?apikey=${PUBLIC_KEY_MARVEL}&ts=${ts}&hash=${getHash(ts)}&limit=30`}
                          target="_blank"
                          className="collection-item"
                        >
                          <span className="badge" />
                          {comic.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Detail;
