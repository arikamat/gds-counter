import { collection, addDoc } from "firebase/firestore";
import {FIRESTORE_DB} from './firebase'; // Adjust the path as needed

const addDocumentToFirestore = async (collectionName, data) => {
  console.log(typeof FIRESTORE_DB);
  const collectionRef = collection(FIRESTORE_DB, collectionName);
  try {
    
    const doc = await addDoc(collectionRef, data)
    console.log('Document added successfully');
    return doc;
  } catch (error) {
    console.error('Error adding document:', error);
  }
};


export default addDocumentToFirestore;