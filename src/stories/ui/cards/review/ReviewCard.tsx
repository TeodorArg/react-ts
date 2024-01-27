import "./_revew-card.scss";

interface ReviewCardProps {
  name?: string;
  image?: string;
  desc?: string;
  date?: string;
}

export default function ReviewCard({
    name="",
    image="",
    desc="",
    date=""
  }: ReviewCardProps) {

  return (
    <div className="review__card border--default">
      <div className="review__card--image">
        <img src={`images/reviews/review_${image}.webp`} alt={name} className="object-cover" />
      </div>
      <div className="review__card--info">
        <div className="review__card--name txt--bold">
          {name}
        </div>
        <div className="review__card--desc txt--small">
          {desc}
        </div>
      </div>
      <div className="review__card--date txt--small">
        {date}
      </div>
      
      
      
      
    </div>
  );
};
