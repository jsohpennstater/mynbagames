import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NoMatch, AllPlayers, Players, NameMatch} from '../actions/ApiActions'
import PlayerList from '../components/Index/PlayerList'

class PlayersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onSearchTerm = this.onSearchTerm.bind(this);
    this.onPlayerSearch = this.onPlayerSearch.bind(this);
  }

  componentDidMount() {
    this.props.allPlayers();
  }

  onSearchTerm(event) {
    this.setState({ term: event.target.value});
  }

  onPlayerSearch() {
    let name = this.state.term;

    this.props.handleNameMatch(name);
  }

  render() {
    return (
      <div className="PlayersContainer">
        <div className="playersearch input-group">
          <div className="input-group col-md-4 mt-3 mb-3 container">
            <input
             placeholder="Search Player Name ..."
             className="form-control"
             value={this.state.term}
             onChange={this.onSearchTerm}
            />
            <button type="submit"
             className="btn btn-primary"
             onClick={() => this.onPlayerSearch()}
            >
             Search
           </button>
          </div>
        </div>
        <PlayerList
         error={this.props.error}
         playerinfo={this.props.playerinfo}
         players={this.props.players}
        />
      </div>
    )
  }
}

const mapStoreToProps = store => {
  return {
    error: store.errorState,
    playerinfo: store.playerState,
    players: store.allPlayers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    allPlayers: (event) => {
      dispatch(AllPlayers())
    },
    handleNameMatch: (name) => {
      dispatch(NameMatch(name))
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayersContainer);
