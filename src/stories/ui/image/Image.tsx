import styled from '@emotion/styled';

interface ImageProps {
  imageSrc?: string;
  imageSrcRetina?: string;
  imageAlt?: string;
}

const Image = ({
  imageSrc = '',
  imageSrcRetina = '',
  imageAlt = ''
}: ImageProps) => {


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
    }
  );

  const imageSet = `${imageSrc} 1x, ${imageSrcRetina} 2x`;
  const imageUrl = `${imageSrc}`;


  return (
    <Picture className='section__image'>
      <source srcSet={imageSet} type="image/webp" />
      <IMG src={imageUrl} alt={imageAlt} />
    </Picture>
  );
};

export default Image;