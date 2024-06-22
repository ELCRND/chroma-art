import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import {
  findUserByEmail,
  generateTokens,
  getDbAndReqBody,
} from "@/lib/utils/api-routes";

export async function POST(req: NextRequest) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
  const user = await findUserByEmail(db, reqBody.email);

  if (!user) {
    return NextResponse.json(
      {
        warningMessage: "Пользователя не существует",
      },
      {
        status: 400,
      }
    );
  }

  if (!bcrypt.compareSync(reqBody.password, user.password)) {
    return NextResponse.json(
      {
        warningMessage: "Неправильный логин или пароль!",
      },
      {
        status: 400,
      }
    );
  }

  const tokens = generateTokens(reqBody.email, user.role);
  const response = NextResponse.json(
    {
      user: {
        email: user.email,
        name: user.name,
        _id: user._id,
      },
      tokens,
    },
    { status: 200 }
  );

  return response;
}
