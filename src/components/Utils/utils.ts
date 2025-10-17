export const formatPrice = (price: number): string => {
  return price
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace("R$", "")
    .trim();
};