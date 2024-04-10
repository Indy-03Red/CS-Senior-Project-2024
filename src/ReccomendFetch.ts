
import { getFirestore, collection, getDocs, query, where, documentId } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";

const ref = db;
export async function getRecs(Liquor: string, Flavor: string, Specific: string)
{
    const drinks = collection(ref, 'Drinks');

    var q = await getDocs(
        query(collection(ref, 'Tags'), where('Name', '==', Flavor))
        );

    if (q.empty) 
    { 
        console.log("Flavor does not exist"); 
        return null;
    }

    const flavorTag = q.docs[0].id; 

    q = await getDocs(
        query(collection(ref, 'Tag:Drinks'), where('Tag', '==', flavorTag))
    )
    var drinksArray = q.docs[0].get('Drinks').split(",");//Creates an array out of the string of drinks
    
    q = await getDocs(query(drinks, where(documentId(), 'in', drinksArray))); //gets every drink document whose tag is in the flavor list
    drinksArray = [];

    q.forEach((doc) => { //Checks each drink to see if they contain the correct liquor or specific
        const vals = doc.data();
        var liq = false;
        var spec = false;
        vals.forEach((field) => {
            if (field.includes(Liquor))
            {
                liq = true;
            }
            if (field.includes(Specific) || Specific == "No preference")
            {
                spec = true;
            }
        });
        if (liq && spec)
        {
            drinksArray.push(doc.id);
        }
    });
    q = await getDocs(query(drinks, where(documentId(), 'in', drinksArray))); //Gets all the drinks within the new array
    q.forEach((doc) => {console.log(doc.data())})
    return q;
};
