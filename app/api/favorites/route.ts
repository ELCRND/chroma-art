import clientPromise from "@/lib/mongodb";
import {
  createCollectionFavorites,
  findUserByEmail,
  getCollectionsFavorites,
  getDbAndReqBody,
} from "@/lib/utils/api-routes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
  const user = await findUserByEmail(db, reqBody.email);

  if (!user) {
    return NextResponse.json(
      { message: "Пользователя не существует", email: reqBody.email },
      { status: 400 }
    );
  }

  const favorites = await getCollectionsFavorites(db, reqBody.email);
  if (!favorites) {
    return NextResponse.json(createCollectionFavorites(db, reqBody.email), {
      status: 201,
    });
  }

  return NextResponse.json(favorites, { status: 200 });
}
