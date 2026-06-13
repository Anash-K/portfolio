export async function submitContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  // Replace with your email service integration (Resend, SendGrid, etc.)
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}
