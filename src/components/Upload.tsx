import React , {useState} from "react";
import {initializeApp} from "firebase/app";
import {getStorage, ref, StorageReference, uploadBytes}  from  "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCddy_MlOAbHktYi4SyX81zUC921M-5lhE",
    authDomain: "upload-storage-ts-aaf.firebaseapp.com",
    projectId: "upload-storage-ts-aaf",
    storageBucket: "upload-storage-ts-aaf.appspot.com",
    messagingSenderId: "923057526397",
    appId: "1:923057526397:web:94eb17c226b6bed9a94314",
    measurementId: "G-HJP9Z9TTXR"
  };

  export default function Upload() {
    const [selectedFile, setSelectedFile] = useState({ name: ''});
    console.log({selectedFile});
    const handleUpload = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        //connect to firebase project
        const app = initializeApp(firebaseConfig);
        //connect to firebase storage bucket
        const storage = getStorage(app);
        //create a reference to our file in storage
        const filename: string = selectedFile?.name
        const imageRef: StorageReference = ref(storage, 'photos/' + selectedFile?.name);
        //(Todd's cheat) to create url from reference
        const url = `https://firebasestorage.googleapis.com/v0/b/upload-storage-ts-aaf.
        appspot.com/o/${filename}?alt=media`

        //upload file to bucket
        //uploadBytes(imageRef, selectedFile);

    }
    return (
      <form onSubmit={handleUpload}>
      <input type="file" name="photo"
      onChange={(e: React.FormEvent<HTMLElement> | any) => setSelectedFile(e.currentTarget.files[0])}
      // value={selectedFile.name}
      />
      <button type="submit">Upload</button>
      </form>
    )
  }
