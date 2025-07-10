import { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
    {name: "HTML/CSS", level: 95, category: "Frontend"},
    {name: "JavaScipt", level: 85, category: "Frontend"},
    {name: "React", level: 80, category: "Frontend"},
    {name: "Bootstrap CSS", level: 95, category: "Frontend"},
    {name: "Tailwind CSS", level: 85, category: "Frontend"},
    {name: "Next.js", level: 80, category: "Frontend"},


    
    {name: "Python", level: 85, category: "Data Science"},
    {name: "EDA", level: 80, category: "Data Science"},
    {name: "Machine Learning", level: 75, category: "Data Science"},
    {name: "Deep Learning", level: 70, category: "Data Science"},
    {name: "Linear Algebra for ML", level: 80, category: "Data Science"},
    {name: "SQL/ Excel", level: 85, category: "Data Science"},




    
    {name: "Git/GitHub", level: 75, category: "Tools"},
    {name: "Figma", level: 85, category: "Tools"},
    {name: "VS Code", level: 90, category: "Tools"},
    {name: "Jupyter NoteBook", level: 90, category: "Tools"},
    {name: "Google Colab", level: 95, category: "Tools"},
    {name: "Ms Office", level: 80, category: "Tools"},
]

const category = ["All", "Frontend", "Data Science", "Tools"];

export const Skills = () => {

    const [activeCategory, setactiveCategory] = useState("All");

    const filterSkills = skills.filter(
        (skills) => activeCategory === "All" || skills.category === activeCategory
    )

    return (
    <section 
    id="skills"
    className="py-24 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>


            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {category.map((category, key) =>(
                    <button
                    key={key}
                    onClick={() => setactiveCategory(category)}

                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitazition", 
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}
                        >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterSkills.map((skills, key) =>(
                    <div key={key}
                    className="bg-card p-6 rouonded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skills.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                            style={{width: skills.level + "%"}}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground  ">{skills.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
};