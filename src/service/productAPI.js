export async function getProductList() {
  const response = await fetch("https://panda-market-api.vercel.app/products");
  if (!response.ok) {
    throw new Error("상품 목록을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
