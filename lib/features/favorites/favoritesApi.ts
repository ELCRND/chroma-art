export const getFavoritesFromDb = async (email: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );
  const result = await response.json();

  return result;
};

export const addToFavoritesProduct = async ({
  email,
  productId,
  dateAdded,
}: {
  email: string;
  productId: string;
  dateAdded: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/addOne`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, productId, dateAdded }),
    }
  );
  const result = await response.json();

  return result;
};
export const removeProductFromFavorites = async ({
  email,
  productId,
}: {
  email: string;
  productId: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/removeOne`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, productId }),
    }
  );
  const result = await response.json();

  return result;
};
