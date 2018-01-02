import React from 'react';
import { Embed, Grid, Card, Icon, Loader } from 'semantic-ui-react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <Loader active inline />;
    }
    const title = video.snippet.title;
    const imageUrl = video.snippet.thumbnails.high.url;
    const description = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Grid>
            <Grid.Column width={9}>
            <Embed className="video-custom"
                id={videoId}
                placeholder = {imageUrl}
                source='youtube'
            />
            <Card className="card-custom">
                    <Card.Content>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Description>
                            {description}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )
};

export default VideoDetail;