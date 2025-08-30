import chatBotImage from './assets/chat-bot.png';
import './index.css'; // Assuming you have an index.css for Tailwind imports

function App() {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
      {/* Existing CSS styles moved to a separate file or handled by Tailwind config */}
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            color: #e0e0e0;
            overflow-x: hidden;
            background: linear-gradient(to bottom, #151d2f, #0a0e1a);
          }
          .gradient-card {
            background: linear-gradient(to top left, #2c3e50, #1a1a1a);
            color: #f0f0f0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          }
          .dark-text-primary { color: #f0f0f0; }
          .dark-text-secondary { color: #b0b0b0; }
          .dark-border { border-color: #4a4a4a; }
          .btn-primary-glow {
            background: linear-gradient(to right, #6b46c1, #805ad5);
            color: #ffffff;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(107, 70, 193, 0.4);
          }
          .btn-primary-glow:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 20px rgba(107, 70, 193, 0.6);
          }
          .btn-secondary-glow {
            background: linear-gradient(to right, #38a169, #2f855a);
            color: #ffffff;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
          }
          .btn-secondary-glow:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 20px rgba(56, 161, 105, 0.6);
          }
          .card-project {
            background: #1a1a1a;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            border-left: 4px solid transparent;
          }
          .card-project:hover {
            transform: translateY(-8px) rotate(-1deg);
            box-shadow: 12px 25px rgba(0, 0, 0, 0.5);
            border-image: linear-gradient(to bottom, #6b46c1, #805ad5) 1;
          }
          .tag-pill {
            background: #4a4a4a;
            color: #e0e0e0;
            padding: 4px 10px;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 500;
            transition: transform 0.2s ease;
          }
          .tag-pill:hover {
            transform: scale(1.1);
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-filter backdrop-blur-lg bg-black bg-opacity-30">
        <div className="container mx-auto flex justify-center space-x-8 text-lg font-semibold dark-text-primary">
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </nav>
      <div className="mt-20"></div>

      <div className="space-y-24 max-w-4xl w-full p-4 md:p-8">
        <section id="about" className="gradient-card rounded-2xl w-full p-8 md:p-12 space-y-8 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105">
          <div className="flex flex-col items-center space-y-4">
            <img src="https://placehold.co/128x128/222222/ffffff?text=Your+Photo" alt="Your Photo" className="w-32 h-32 rounded-full border-4 border-[#666666] shadow-lg transition-transform duration-300 hover:rotate-3" />
            <h1 className="text-3xl font-bold dark-text-primary">Your Name Here</h1>
            <p className="text-lg dark-text-secondary">Your Job Title, e.g., Full-Stack Developer</p>
          </div>
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold dark-text-primary mb-4 dark-border pb-2">About Me</h2>
            <p className="dark-text-secondary leading-relaxed">
              Focused on delivering efficient, scalable solutions and tackling diverse technical challenges. Proficient in Java, SQL, Frontend, and collaborative problem-solving.
            </p>
          </div>
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold dark-text-primary mb-6 dark-border pb-2">My Resume</h2>
            <a href="assets/Aditi_Pravin_Nimje_Resume.pdf" download="Aditi_Pravin_Nimje_Resume.pdf" className="inline-block px-8 py-4 btn-primary-glow font-bold rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
              Download Resume
            </a>
          </div>
        </section>
        <hr className="my-16 border-t-2 border-[#4a4a4a]" />

        <section id="skills" className="w-full">
          <h2 className="text-3xl font-bold text-center dark-text-primary mb-8">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center shadow-lg transform hover:scale-110 transition-transform">
              <p className="font-semibold">HTML</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center shadow-lg transform hover:scale-110 transition-transform">
              <p className="font-semibold">CSS</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center shadow-lg transform hover:scale-110 transition-transform">
              <p className="font-semibold">JavaScript</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center shadow-lg transform hover:scale-110 transition-transform">
              <p className="font-semibold">ReactJS</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center shadow-lg transform hover:scale-110 transition-transform">
              <p className="font-semibold">NodeJS</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center shadow-lg transform hover:scale-110 transition-transform">
              <p className="font-semibold">Java</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl text-center shadow-lg transform hover:scale-110 transition-transform">
              <p className="font-semibold">SQL</p>
            </div>
          </div>
        </section>
        <hr className="my-16 border-t-2 border-[#4a4a4a]" />

        <section id="projects" className="w-full">
          <h2 className="text-3xl font-bold text-center dark-text-primary mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-project rounded-2xl p-6 space-y-4">
              <img src={chatBotImage} alt="React AI Chatbot" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-bold dark-text-primary">React AI Chatbot</h3>
              <p className="dark-text-secondary text-sm">Developed an AI chatbot in ReactJS integrating API-driven NLP for real-time, context-aware responses.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag-pill">React</span>
                <span className="tag-pill">Node.js</span>
                <span className="tag-pill">MongoDB</span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                <a href="#" target="_blank" className="px-6 py-2 rounded-full btn-primary-glow text-center">Live Demo</a>
                <a href="#" target="_blank" className="px-6 py-2 rounded-full border border-[#4a4a4a] text-center dark-text-secondary hover:bg-[#2c3e50] transition-colors">GitHub Repo</a>
              </div>
            </div>

            <div className="card-project rounded-2xl p-6 space-y-4">
              <img src="https://placehold.co/600x400/1a1a1a/ffffff?text=Project+2+Image" alt="Project 2" className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-bold dark-text-primary">Project Name Two</h3>
              <p className="dark-text-secondary text-sm">Another fantastic project description. Make sure to highlight the key features and technologies you utilized.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="tag-pill">Python</span>
                <span className="tag-pill">SQL</span>
                <span className="tag-pill">Data Analysis</span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                <a href="#" target="_blank" className="px-6 py-2 rounded-full btn-primary-glow text-center">Live Demo</a>
                <a href="#" target="_blank" className="px-6 py-2 rounded-full border border-[#4a4a4a] text-center dark-text-secondary hover:bg-[#2c3e50] transition-colors">GitHub Repo</a>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-16 border-t-2 border-[#4a4a4a]" />

        <section id="experience" className="w-full">
          <h2 className="text-3xl font-bold text-center dark-text-primary mb-8">My Experience</h2>
          <div className="space-y-8">
            <div className="gradient-card rounded-xl p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold dark-text-primary">Software Engineer Intern</h3>
              <p className="text-lg dark-text-secondary mt-1">Company Name | City, State | 2024 - Present</p>
              <ul className="list-disc list-inside mt-4 dark-text-secondary space-y-2">
                <li>Developed and maintained features for a large-scale web application.</li>
                <li>Collaborated with a team of developers using Agile methodologies.</li>
                <li>Contributed to the improvement of code quality and performance.</li>
              </ul>
            </div>
            <div className="gradient-card rounded-xl p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold dark-text-primary">Bachelor of Technology in Computer Science</h3>
              <p className="text-lg dark-text-secondary mt-1">Presidency University | Karnataka, Banglore | 2022- 2026</p>
              <ul className="list-disc list-inside mt-4 dark-text-secondary space-y-2">
                <li>Graduated with honors, specializing in Software Development.</li>
                <li>Completed coursework in Data Structures, Algorithms, and Database Management.</li>
                <li>Active member of the university's hackathon club.</li>
              </ul>
            </div>
          </div>
        </section>
        <hr className="my-16 border-t-2 border-[#4a4a4a]" />

        <section id="contact" className="w-full text-center">
          <h2 className="text-3xl font-bold dark-text-primary mb-4">Contact Me</h2>
          <p className="dark-text-secondary mb-8">Feel free to connect with me. Let's build something amazing together!</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/aditi-nimje-b49893256/" target="_blank" className="btn-primary-glow p-4 rounded-full text-2xl" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/codedbyaditi" target="_blank" className="btn-secondary-glow p-4 rounded-full text-2xl" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.42-4.75s-2.02-.6-4.22 1.62a15.82 15.82 0 0 0-9.61 0C5.42-.6 3.4-.02 3.4-.02A5.07 5.07 0 0 0 3 4.77a5.44 5.44 0 0 0 1.5 3.78c-3.14 1.4-6.44 2.59-6.44 7A5.44 5.44 0 0 0 5 20.23c-1.4 1.4-2.3 2-2.3 2"></path></svg>
            </a>
            <a href="mailto:aditinimje1207@gmail.com" className="btn-primary-glow p-4 rounded-full text-2xl" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;