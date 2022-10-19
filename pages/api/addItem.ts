import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/prisma"

export default async function addItem(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  // Get the item
  const { item }: { item: string } = JSON.parse(req.body)

  // If no item is provided, return an error
  if (!item) {
    return res.status(400).json({ message: "No item provided" })
  }

  // Add the item to the database
  const newItem = await prisma.shoppingItem.create({
    data: {
      name: item,
    },
  }).catch((err) => {
    console.error(err)
    return res.status(500).json({ message: "Error adding item" })
  })

  // Return the new item
  return res.status(200).json(newItem)
}

