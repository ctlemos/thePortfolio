import 'dotenv/config';

exports.handler = async (event) => {
  const fetch = (await import('node-fetch')).default;

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const report = JSON.parse(event.body);
    console.log("📣 CSP Report Received:", JSON.stringify(report, null, 2));

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    const yourEmail = process.env.FORMSPREE_EMAIL;
 
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _replyto: yourEmail,
        message: JSON.stringify(report, null, 2),
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar email: ${response.statusText}`);
    }

    return { statusCode: 204 };
  } catch (error) {
    console.error("Erro no envio do email:", error);
    return { statusCode: 500, body: "Erro ao enviar email" };
  }
};
