import React, { FC } from 'react';
import styled from 'styled-components';

import welcomeVideoPoster from '../../images/welcomeVideo.png';
import welcomeVideoMp4 from '../../videos/welcomeVideo.mp4';
import welcomeVideoWebM from '../../videos/welcomeVideo.webm';

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
    <source src={welcomeVideoWebM} type="video/webm;codecs=hvc1" />
    <source src={welcomeVideoMp4} type="video/mp4" />
  </Video>
);
