/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapter. With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## The Boy Who Found Magic School\n\nHere's a 5-chapter story about a boy who finds a magical school, formatted in JSON for easy reading and with detailed image prompts for paper cut style illustrations:\n\n```json\n{\n  \"story_name\": \"The Boy Who Found Magic School\",\n  \"cover_image\": {\n    \"description\": \"A boy with a bright smile, wearing a red backpack, stands in front of a giant, swirling, rainbow-colored door. The door is made of paper with swirls of cut-out paper in rainbow colors. Behind the door is a glimpse of a magical world with stars, clouds, and a floating castle made of paper. The boy looks excited and curious.\",\n    \"style\": \"Paper cut, colorful, whimsical\"\n  },\n  \"chapters\": [\n    {\n      \"chapter_title\": \"A Day Like Any Other\",\n      \"description\": \"A young boy named Leo walks home from school, kicking a pebble along the sidewalk. The sun is shining, and birds are singing. He looks bored and a little lonely. He passes by a park, where other children are playing, but he doesn't join in. His house looks ordinary and small, with a brown door and a single window. The sky is blue, and the clouds are white and fluffy.\",\n      \"image\": {\n        \"description\": \"Leo, a boy with brown hair and blue eyes, walks home from school, kicking a pebble. He looks sad and lonely. The houses around him are simple and made of paper, with cut-out windows and doors. The park is filled with paper cut shapes of children playing, but Leo doesn't engage. The sky is a blue paper background with white paper cut clouds.\",\n        \"style\": \"Paper cut, simple, realistic\"\n      }\n    },\n    {\n      \"chapter_title\": \"The Mysterious Door\",\n      \"description\": \"Leo reaches his house and unlocks the door, but instead of finding his usual living room, he finds a swirling door made of colorful paper. It's shimmering and pulsing with light. He is surprised and scared, but curious. He reaches out to touch the door, and it feels warm and inviting.\",\n      \"image\": {\n        \"description\": \"Leo stands in the doorway of his house, looking surprised and curious. The door behind him is brown and ordinary, but the doorway leading into the house is a swirling, rainbow-colored paper cut. The door is pulsating with light, and there are stars and clouds floating around it. Leo reaches out to touch the door.\",\n        \"style\": \"Paper cut, dynamic, fantastical\"\n      }\n    },\n    {\n      \"chapter_title\": \"Welcome to Magic School\",\n      \"description\": \"Leo steps through the magical door and finds himself in a fantastical world. The sky is filled with paper cut stars and clouds, and a castle made of paper floats in the air. There are colorful paper cut animals talking and laughing, and a schoolhouse made of paper is surrounded by sparkling trees. Leo feels amazed and excited. He meets a kind, paper cut teacher, who welcomes him to Magic School.\",\n      \"image\": {\n        \"description\": \"Leo stands in awe, looking at the magical world around him. The sky is filled with paper cut stars, and the clouds are floating in the air. A paper cut castle floats in the sky. Paper cut animals, like a unicorn, a dragon, and a talking cat, are gathered around the schoolhouse, made of paper with a big \"MAGIC SCHOOL\" sign. The teacher, a wise-looking paper cut owl, smiles warmly at Leo.\",\n        \"style\": \"Paper cut, vibrant, whimsical\"\n      }\n    },\n    {\n      \"chapter_title\": \"Learning Magic\",\n      \"description\": \"Leo starts learning magic in Magic School. He learns to make paper flowers bloom with a flick of his wrist, make paper birds sing, and even make a paper dragon fly. He is happy and feels like he finally belongs. He makes new friends, a paper cut girl named Lily and a paper cut boy named Max, who share his love for magic.\",\n      \"image\": {\n        \"description\": \"Leo, Lily, and Max are sitting on a paper cut cloud, learning magic from the paper cut owl teacher. Leo is making paper flowers bloom with a flick of his wrist. Lily is making a paper bird sing, and Max is holding a paper cut dragon that is starting to fly. The children are laughing and enjoying the magic.\",\n        \"style\": \"Paper cut, playful, interactive\"\n      }\n    },\n    {\n      \"chapter_title\": \"The Magic of Friendship\",\n      \"description\": \"Leo learns that the true magic is the magic of friendship. He and his friends share their stories and laughter, help each other, and learn from each other. They discover that even though Magic School is special, the most important magic is the magic they create with each other. They learn that true magic comes from the heart.\",\n      \"image\": {\n        \"description\": \"Leo, Lily, and Max are standing in front of the paper cut Magic School, holding hands and smiling brightly. They are all holding colorful paper cut hearts. The sky is full of stars and the castle is floating in the background. The scene is full of warmth and friendship.\",\n        \"style\": \"Paper cut, heartwarming, meaningful\"\n      }\n    }\n  ]\n}\n```\n\nThis JSON format provides a clear structure for your story and illustrations. You can easily adapt the descriptions and style to suit your creative vision. The paper cut style lends itself beautifully to this fantastical tale, allowing for a unique and engaging visual experience for young readers. Enjoy crafting your magical story! \n"},
          ],
        },
      ],
    });
