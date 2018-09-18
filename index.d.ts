import * as React from 'react'

declare class StarRating extends React.Component<StarRatingProps, any> {
}

export interface StarRatingProps {
  buttonStyle?: any;
  disabled?: boolean;
  emptyStar?: string;
  emptyStarColor?: string;
  fullStar?: string;
  halfStar?: string;
  iconSet?: string;
  maxStars?: number;
  rating?: number;
  selectedStar?: (rating: number) => any;
  starColor?: string;
  starSize?: number;
  starStyle?: any;
}

export default StarRating;
