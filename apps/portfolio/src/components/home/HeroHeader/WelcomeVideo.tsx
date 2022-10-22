import React, { FC } from 'react';
import styled from 'styled-components';

import welcomeVideoPoster from '../../../images/welcomeVideo.png';
import welcomeVideoMp4 from '../../../videos/welcomeVideo.mp4';
import welcomeVideoWebM from '../../../videos/welcomeVideo.webm';

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
    playsInline
    autoPlay
    muted
    loop
    poster={welcomeVideoPoster}
  >
    <source src={welcomeVideoMp4} type="video/mp4" />
    <source src={welcomeVideoWebM} type="video/webm;codecs=vp9" />
  </Video>
);
