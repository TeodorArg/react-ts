import Button from '../../button/Button';

import './_house-card.scss';

interface HouseCardProps {
  houseTitle?: string;
  houseImage?: string;
  houseDesc?: string;
  housePrice?: string;
  houseArea?: string;
  houseFullArea?: string;
  houseSize?: string;
  houseFloors?: string;
}


export default function HouseCard({ 
    houseTitle = '',
    houseImage = '',
    houseDesc = '',
    housePrice = '',
    houseArea = '',
    houseFullArea = '',
    houseSize = '',
    houseFloors = ''
  }: HouseCardProps ) {

  return (
    <div className="house__card">
      
      <picture className="house__card--img border--default">
          <source media="(min-width: 640px)"
            srcSet={`images/houses/house_${houseImage}.webp 1x, images/houses/house_${houseImage}@2x.webp 2x`}
            type="image/webp" />
          <source
            srcSet={`images/houses/xs/house_${houseImage}.webp 1x, images/houses/xs/house_${houseImage}@2x.webp 2x`}
            type="image/webp" />
          <img src={`images/houses/house_${houseImage}.webp`} alt={houseTitle} className="object-cover" />
      </picture>

      <div className="house__card--info">
        
        <div className="house__card--name">
          <span className="txt--bold txt--uppercase">{houseTitle}</span>
          <span>{houseDesc}</span>
        </div>

        <span className="house__card--price txt--bold txt--uppercase border--default">{housePrice}</span>

        <span className="house__card--properties">
          <span>Площадь:</span>{houseArea}
        </span>
        <span className="house__card--properties">
          <span>Площадь застройки:</span>{houseFullArea}
        </span>
        <span className="house__card--properties">
          <span>Размер:</span>{houseSize}
        </span>
        <span className="house__card--properties">
          <span>Этажность:</span>{houseFloors}
        </span>

        <div className="house__card--btn">
          <Button btnLabel="подробнее" btnFull={true}/>
        </div>

      </div>
    </div>
  );
};

