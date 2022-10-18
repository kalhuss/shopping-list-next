import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function getItems(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "GET"){
        return res.status(405).json({message: "Method Not Allowed"});
    }

    //Get items from database
    const getItems = await prisma.shoppingItem.findMany().catch((err) => {
        console.error(err);
        return res.status(500).json({message: "Error adding item"});
    });

    return res.status(200).json(getItems);
}