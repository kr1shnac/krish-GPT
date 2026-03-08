import "dotenv/config";

const getLlamaResponse = async (message) => {
  const options = {
    meathod: "POST",
    headers: {
      Authorization: `Bearer ${process.env.LLAMA_API_KEY}`,
      "Content-Type": "application/json",
    },

    body: json.stringify({
      model: "Llama-4-Maverick-17B-128E-Instruct-FP8",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    }),
  };

  try {
    const response = await fetch(
      "https://api.llama.com/v1/chat/completions",
      options,
    );
    const data = await response.json();

    console.log(data);
    return data; //reply
  } catch (err) {
    console.log(err);
  }
};

export default getLlamaResponse;
