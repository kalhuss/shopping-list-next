import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma"

export default async function deleteItem(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

    // Get the item
    const { id }: { id: string } = JSON.parse(req.body)

    // Delete the item from the database
    const deletedItem = await prisma.shoppingItem.delete({
        where: {
            id: id,
        },
    }).catch((err) => {
        console.error(err)
        return res.status(500).json({ message: "Error deleting item" })
    })

    // Return the deleted item
    return res.status(200).json(deletedItem)
}