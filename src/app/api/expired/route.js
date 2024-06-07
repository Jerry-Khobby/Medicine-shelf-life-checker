import { initiMongoose } from "@/lib/mongodb";
import Medicine from "@/models/schema";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Connect to the database
    await initiMongoose();
    
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the date 15 days from now
    const aboutToExpireDate = new Date();
    aboutToExpireDate.setDate(currentDate.getDate() + 14);
    
    // Find all medicines
    const allMedicines = await Medicine.find({});
    
    // Find medicines that are about to expire within 15 days
    const aboutToExpireMedicines = await Medicine.find({
      expirationDate: { $gte: currentDate, $lte: aboutToExpireDate }
    });
    
    // Find medicines that have already expired
    const expiredMedicines = await Medicine.find({
      expirationDate: { $lt: currentDate }
    });

    // The total number of all medicines in the database
    const totalMedicines = allMedicines.length;

    // Count of medicines about to expire in 15 days
    const aboutToExpireCount = aboutToExpireMedicines.length;

    // Count of expired medicines
    const expiredCount = expiredMedicines.length;

    // Calculate the percentage of drugs about to expire
    const aboutExpiringPercentage = totalMedicines > 0 
      ? (aboutToExpireCount / totalMedicines) * 100 
      : 0;

    // Calculate the percentage of drugs expired
    const drugsExpiredPercentage = totalMedicines > 0 
      ? (expiredCount / totalMedicines) * 100 
      : 0;


      // want to define a function that can throw a message to frontend on the number of days for a drug to expire and all that 
      const addMessage=(medicines,currentDate)=>{
        return medicines.map(medicine=>{
          const expirationDate = new Date(medicine.expirationDate);
          const timeDiff =expirationDate-currentDate;

          const daysDiff = Math.ceil(timeDiff/(1000*60*60*24));

          let message="";
          if(daysDiff < 0){
            message=` This medicine expired ${Math.abs(daysDiff)} days ago.`;
          }else if(daysDiff===0){
            message = ' This medicine expires today.';
          }
          else{
            message=`This medicine will be expiring in ${daysDiff} days time. `;
          }

          return {
            ...medicine._doc,
            message //add the message property
          }

        })
      }

      const aboutToExpireMedicinesWithMessages = addMessage(aboutToExpireMedicines, currentDate);
      const expiredMedicinesWithMessages = addMessage(expiredMedicines, currentDate);

    const responseData = {
      aboutToExpireCount,
      expiredCount,
      aboutExpiringPercentage,
      drugsExpiredPercentage,
      aboutToExpireMedicines: aboutToExpireMedicinesWithMessages,
      expiredMedicines: expiredMedicinesWithMessages
    };

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error("Error fetching medicine data:", error);
    return NextResponse.json({ errMsg: error.message }, { status: 500 });
  }
}
