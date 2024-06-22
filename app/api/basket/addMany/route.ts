import clientPromise from "@/lib/mongodb";
import { getDbAndReqBody } from "@/lib/utils/api-routes";
import { PushOperator } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    const { email, newData } = reqBody;

    await db.collection("basket").updateOne(
      { email },
      {
        $push: {
          products: { $each: [...newData] },
        } as unknown as PushOperator<Document>,
      }
    );

    return NextResponse.json({ status: 201, message: "basket saved in DB" });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
