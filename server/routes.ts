import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Log the contact form submission (in a real app, you'd send an email or save to database)
      console.log("New contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      // For now, we'll just return success
      // You can later integrate with email services like SendGrid, Nodemailer, etc.
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you within 24 hours." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "There was an error sending your message. Please try again or contact me directly at kashanmiankhel922@gmail.com" 
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
