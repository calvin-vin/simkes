import axios from "axios";
import FormData from "form-data";

export const sendWhatsAppMessages = async (messages) => {
  const formData = new FormData();

  messages.forEach((item, index) => {
    formData.append(`payload[${index}][phone]`, item.phone);
    formData.append(`payload[${index}][message]`, item.message);
  });

  try {
    const response = await axios.post(process.env.WA_API_URL, formData, {
      headers: {
        Token: process.env.WA_API_TOKEN,
        ...formData.getHeaders(),
      },
      maxBodyLength: Infinity,
    });

    return response.data;
  } catch (error) {
    console.error(
      "Failed to send WhatsApp messages:",
      error.response?.data || error.message
    );
    throw error;
  }
};
