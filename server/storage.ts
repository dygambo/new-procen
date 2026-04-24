import {
  type User,
  type InsertUser,
  type ContactInquiry,
  type InsertContactInquiry,
  users,
  contactInquiries
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [contactInquiry] = await db.insert(contactInquiries).values(inquiry).returning();
    return contactInquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db.select().from(contactInquiries);
  }
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<number, ContactInquiry>;
  private currentUserId: number;
  private currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const idString = String(this.currentUserId++);
    const user = { ...insertUser, id: idString, createdAt: new Date() } as unknown as User;
    this.users.set(idString, user);
    return user;
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const idNum = this.currentInquiryId++;
    const contactInquiry = { ...inquiry, id: idNum, createdAt: new Date() } as unknown as ContactInquiry;
    this.contactInquiries.set(idNum, contactInquiry);
    return contactInquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }
}

export const storage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemStorage();
