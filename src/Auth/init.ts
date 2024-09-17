import { initializeApp } from "firebase/app";

import config from "./config.json";

const firebaseConfig = {
  ...config,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
