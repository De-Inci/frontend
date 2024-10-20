import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fba8ca00327b8bb7eb");
export const account = new Account(client);
export const databases = new Databases(client);
