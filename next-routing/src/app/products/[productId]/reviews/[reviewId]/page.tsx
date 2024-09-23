import { notFound } from "next/navigation";

export default function ProductReview({
  params,
}: {
  params: {
    productId: number;
    reviewId: number;
  };
}) {
  if (params.reviewId > 1000) {
    return notFound();
  }

  return (
    <div>
      <h2>This is product id {params.productId}</h2>
      <h2>This is review id {params.reviewId}</h2>
    </div>
  );
}
