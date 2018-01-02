import React from 'react';
import { List, Image } from 'semantic-ui-react';

const VideoListItem = ({ video }) => {
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <List.Item>
            <Image className="media-object" src={imageUrl} />
            <List.Content>
                <List.Header as='a' className="media-heading">{ title }</List.Header>
                <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
            </List.Content>
        </List.Item>
    )
}

export default VideoListItem;