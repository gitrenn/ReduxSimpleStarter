import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBlsDKSEnADH6MFN6rhFZQNfJuN-ceK99k';


// create a new component 
class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'gift giving'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}
    


// render the component on the page we want
ReactDOM.render(<App />, document.querySelector('.container'));