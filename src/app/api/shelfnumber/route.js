import { initiMongoose } from "@/lib/mongodb";
import Medicine from "@/models/schema";
import { NextResponse } from "next/server";


export async function POST(req){
  if(req.method!=="POST"){
    return NextResponse.json({message:"Unsupported method or format"},{status:405});
  }

  await initiMongoose();
  try{
    const {shelfNumber} = await req.json();

    if(!shelfNumber){
      return NextResponse.json({message:"Shelf Number was present or empty "},{status:400});
    }

    // const you have to find the medicine with the shelf number 
    const medicine= await Medicine.findOne({shelfNumber})
    // if we have there is no medicine like that 
    if(!medicine){
      return NextResponse.json({error:"Medicine with this shelf number is not available"},{status:404});
    }

    // if everything is succesfully done , I want to return the medicine 
    return NextResponse.json({medicine},{status:200});
  }catch(err){
    console.error("Error in finding the shelf number",err);
    return NextResponse.json({error:"There is an error finding the shelf number"},{status:500});
  }
}