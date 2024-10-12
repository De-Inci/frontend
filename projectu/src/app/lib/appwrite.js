import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66fba8780001c311a581');

export const account = new Account(client);
export const databases = new Databases(client);
