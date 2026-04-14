import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function getEnvValue(...keys: string[]) {
  for (const key of keys) {
    const value = process.env[key];

    if (value) {
      return value;
    }
  }

  return undefined;
}

const firebaseConfig = {
  apiKey: getEnvValue(
    "NEXT_PUBLIC_FIREBASE_API_KEY",
    "VITE_API_KEY",
    "FIREBASE_API_KEY",
  ),
  authDomain: getEnvValue(
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
    "VITE_AUTH_DOMAIN",
    "FIREBASE_AUTH_DOMAIN",
  ),
  projectId: getEnvValue(
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
    "VITE_PROJECT_ID",
    "FIREBASE_PROJECT_ID",
  ),
  storageBucket: getEnvValue(
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
    "VITE_STORAGE_BUCKET",
    "FIREBASE_STORAGE_BUCKET",
  ),
  messagingSenderId: getEnvValue(
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    "VITE_MESSAGING_SENDER_ID",
    "FIREBASE_MESSAGING_SENDER_ID",
  ),
  appId: getEnvValue(
    "NEXT_PUBLIC_FIREBASE_APP_ID",
    "VITE_APP_ID",
    "FIREBASE_APP_ID",
  ),
  measurementId: getEnvValue(
    "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID",
    "VITE_MEASUREMENT_ID",
    "FIREBASE_MEASUREMENT_ID",
    "NEXT_PUBLIC_GA_ID",
  ),
};

const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
