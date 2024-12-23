import { Star } from "lucide-react";

interface RatingDisplayProps {
  rating: number;
  comment?: string;
}

export const RatingDisplay = ({ rating, comment }: RatingDisplayProps) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      </div>
      {comment && (
        <p className="text-sm text-muted-foreground line-clamp-1">{comment}</p>
      )}
    </div>
  );
};