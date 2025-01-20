import { db } from '../firebaseConfig';
import { collection, getDoc, getDocs, query, where, addDoc, doc,updateDoc,arrayUnion,deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const fetchCollectionData = async (collectionName) => {
    if (!collectionName) {
      toast.error('Collection name is required.');
    }
  
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    const dataList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return dataList;
  };

  export const addDocumentToCollection = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log(`Document added with ID: ${docRef.id}`);
      return docRef;
    } catch (error) {
      console.error(`Error adding document to ${collectionName}:`, error);
      throw error;
    }
  };

  // Update document in collection
export const updateDocumentInCollection = async (collectionName, docId, updatedData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
    console.log(`Document with ID: ${docId} successfully updated.`);
    return true;
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error);
    toast.error("Error updating document.");
    throw error;
  }
};

// Delete document from collection
export const deleteDocumentFromCollection = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log(`Document with ID: ${docId} successfully deleted.`);
    return true;
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}:`, error);
    toast.error("Error deleting document.");
    throw error;
  }
};