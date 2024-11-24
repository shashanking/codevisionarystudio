import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { app } from './firebase';

// Initialize Firestore
const db = getFirestore(app);

export interface Lead {
  uid: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  status: string;
  process_status: string;
  subject: string;
  msg: string;
  created_at: Date;
}

const generateUID = () => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${randomStr}`;
};

export const createLead = async (leadData: Omit<Lead, 'created_at' | 'status' | 'process_status' | 'uid'>) => {
  try {
    const uid = generateUID();
    const docRef = await addDoc(collection(db, 'inbound-leads'), {
      ...leadData,
      uid,
      status: 'warm',
      process_status: 'fresh',
      created_at: Timestamp.now()
    });
    return { id: docRef.id, uid };
  } catch (error) {
    console.error('Error creating lead:', error);
    throw error;
  }
};
