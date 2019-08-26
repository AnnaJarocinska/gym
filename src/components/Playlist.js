import React,{Component} from 'react';
 
import '../style/Playlist.css';


const API = 'https://randomuser.me/api/?results=2'
                                                                                                                                                                                                                                                                  
class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
         };
    }

componentDidMount(){
    fetch(API)
    .then(results =>{
        return results.json();
    }).then(data =>{
        let songs = data.results.map((song) => {
            return(
                <div className="playlist" key={song.name.last}>
                <p>
                    {song.name.last}
                </p>
                </div>
            )
        }
        )
        this.setState({songs: songs});
    })
    
}


    render() { 
        return ( 
            <div>
                {this.state.songs}
            </div>
         );
    }
}
 
export default Playlist;