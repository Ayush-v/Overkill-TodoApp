// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method === "POST") {
  //   console.log(req.body);

  //   try {
  //     const item = await prisma.todoItem.create({
  //       data: {
  //         title: req.body.title,
  //       },
  //     });

  //     res.status(201).json(item);
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // } else {
  res.status(400).json({ working: "working" });
  // }
}
