const sendInBlueKey = process.env.SENDINBLUE_KEY;
import { ThankyouTemplate } from "../../components/email/template"

const CUILSOFT_CONTACT = {
  name: "Cuilsoft Pvt. Ltd.",
};

const sendConfirmationEmail = async (to) => {
  await fetch("https://api.sendinblue.com/v3/smtp/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": sendInBlueKey,
    },
    body: JSON.stringify({
      sender: {
        name: "Cuilsofts",
        email: "cuilsofts@gmail.com",
      },
      to: [
        {
          email: to.email,
          name: to.name,
        },
      ],
      subject: `Thank you for contacting Cuilsoft`,
      htmlContent: ThankyouTemplate(to),
    }),
  });
};

export default async function handler(req, res) {
  const body = req.body;
  const name = req.body.firstName + " " + req.body?.lastName;

  await fetch("https://api.sendinblue.com/v3/smtp/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": sendInBlueKey,
    },
    body: JSON.stringify({
      sender: {
        name: name,
        email: body.email,
      },
      to: [
        {
          email: "cuilsofts@gmail.com",
          name: "Cuilsofts",
        },
      ],
      subject: `You have email from ${name}`,
      htmlContent: `
                <html>
                    <head></head>
                    <body>
                        From: ${name} <br/>
                        Email: ${body.email} <br/>
                        Mobile Number: ${body.phoneNumber} <br/>
                        Message: ${body.message} <br/>
                    </body>
                </html>
            `,
    }),
  });

  sendConfirmationEmail({
    email: body.email,
    name,
  });

  return res.status(200).json(sendInBlueKey);
}
