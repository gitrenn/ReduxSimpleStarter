import React from 'react';
import { List, Image, Segment } from 'semantic-ui-react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    const description = video.snippet.description.slice(0, 50);

    return (

        <Segment attached='bottom'>
            <List>
                <List.Item onClick={(() => onVideoSelect(video))} >
                    <Image className="media-object" src={imageUrl} />
                    <List.Content>
                        <List.Header as='a' className="media-heading">{title}</List.Header>
                        <List.Description>{description}</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Segment>
    )
}

export default VideoListItem;