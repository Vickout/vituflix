import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryImage = category.img;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <img style={{ height: '45px'}} src={categoryImage} alt="Ícone"/>
          <Title style={{ color: categoryColor }}>
            {categoryTitle}
          </Title>
          <div style={{ height: '3px', background: categoryColor }} />
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
