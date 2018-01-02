import React from 'react';
import { Grid, Card, Icon, Loader } from 'semantic-ui-react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <Loader active inline />;
    }
    const title = video.snippet.title;
    const description = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Grid>
            <Grid.Column width={9}>
                <Card className="card-custom">
                    <iframe className="" src={url}></iframe>
                    <Card.Content>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Meta>
                            <span className='date'>
                                Joined in 2015
                    </span>
                        </Card.Meta>
                        <Card.Description>
                            {description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='heart' />
                            22 Likes
                </a>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )
};

export default VideoDetail;