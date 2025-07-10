
import { Briefcase, Code, User } from "lucide-react"



export const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative"
    >
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6">
            <h3>Passionate data scientist and web developer.</h3>
            <p className="text-muted-foreground">
              With over 2 years of experience in data science and web development,
              I specialize in creating AI-driven models with interactive web app
              and also, I am ensure that my web is responsive, accessible, and secure
              using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I am Passionate about creating elegant solutions to complex problem,
              future forecasting, machine learning models as well as data analysis/
              visualization in my particular project. I am constantly learning new technologies
              and techniques to stay at forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch</a>

              <a href="/public/Ms_Afia_resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                {" "}
                Download CV</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex item-start gap-4">
                <div className="p-2 h-10 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font -semibold text-lg">Data Scientist</h4>
                  <p className="text-muted-foreground">
                    Creating AI-driven Dashboard with modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex item-start gap-4">
                <div className="p-3 h-12 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font -semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating interactive web based application and UI/UX Design.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex item-start gap-4">
                <div className="p-3 h-12 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font -semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Learning projects from conceptual to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
