import clientPromise from "@/lib/mongodb";
import { getDbAndReqBody } from "@/lib/utils/api-routes";
import { PushOperator } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const { email, productId } = reqBody;

    const updateFavorites = await db.collection("favorites").findOneAndUpdate(
      { email },
      {
        $pull: {
          favoritesId: { productId },
        } as unknown as PushOperator<Document>,
      },
      {
        upsert: false,
        returnDocument: "after",
      }
    );

    return NextResponse.json({ status: 201, updateFavorites });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
