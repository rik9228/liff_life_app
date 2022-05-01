import { doc, Timestamp, setDoc } from "firebase/firestore";
import React from "react";
import "./App.css";
import { format as formatTZ } from "date-fns-tz";

import { db } from "./libs/firebase";

function App() {
  const post = async () => {
    await setDoc(doc(db, "cities", "LA"), {
      text: "Los Angeles",
      createdAt: formatTZ(Timestamp.now().toDate(), "yy/MM/dd HH:mm", {
        timeZone: "Asia/Tokyo",
      }),
    });
  };
  return (
    <div className="App">
      <button onClick={post}>DBテスト</button>
    </div>
  );
}

export default App;
