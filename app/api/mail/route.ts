export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const ip = searchParams.get("ip");
  console.log("Something happened!");

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "jdeiss06@gmail.com",
              name: "Jonathan Deiss",
            },
          ],
          subject: "Someone clicked the link",
        },
      ],
      content: [
        {
          type: "text/plain",
          value: `Their IP was:\n${ip}`,
        },
      ],
      from: {
        email: "megumin@firesquid.co",
        name: "Megumin",
      },
      reply_to: {
        email: "megumin@firesquid.co",
        name: "Megumin",
      },
    }),
  });

  return res;
}
