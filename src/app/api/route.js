import { initiMongoose } from "@/lib/mongodb";
import Medicine from "@/models/schema";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await initiMongoose();
    const allmedicines= await Medicine.find({})

    // the total number of all the medicines in the database 
    const totalMedicines=allmedicines.length;

    //I want to have the total number of medicines due for expiring 
    //Let's get today's date first 
    const currentDate= new Date();
    const aboutToExpireDate = new Date(currentDate);
    aboutToExpireDate.setDate(currentDate.getDate() + 15);

    // Count of medicines about to expire in 15 days
    const aboutToExpireCount = await Medicine.countDocuments({
      expirationDate: { $gte: currentDate, $lte: aboutToExpireDate }
    });

     // Count of expired medicines
     const expiredCount = await Medicine.countDocuments({
      expirationDate: { $lt: currentDate }
    });

   // Calculate the percentage of drugs about to expire
   const aboutExpiringPercentage = totalMedicines > 0 
   ? (aboutToExpireCount / totalMedicines) * 100 
   : 0;

 // Calculate the percentage of drugs expired
 const drugsExpiredPercentage = totalMedicines > 0 
   ? (expiredCount / totalMedicines) * 100 
   : 0;

    const responseData = {
      totalMedicines,
      aboutToExpireCount,
      expiredCount,
      drugsExpiredPercentage,
      aboutExpiringPercentage,
      allmedicines
    };



    return NextResponse.json(responseData,{status:200});
  } catch (error) {
    return NextResponse.json({ errMsg: error }, { status: 500});
  }
}
