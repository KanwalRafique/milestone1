interface Experience {
    company: string;
    position: string;
    duration: string;
    description: string;
  }
  
  interface Education {
    school: string;
    degree: string;
    year: string;
  }
  
  interface Resume {
    name: string;
    title: string;
    contactInfo: string;
    skills: string[];
    experience: Experience[];
    education: Education[];
  }
  
  const resume: Resume = {
    name: "John Doe",
    title: "Software Developer",
    contactInfo: "Email: john.doe@example.com | Phone: (123) 456-7890",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Node.js"],
    experience: [
      {
        company: "TechCorp",
        position: "Senior Developer",
        duration: "2019 - Present",
        description: "Developing web applications and APIs using modern JavaScript frameworks."
      },
      {
        company: "Web Solutions",
        position: "Frontend Developer",
        duration: "2016 - 2019",
        description: "Building responsive websites and optimizing performance."
      }
    ],
    education: [
      {
        school: "XYZ University",
        degree: "B.Sc. in Computer Science",
        year: "2016"
      }
    ]
  };
  
  document.getElementById('name')!.textContent = resume.name;
  document.getElementById('title')!.textContent = resume.title;
  document.getElementById('contact-info')!.textContent = resume.contactInfo;
  
  const skillsList = document.getElementById('skills')!;
  resume.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
  
  const experienceSection = document.getElementById('experience')!;
  resume.experience.forEach(exp => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${exp.company} - ${exp.position}</h3><p>${exp.duration}</p><p>${exp.description}</p>`;
    experienceSection.appendChild(div);
  });
  
  const educationSection = document.getElementById('education')!;
  resume.education.forEach(edu => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${edu.school}</h3><p>${edu.degree} - ${edu.year}</p>`;
    educationSection.appendChild(div);
  });
  