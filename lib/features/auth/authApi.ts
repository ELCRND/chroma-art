export const loginFetch = async (userData: {
  email: string;
  password: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/signin`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }
  );
  const result = await response.json();

  return result;
};

export const loginCheckFetch = async (accessToken: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login-check`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  const result = await response.json();

  return result;
};

export const refreshTokenFetch = async (refreshToken: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/refresh`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jwt: refreshToken }),
    }
  );
  const result = await response.json();

  return result;
};
