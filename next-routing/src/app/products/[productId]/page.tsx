export default function Product({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>This is product {params.productId}</h1>
    </div>
  );
}
