import styled from '@emotion/styled';

interface ImageProps {
  imageSrc?: string;
  imageSrcRetina?: string;
  imageAlt?: string;
  imageAsBg?: boolean;
}

export default function Image(
  {
    imageSrc = '',
    imageSrcRetina = '',
    imageAlt = '',
    imageAsBg = false,
  }: ImageProps ) {

  const IMG = styled.img({
    objectFit: 'cover',
    width: 'inherit',
    height: 'inherit'
  });

  const Picture = styled.picture(
    {
      height: 'inherit',
      width: 'inherit',
      display: 'block',
      overflow: 'hidden'
    },
    {
      '&.section__image--bg' : {
        position: 'absolute',
      }
    }
   
  );

  const imageSet = `${imageSrc} 1x, ${imageSrcRetina} 2x`;
  const imageUrl = `${imageSrc}`;

  return (
    <Picture className={['section__image', imageAsBg ? 'section__image--bg' : ''].join(' ')}>
      <source srcSet={imageSet} type="image/webp" />
      <IMG src={imageUrl} alt={imageAlt} />
    </Picture>
  );
};
