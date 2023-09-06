'use client'
import React from 'react';

import { FirebaseApp } from 'firebase/app';
import { Database } from 'firebase/database';
import { Firebase } from '@/database/firebase';

interface FirebaseContextProps {
  app: FirebaseApp;
  database: Database;
}

const FirebaseContext = React.createContext<FirebaseContextProps | null>(null);

export const useFirebase = (): FirebaseContextProps => {
  const context = React.useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

interface FirebaseProviderProps {
  children: React.ReactNode;
}

export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({
  children,
}) => {
  const firebase = Firebase.getInstance();
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};
