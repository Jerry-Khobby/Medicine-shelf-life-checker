import { initiMongoose } from '@/lib/mongodb';
import Medicine from '@/models/schema';
import { NextResponse } from 'next/server';

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Unsupported method or format" }, { status: 405 });
  }

  // Connect to the database
  await initiMongoose();

  try {
    const data = await req.json();

    // Check for existing unique attributes
    const existingMedicine = await Medicine.findOne({
      $or: [
        { shelfNumber: data.shelfNumber },
        { barcodeEAN_13: data.barcodeEAN_13 },
        { barcodeUPC_A: data.barcodeUPC_A }
      ]
    });

    if (existingMedicine) {
      let errorMessage = 'There is a conflict with an existing record: ';
      if (existingMedicine.shelfNumber === data.shelfNumber) {
        errorMessage += 'Shelf number is already filled. ';
      }
      if (existingMedicine.barcodeEAN_13 === data.barcodeEAN_13) {
        errorMessage += 'EAN-13 barcode is already filled. ';
      }
      if (existingMedicine.barcodeUPC_A === data.barcodeUPC_A) {
        errorMessage += 'UPC-A barcode is already filled. ';
      }
      return NextResponse.json({ error: errorMessage.trim() }, { status: 409 });
    }

    const newMedicine = new Medicine({
      name: data.name,
      group: data.group,
      description: data.description,
      manufacturingDate: data.manufacturingDate,
      expirationDate: data.expirationDate,
      quantityInStock: data.quantityInStock,
      shelfNumber: data.shelfNumber,
      supplier: data.supplier || "",
      barcodeEAN_13: data.barcodeEAN_13 || "",
      barcodeUPC_A: data.barcodeUPC_A || "",
      imageUrl: data.imageUrl || "",
    });

    await newMedicine.save();

    return NextResponse.json(newMedicine, { status: 201 });
  } catch (error) {
    console.error("Error in adding data:", error);
    return NextResponse.json({ error: "There was an error" }, { status: 500 });
  }
}
