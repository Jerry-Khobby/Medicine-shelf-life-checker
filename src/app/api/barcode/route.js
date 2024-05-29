import { initiMongoose } from "@/lib/mongodb";
import Medicine from "@/models/schema";
import { NextResponse } from "next/server";

export async function POST(req){
  if(req.method!=="POST"){
    return NextResponse.json({message:'Unsupported method or format'},{status:405});

  }
  await initiMongoose();
  try{
    const {barcodeEAN_13}= await req.json();
    
    if(!barcodeEAN_13){
      return NextResponse.json({error:"Barcode is required"},{status:400});
    }
    //const I have to find the medicine 
    const medicine=await Medicine.findOne({barcodeEAN_13});

    if(!medicine){
      return NextResponse.json({error:"Medicine not found"},{status:404});
    }

    return NextResponse.json({medicine},{status:200});
  }catch(error){
    console.error("Error in finding the barcode:",error);
    return NextResponse.json({error:"There is an error finding the barcode number"},{status:500});

  }
}