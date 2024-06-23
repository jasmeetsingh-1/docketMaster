const tag_data = [
    {
        id: 1,
        colorCode: "#F8DFC8",
        tagTitle: "Meetings"
    },
    {
        id: 2,
        colorCode: "#F8ECC8",
        tagTitle: "UI design"
    },
    {
        id: 3,
        colorCode: "#C8EAF7",
        tagTitle: "Development"
    },
    {
        id: 4,
        colorCode: "#C8F8CC",
        tagTitle: "UX research"
    },{
        id:5,
        colorCode: "rgb(15 114 104 / 11%)",
        tagTitle:"Documentation",
    }
];

export const tagData = tag_data;



const project_task = {
    toDo: [
      {
        id:1,
        title: "Create a Visual Style Guide",
        dueTime: "09.00 AM - 09.30 AM",
        tagId:5,
      },
      {
        id:2,
        title: "Local setup Doc",
        dueTime: "09.00 AM - 10.30 AM",
        tagId:5,
      },
      {
        id:3,
        title: "Ui fixes for website",
        dueTime: "09.00 AM - 09.30 AM",
        tagId:2,
      },
    ],
    inProgress: [
      {
        id:4,
        title: "Complete environment Setup",
        dueTime: "09.00 AM - 10.30 AM",
        tagId:3,
      },
    ],
    completed: [],
    overdue: [],
  };

  export const projectData = project_task;

  const notes = [
    {
      title: "ChatGPT Tricks for business marketing",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima accusantium, nisi aut nihil illo magni amet.",
      createdDate: "Apr 2, 2023",
      tags: ["Tech", "AI"],
    },
    {
      title: "Maximizing Productivity with AI Tools",
      description: "Discover how artificial intelligence can streamline your daily tasks and improve overall efficiency in your workflow.",
      createdDate: "Mar 15, 2023",
      tags: ["Productivity", "AI"],
    },
    {
      title: "The Future of Tech: Innovations to Watch",
      description: "An in-depth look at the upcoming technologies that are set to revolutionize various industries.",
      createdDate: "May 10, 2023",
      tags: ["Tech", "Innovation"],
    },
    {
      title: "Marketing Strategies in the Digital Age",
      description: "Effective marketing techniques tailored for the modern, digital-savvy audience.",
      createdDate: "Feb 25, 2023",
      tags: ["Marketing", "Digital"],
    },
    {
      title: "AI in Healthcare: Opportunities and Challenges",
      description: "Exploring the impact of artificial intelligence on the healthcare sector, from diagnostics to treatment.",
      createdDate: "Jun 5, 2023",
      tags: ["Healthcare", "AI"],
    }
  ];
  
  export const notesData = notes;