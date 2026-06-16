export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-[#ccd6f6]">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-8 md:px-16 py-8 flex items-center justify-between">

          <a
            href="#"
            className="text-[#64ffda] font-medium text-lg"
          >
            Portfolio
          </a>

          <div className="hidden md:flex items-center gap-10 text-sm text-[#8892b0]">
            <a href="#about" className="hover:text-[#64ffda] transition">
              About
            </a>

            <a href="#projects" className="hover:text-[#64ffda] transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-[#64ffda] transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-[#64ffda] transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-4xl px-8 md:px-16">

          <p className="text-[#64ffda] text-sm tracking-widest mb-6">
            HELLO, I'M
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-none">
            Prathibha P
          </h1>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#8892b0] leading-tight">
            Building practical technology solutions
            <br />
            for real-world challenges.
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-[#8892b0] leading-8">
            Computer Science Engineering student focused on
            artificial intelligence, product development,
            data analytics, and entrepreneurship.
          </p>

          <div className="mt-12">
            <a
              href="#projects"
              className="inline-block border border-[#64ffda]
              text-[#64ffda] px-8 py-4 rounded
              hover:bg-[#64ffda]/10 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 md:px-16 pb-40 max-w-5xl"
      >
        <h2 className="text-2xl font-semibold mb-8">
          About
        </h2>

        <p className="text-[#8892b0] leading-8">
  I'm a Computer Science Engineering student passionate
  about building technology that solves real-world
  problems. My interests span artificial intelligence,
  data analytics, product development, and entrepreneurship,
  where I enjoy turning ideas into practical solutions
  with meaningful impact.
</p>

<p className="text-[#8892b0] leading-8 mt-6">
  When I'm not building projects, you'll usually find me
  exploring startup ideas, designing products, analyzing
  trends, working on creative content, or brainstorming
  solutions to everyday problems.
</p>

<p className="text-[#8892b0] leading-8 mt-6">
  I believe some of the best innovations begin with a
  simple question:
</p>

<p className="text-[#64ffda] italic text-lg mt-4">
  "What if this could be done better?"
</p>
      </section>
      {/* Projects */}
<section
  id="projects"
  className="px-8 md:px-16 pb-40 max-w-6xl"
>
  <h2 className="text-2xl font-semibold mb-12">
    Featured Work
  </h2>

  {/* Featured Project */}
  <div className="mb-24">

    <p className="text-[#64ffda] text-sm mb-3">
      Featured Project
    </p>

    <h3 className="text-4xl font-bold mb-6">
      🚑 ClearWay
    </h3>

    <div className="bg-[#112240] rounded-lg p-8">

      <p className="text-[#8892b0] leading-8">
        A context-aware Smart Ambulance Alert and Navigation
        Support System designed to improve emergency response
        times through intelligent drive-mode detection,
        selective notifications, and location-aware alerts.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "Flutter",
          "Firebase",
          "GPS",
          "Android",
          "Mobile Sensors",
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded bg-[#0A192F] text-[#64ffda] text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-6">
        <a
          href="#"
          className="text-[#64ffda] hover:underline"
        >
          Prototype ↗
        </a>

        <a
          href="#"
          className="text-[#64ffda] hover:underline"
        >
          GitHub ↗
        </a>
      </div>

    </div>
  </div>

  {/* Other Projects */}
  <h3 className="text-xl font-semibold mb-8">
    Other Projects
  </h3>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      {
        title: "📄 ResumeBuilder.Bot",
        description:
          "AI-powered resume review and profile summary generation platform helping students improve their resumes and professional profiles.",
        tech: ["Python", "Streamlit", "NLP"],
      },

      {
        title: "🌐 LocalLink",
        description:
          "Community-focused platform for discovering local businesses, services, events, and recommendations through location-based interactions.",
        tech: ["Python", "Firebase", "Maps API"],
      },

      {
        title: "🛣️ NavSafe",
        description:
          "Navigation solution focused on safer route selection using traffic conditions, road information, and travel insights.",
        tech: ["Python", "GPS", "Maps API"],
      },

      {
        title: "🚗 ConvoyX",
        description:
          "Group travel coordination platform that keeps convoy members synchronized and informed during road trips.",
        tech: ["Firebase", "GPS", "Mobile App"],
      },

      {
        title: "🎨 Prompt Generator",
        description:
          "AI-assisted prompt generation tool helping designers create prompts for branding, image generation, and creative workflows.",
        tech: ["Python", "OpenAI API", "Streamlit"],
      },
    ].map((project) => (
      <div
        key={project.title}
        className="bg-[#112240] rounded-lg p-6 hover:-translate-y-1 transition"
      >

        <h4 className="text-xl font-semibold mb-4">
          {project.title}
        </h4>

        <p className="text-[#8892b0] leading-7 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-sm text-[#64ffda]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-[#64ffda] hover:underline"
          >
            GitHub ↗
          </a>

          <a
            href="#"
            className="text-[#64ffda] hover:underline"
          >
            Demo ↗
          </a>
        </div>

      </div>
    ))}
  </div>
</section>
{/* Experience */}
<section
  id="experience"
  className="px-8 md:px-16 pb-40 max-w-5xl"
>
  <h2 className="text-2xl font-semibold mb-12">
    Experience & Leadership
  </h2>

  <div className="space-y-16">

    {/* Tata Forage */}
    <div>
      <p className="text-[#64ffda] text-sm mb-2">
        Sep 2025
      </p>

      <h3 className="text-xl font-semibold">
        Tata Forage – GenAI-Powered Data Analytics Virtual Internship
      </h3>

      <p className="text-[#8892b0] mt-4 leading-8">
        Completed a virtual internship focusing on AI-driven
        financial analytics. Conducted exploratory data
        analysis (EDA), delivered structured insights,
        and proposed a no-code predictive modelling
        approach to support compliance and automation workflows.
      </p>
    </div>

    {/* RISE */}
    <div>
      <p className="text-[#64ffda] text-sm mb-2">
        2025
      </p>

      <h3 className="text-xl font-semibold">
        RISE Internship – Generative AI & Prompt Engineering
      </h3>

      <p className="text-[#8892b0] mt-4 leading-8">
        Completed a task-based internship focused on
        Generative AI and Prompt Engineering using Python,
        involving hands-on experimentation with AI tools,
        prompt structuring, and workflow optimization.
      </p>
    </div>

    {/* Tales by Mav */}
    <div>
      <p className="text-[#64ffda] text-sm mb-2">
        Founder
      </p>

      <h3 className="text-xl font-semibold">
        Tales by Mav
      </h3>

      <p className="text-[#8892b0] mt-4 leading-8">
        Founded and managed a handmade accessories brand.
        Created branding materials, designed marketing
        content, analyzed engagement metrics, and managed
        customer interactions through social media platforms.
      </p>
    </div>

    {/* $2 Challenge */}
    <div>
      <p className="text-[#64ffda] text-sm mb-2">
        Event Leadership
      </p>

      <h3 className="text-xl font-semibold">
        $2 Challenge – Event Coordinator
      </h3>

      <p className="text-[#8892b0] mt-4 leading-8">
        Coordinated planning and execution of a student
        innovation challenge. Managed participant
        coordination, communication, event logistics,
        and team collaboration to ensure smooth execution.
      </p>
    </div>

  </div>
</section>
{/* Skills */}
<section
  id="skills"
  className="px-8 md:px-16 pb-40 max-w-5xl"
>
  <h2 className="text-2xl font-semibold mb-12">
    Skills
  </h2>

  <div className="grid md:grid-cols-2 gap-10">

    <div>
      <h3 className="text-lg font-semibold mb-4">
        Technical Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          "Python",
          "SQL",
          "Power BI",
          "Excel",
          "GitHub",
          "Data Analysis",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-[#112240] px-4 py-2 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">
        Soft Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          "Leadership",
          "Communication",
          "Problem Solving",
          "Teamwork",
          "Adaptability",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-[#112240] px-4 py-2 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>
 
 <section
  id="certifications"
  className="px-8 md:px-16 pb-40 max-w-6xl"
>
  <h2 className="text-2xl font-semibold mb-12">
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      {
        title: "Introduction to Generative AI",
        issuer: "Google Cloud × Simplilearn",
        year: "2024",
      },

      {
        title: "GenAI Powered Data Analytics",
        issuer: "Tata × Forage",
        year: "2025",
      },

      {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte × Forage",
        year: "2025",
      },

      {
        title: "Product Management Job Simulation",
        issuer: "Electronic Arts × Forage",
        year: "2026",
      },

      {
        title: "Generative AI & Prompt Engineering",
        issuer: "RISE Internship Program",
        year: "2026",
      },

      {
        title: "C Programming Course",
        issuer: "SkillRack",
        year: "2025",
      },

      {
        title: "Data Structure - C Course",
        issuer: "SkillRack",
        year: "2026",
      },
    ].map((cert) => (
      <div
        key={cert.title}
        className="bg-[#112240] p-6 rounded-lg hover:-translate-y-1 transition"
      >
        <h3 className="font-semibold text-lg">
          {cert.title}
        </h3>

        <p className="text-[#64ffda] mt-2">
          {cert.issuer}
        </p>

        <p className="text-[#8892b0] mt-3">
          {cert.year}
        </p>
      </div>
    ))}
  </div>
</section>

{/* Contact */}
<section
  id="contact"
  className="px-8 md:px-16 pb-32 text-center"
>
  <h2 className="text-2xl font-semibold mb-6">
    Get In Touch
  </h2>

  <p className="text-[#8892b0] max-w-xl mx-auto leading-8">
    I'm always interested in discussing projects,
    internships, startup ideas, AI applications,
    and opportunities to build impactful technology.
  </p>

  <div className="mt-10 flex flex-wrap justify-center gap-8">

    <a
      href="https://github.com/prathibha-1314"
      target="_blank"
      className="text-[#64ffda] hover:underline"
    >
      GitHub ↗
    </a>

    <a
      href="https://www.linkedin.com/in/prathibha-p-13-14bccp/"
      target="_blank"
      className="text-[#64ffda] hover:underline"
    >
      LinkedIn ↗
    </a>

   <a
  href="mailto:pprathibha1314@gmail.com"
  className="text-[#64ffda] hover:underline"
>
  pprathibha1314@gmail.com
</a>

  </div>

  <p className="mt-16 text-sm text-[#8892b0]">
    Designed & Developed by Prathibha P
  </p>
</section>

    </main>
  );
} 
