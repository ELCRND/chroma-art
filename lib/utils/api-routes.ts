import { Db, MongoClient } from "mongodb";
import jwt, { VerifyErrors } from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getDbAndReqBody = async (
  clientPromise: Promise<MongoClient>,
  req: Request | null
) => {
  const db = (await clientPromise).db(process.env.NEXT_PUBLIC_DB_NAME);

  if (req) {
    const reqBody = await req.json();
    return { db, reqBody };
  }

  return { db };
};

export const generateTokens = (email: string, role: string) => {
  const accessToken = jwt.sign(
    {
      email,
      role,
    },
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    {
      expiresIn: "10m",
    }
  );

  const refreshToken = jwt.sign(
    {
      email,
    },
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string,
    { expiresIn: "30d" }
  );

  return { accessToken, refreshToken };
};

export const createUserAndGenerateTokens = async (
  db: Db,
  reqBody: { email: string; password: string }
) => {
  const salt = bcrypt.genSaltSync(7);
  const hash = bcrypt.hashSync(reqBody.password, salt);

  await db.collection("users").insertOne({
    email: reqBody.email,
    password: hash,
    image: "",
    role: "user",
  });

  return generateTokens(reqBody.email, "user");
};

export const findUserByEmail = async (db: Db, email: string) =>
  db.collection("users").findOne({ email });

export const getProducts = async (db: Db) => {
  const products = await db.collection("paints").find().toArray();

  return products;
};

export const createCollectionFavorites = async (
  db: Db,
  email: string,
  initial = []
) => {
  const favorites = await db.collection("favorites").insertOne({
    email,
    favoritesId: initial,
  });
  return favorites;
};
export const createCollectionBasket = async (
  db: Db,
  email: string,
  initial = []
) => {
  const basket = await db.collection("basket").insertOne({
    email,
    products: initial,
  });
  return basket;
};

export const getCollectionsFavorites = async (db: Db, email: string) => {
  const collectionFavorites = await db
    .collection("favorites")
    .findOne({ email });
  return collectionFavorites;
};
export const getCollectionsBasket = async (db: Db, email: string) => {
  const collectionBasket = await db.collection("basket").findOne({ email });
  return collectionBasket;
};

export const isValidAccessToken = async (token: string | undefined) => {
  const baseError = {
    message: "unauthorized",
    status: 401,
  };
  let jwtError = null;
  if (!token) {
    return {
      ...baseError,
      error: { message: "jwt is required" },
    };
  }
  jwt.verify(
    token,
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY!,
    async (err: VerifyErrors | null) => {
      if (err) {
        jwtError = err;
      }
    }
  );

  if (jwtError) {
    return {
      ...baseError,
      error: jwtError,
    };
  }

  return { status: 200 };
};

export const getAuthRouteData = async (
  clientPromise: Promise<MongoClient>,
  req: Request,
  withReqBody = true
) => {
  const { db, reqBody } = await getDbAndReqBody(
    clientPromise,
    withReqBody ? req : null
  );
  const token = req.headers.get("authorization")?.split(" ")[1];
  const tokenIsValid = await isValidAccessToken(token);
  return { db, reqBody, tokenIsValid, token };
};

export const parseJwt = (token: string) => {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
};
