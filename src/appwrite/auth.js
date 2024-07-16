import { Account, Client, ID } from "appwrite";
import conf from "../config/config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteURL)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(
        `AppWrite service error :: createAccount :: error ${error.message}`
      );
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(
        `AppWrite service error :: login :: error ${error.message}`
      );
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw new Error(
        `AppWrite service error :: getCurrentUser :: error ${error.message}`
      );
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw new Error(
        `AppWrite service error :: logout :: error ${error.message}`
      );
    }
  }
}

const authService = new AuthService();

export default authService;
