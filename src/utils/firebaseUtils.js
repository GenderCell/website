// src/utils/firebaseUtils.js

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Your main firebase config file

/**
 * Fetches all documents from the 'data' subcollection of a specific folder.
 * @param {string} folderName - The name of the folder (e.g., 'event', 'users').
 * @returns {Promise<Array>} A promise that resolves to an array of documents.
 */
export const getContentByFolder = async (folderName) => {
  try {
    // Correctly reference the 'data' subcollection inside a specific folder
    const contentCollectionRef = collection(db, 'folders', folderName, 'data');
    
    const querySnapshot = await getDocs(contentCollectionRef);
    
    const contentList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log(contentList);
    
    return contentList;
  } catch (error) {
    console.error(`Error fetching content for type '${folderName}':`, error);
    return []; // Return an empty array on error
  }
};



/**
 * Fetches all available folder types (document IDs from the 'folders' collection).
 * @returns {Promise<Array>} A promise that resolves to an array of folder names.
 */
export const getAllFolderTypes = async () => {
  try {
    const foldersCollectionRef = collection(db, 'folders');
    const querySnapshot = await getDocs(foldersCollectionRef);
    
    // We only need the ID of each document, which is the folder name
    const folderTypes = querySnapshot.docs.map(doc => doc.id);
    
    return folderTypes;
  } catch (error) {
    console.error("Error fetching folder types:", error);
    return [];
  }
};