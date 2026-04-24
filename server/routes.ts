import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactInquirySchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: parsed.error.flatten() 
        });
      }

      const inquiry = await storage.createContactInquiry(parsed.data);
      
      return res.status(201).json({ 
        success: true, 
        message: "Thank you for your inquiry. We'll be in touch shortly.",
        id: inquiry.id 
      });
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      return res.status(500).json({ error: "Failed to submit inquiry" });
    }
  });

  return httpServer;
}
