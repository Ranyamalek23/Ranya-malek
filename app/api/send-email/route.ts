import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Email destinataire défini côté serveur (sécurisé)
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "raniamalek258@gmail.com"

    // Valider les données
    if (!name || !email || !message || !recipientEmail) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    // Créer un transporteur Nodemailer
    // Pour Gmail, vous devez utiliser un mot de passe d'application
    // Consultez: https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    })

    // Envoyer l'email à Ranya
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      replyTo: email,
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis votre portfolio</h2>
          <p style="color: #666;">
            <strong>De:</strong> ${name}<br/>
            <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
          </p>
          <hr style="border: 1px solid #eee; margin: 20px 0;"/>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;"/>
          <p style="color: #999; font-size: 12px;">
            Répondez directement à cet email pour contacter ${name}
          </p>
        </div>
      `,
    })

    // Envoyer un email de confirmation à l'utilisateur
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Message reçu - Merci !",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Merci pour votre message, ${name}!</h2>
          <p style="color: #666;">
            J'ai bien reçu votre message et je vous recontacterai dès que possible.
          </p>
          <p style="color: #666;">
            Voici une copie de votre message:
          </p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666;">
            À bientôt !
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Email envoyé avec succès" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur lors de l'envoi d'email:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    )
  }
}
