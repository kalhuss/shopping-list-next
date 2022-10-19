import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma"

export default async function checkItem(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

    // Get the item
    const { id, checked }: { id: string, checked: boolean } = JSON.parse(req.body)


    // Check the item in the database
    const checkedItem = await prisma.shoppingItem.update({
        where: {
            id,
        },
        data: {
            checked,
        },
    }).catch((err) => {
        console.error(err)
        return res.status(500).json({ message: "Error checking item" })
    })

    // Return the checked item
    return res.status(200).json(checkedItem)
}