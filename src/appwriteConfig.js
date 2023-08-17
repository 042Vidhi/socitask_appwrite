import { Client,Account,Databases } from 'appwrite';

export const PROJECT_ID = '64dcc80ed7ea679df131';
export const DATABASE_ID = '64dcc8d9ebc5c4b93677';
export const COLLECTION_ID_POSTS = '64dccf87991ba9175ebb';


const client = new Client();
client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('64dcc80ed7ea679df131');

export const database = new Databases(client);
export const account = new Account(client);

export default client;