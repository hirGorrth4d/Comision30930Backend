import Config from '../config';
import nodemailer from 'nodemailer';

class Email {

  constructor() {
    this.owner = {
      name: Config.USERNAME,
      address: Config.GMAIL_EMAIL,
    };

    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      //secure: true,
      auth: {
        user: Config.GMAIL_EMAIL,
        pass: Config.GMAIL_PASSWORD,
      },
    });

    this.transporter.verify().then(() => console.log('READY To Send Email'));
  }

  async sendEmail(dest, subject, content) {
    const { firstName, lastName, email, age, isAdmin } = content
    const mailOptions = {
      from: this.owner,
      to: dest,
      subject,
      html: ` <h2>DATOS DEL NUEVO USUARIO</h2>
              <p>${firstName}</p>
              <p>${lastName}</p>
              <p>${email}</p>
              <p>${age}</p>
              <p>ES ADMINISTRADOR? ${isAdmin}</p>
      `
    };

    const response = await this.transporter.sendMail(mailOptions);
    return response;
  }
  async cartEmail(dest, subject, content) {
    const { user, carts } = content

    const mailOptions = {
      from: this.owner,
      to: dest,
      subject,
      html: ` <h2>COMPRA REALIZADA</h2>
              <p>COMPRADOR: ${user}</p>
              <p>${carts}</p>
      `
    };

    const response = await this.transporter.sendMail(mailOptions);
    return response;
  }
}

export const EmailService = new Email();
