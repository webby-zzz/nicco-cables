import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // API routes FIRST
  app.post("/api/send-email", async (req, res) => {
    try {
      const { type, data } = req.body;
      
      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        return res.status(500).json({ error: "Email credentials not configured" });
      }

      let subject = "";
      let text = "";

      if (type === "contact") {
        subject = "Contact form entry from Niccocables Website";
        text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company || 'N/A'}\nMessage: ${data.message || 'N/A'}`;
      } else if (type === "brochure") {
        subject = `${data.name} just downloaded ${data.brochureName}`;
        text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nBrochure: ${data.brochureName}`;
      } else {
        return res.status(400).json({ error: "Invalid form type" });
      }

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: "web.zipzapzop@gmail.com",
        subject,
        text,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
