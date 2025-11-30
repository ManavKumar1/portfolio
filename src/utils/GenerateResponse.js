import siteContent from "../SiteContent"

export default function generateResponse(userMessage) {

  // ---------- BLOCK BOT MESSAGES COMPLETELY ----------
  if (!userMessage || typeof userMessage !== "string") return null

  const text = userMessage.toLowerCase().trim()


  // ========================= CONTACT =========================
  if (
    [
      "contact",
      "email",
      "mail",
      "reach",
      "connect",
      "touch",
      "hire",
      "inquiry",
      "enquiry",
      "work with",
      "get in touch",
      "talk to you",
      "message you",
      "ping you"
    ].some((k) => text.includes(k))
  ) {
    return `📧 ${siteContent.contact.message}`
  }

  // ========================= ABOUT =========================
  if (
    [
      "about",
      "yourself",
      "who are you",
      "bio",
      "background",
      "introduction",
      "profile",
      "summary",
      "what do you do",
      "tell me about yourself",
      "who is manav"
    ].some((k) => text.includes(k))
  ) {
    return `About me:\n${siteContent.about}`
  }

  // ========================= EXPERIENCE =========================
  if (
    [
      "experience",
      "work history",
      "companies",
      "jobs",
      "career",
      "professional background",
      "resume experience",
      "previous roles",
      "past work",
      "work timeline"
    ].some((k) => text.includes(k))
  ) {
    return `🧑‍💻 Here's my experience:\n${siteContent.experiences}`
  }

  // Individual Companies
  if (text.includes("freecharge") || text.includes("axis bank")) {
    return siteContent.experiences
      .split("•")
      .find((e) => e.toLowerCase().includes("freecharge"))
  }

  if (text.includes("compitcom")) {
    return siteContent.experiences
      .split("•")
      .find((e) => e.toLowerCase().includes("compitcom"))
  }

  if (text.includes("freelance") || text.includes("self employed")) {
    return siteContent.experiences
      .split("•")
      .find((e) => e.toLowerCase().includes("freelancer"))
  }

  // ========================= EDUCATION =========================
  if (
    [
      "education",
      "study",
      "studies",
      "college",
      "degree",
      "university",
      "qualification",
      "academics"
    ].some((k) => text.includes(k))
  ) {
    return `🎓 My education:\n${siteContent.education}`
  }

  if (text.includes("poornima")) {
    return siteContent.education.split("•").find((e) => e.includes("Poornima"))
  }

  // ========================= PROJECTS =========================
  if (
    [
      "project",
      "projects",
      "portfolio",
      "built",
      "your apps",
      "things you built",
      "case studies",
      "show work"
    ].some((k) => text.includes(k))
  ) {
    return `🎨 Here are some of my projects:\n${siteContent.projects}`
  }

  // project-specific
  if (text.includes("hostel")) return siteContent.projects.split("•").find((e) => e.includes("HostelBay"))
  if (text.includes("hrms")) return siteContent.projects.split("•").find((e) => e.includes("HR Management"))
  if (text.includes("ops") || text.includes("operation")) return siteContent.projects.split("•").find((e) => e.includes("Operations Panel"))
  if (text.includes("weather")) return siteContent.projects.split("•").find((e) => e.includes("Weather"))
  if (text.includes("task") || text.includes("api")) return siteContent.projects.split("•").find((e) => e.includes("Task Management"))

  // ========================= SKILLS =========================
  if (
    [
      "skill",
      "skills",
      "tech",
      "stack",
      "expert",
      "technologies",
      "tools",
      "proficient in",
      "what do you know"
    ].some((k) => text.includes(k))
  ) {
    return `🚀 My skills:\n${siteContent.skills}`
  }

  // ========================= GREETINGS =========================
if (
  ["hi", "hello", "hey", "greetings", "yo", "namaste", "hola"]
    .some(k => text === k || text === k + "!")
) {
  return `Hi! I'm Mandy — ${siteContent.assistant.personality}`
}


  // ========================= DEFAULT =========================
  return `I can help with:
• Projects  
• Experience  
• Skills  
• Services  
• Education  
• Contact info  

Try asking: "Tell me about your experience at Freecharge" ✨`
}
