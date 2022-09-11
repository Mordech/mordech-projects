import React, { FC } from 'react';
import welcomeVideoWebM from '../../videos/welcomeVideo.webm';
import welcomeVideoMp4 from '../../videos/welcomeVideo.mp4';
import welcomeVideoPoster from '../../images/welcomeVideo.png';
import styled from 'styled-components';

export const Video = styled.video`
  align-self: center;
  justify-self: center;
  max-width: 530px;
  width: 100%;
`;

export const WelcomeVideo: FC = () => (
  <Video
    disablePictureInPicture
    disableRemotePlayback
    autoPlay
    muted
    loop
    poster={welcomeVideoPoster}
  >
    <source src={welcomeVideoWebM} type="video/webm" />
    <source src={welcomeVideoMp4} type="video/mp4" />
  </Video>
);
