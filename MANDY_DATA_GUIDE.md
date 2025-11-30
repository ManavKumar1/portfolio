# How to Feed Data to Mandy 🌟

Mandy is your AI assistant, and she learns from the data you provide! Here's how to customize her knowledge with your portfolio information.

## Data Structure

All of Mandy's knowledge comes from the `siteContent` object in `server.js`. Here's what you need to do:

### 1. **Update Your Email Address**
In `server.js`, find the `contact` section and replace the email:

\`\`\`javascript
contact: {
  email: "your-email@example.com", // ← REPLACE WITH YOUR EMAIL
  message: "You can reach me at your-email@example.com for any inquiries...",
}
\`\`\`

### 2. **Add Your About/Bio**
Update the `about` field with your professional background:

\`\`\`javascript
about: `I'm [Your Name], a [Your Profession] with expertise in [Key Areas].
        I specialize in [What You Do] and I'm passionate about [Your Passion].`,
\`\`\`

### 3. **Describe Your Projects**
Replace the `projects` section with actual projects:

\`\`\`javascript
projects: `I have worked on amazing projects including:
           - Project Alpha: [Description and technologies used]
           - Project Beta: [Description and technologies used]
           - Project Gamma: [Description and technologies used]`,
\`\`\`

### 4. **List Your Services**
Update the `services` field:

\`\`\`javascript
services: `I offer comprehensive services including:
           - Service 1: [Description]
           - Service 2: [Description]
           - Service 3: [Description]`,
\`\`\`

### 5. **Share Your Skills**
Add your technical skills:

\`\`\`javascript
skills: `My expertise includes: React, Node.js, TypeScript, 
         MongoDB, PostgreSQL, Tailwind CSS, and more.`,
\`\`\`

## Advanced: Connecting to OpenAI

When you're ready to use OpenAI for smarter responses, replace the `generateResponse()` function with an OpenAI API call:

\`\`\`javascript
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Set this in your environment variables
})

async function generateResponse(userMessage, conversationHistory) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    system: `You are Mandy, a friendly portfolio assistant. Use this information to answer questions: ${JSON.stringify(siteContent)}`,
    messages: conversationHistory,
  })

  return response.choices[0].message.content
}
\`\`\`

## Mandy's Contact Feature

When visitors ask about contacting you, Mandy automatically provides your email address. Common triggers:
- "How can I contact you?"
- "What's your email?"
- "How do I hire you?"
- "I'd like to get in touch"

## Tips for Best Results

1. **Be Specific**: The more detailed your content, the better Mandy's responses
2. **Use Keywords**: Include important terms visitors might search for
3. **Keep It Updated**: Regularly update your portfolio information
4. **Test It Out**: Ask Mandy questions to see how she responds
5. **Add More Categories**: As your portfolio grows, add new sections to `siteContent`

## Example Complete Data

\`\`\`javascript
const siteContent = {
  about: `I'm Sarah Chen, a full-stack developer with 5+ years of experience building web applications.
          I love turning complex problems into simple, beautiful solutions. When I'm not coding,
          you can find me contributing to open-source projects.`,
  projects: `Highlights from my portfolio:
             - TravelMap: A real-time travel planning app with AI recommendations (React, Node.js, MongoDB)
             - ShopHub: E-commerce platform processing $2M+ in transactions (Next.js, Stripe, PostgreSQL)
             - DataViz Pro: Analytics dashboard for businesses (React, D3.js, Express)`,
  services: `Full-stack development, UI/UX design, API development, Database design, Performance optimization`,
  skills: `React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Tailwind CSS, AWS, Docker`,
  contact: {
    email: "sarah@example.com",
    message:
      "Feel free to reach out at sarah@example.com or through my contact form! I'd love to discuss your project.",
  },
}
\`\`\`

That's it! Now Mandy has all the information she needs to be your perfect portfolio assistant. 🚀✨
