export default function ProductReview({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      <h2>This is product id {params.productId}</h2>
      <h2>This is review id {params.reviewId}</h2>
    </div>
  );
}
