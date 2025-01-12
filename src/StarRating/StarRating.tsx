import { useEffect, useState } from 'react';
import './StarRating.css';

const StarRating = (props: any) => {
  const [averageRating, setAverageRating] = useState<any>(0);
  const [stars, setStars] = useState<any>([]);

  useEffect(() => {
    const ratingStar = [];
    for (let i = 1; i <= props?.maxRating; i++) {
      ratingStar.push(
        <span
          key={i}
          className={`star ${i <= averageRating ? 'filled' : ''}`}
        >
          ★
        </span>
      );
    }
    setStars(ratingStar)
  }, [averageRating])

  const calculateAverageRating = (ratings: any[]): number => {
    const normalizedRatings = ratings.map(rating => {
      const value = rating.Value;

      if (value.includes('/10')) {
        // IMDb rating (e.g., "7.8/10")
        return parseFloat(value.split('/')[0]);
      } else if (value.includes('%')) {
        // Rotten Tomatoes rating (e.g., "93%")
        return parseFloat(value.split('%')[0]) / 10;
      } else if (value.includes('/100')) {
        // Metacritic rating (e.g., "80/100")
        return parseFloat(value.split('/')[0]) / 10;
      }
      return 0; // In case of invalid format, return 0
    });

    console.log("Normalized Ratings", normalizedRatings)
    const sum = normalizedRatings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
  };

  useEffect(() => {
    console.log("Ratings", props?.ratings)
    if (props?.ratings) {
      setAverageRating(calculateAverageRating(props?.ratings));
    }
  }, [props?.ratings])

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;
