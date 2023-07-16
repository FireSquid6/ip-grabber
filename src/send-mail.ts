import * as sgMail from "@sendgrid/mail";

export default function sendMail(content: string) {
  console.log(import.meta.env.VITE_SENDGRID_API_KEY);
  console.log(import.meta.env.VITE_RECIEVER_EMAIL);
  console.log(import.meta.env.VITE_RECIEVER_NAME);

  const msg = {
    to: import.meta.env.VITE_RECIEVER_EMAIL as string,
    from: "megumin@firesquid.co",
    subject: "Some moron clicked the link",
    text: content,
    html: `<p>${content}</p>`,
  };

  sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY as string);
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
