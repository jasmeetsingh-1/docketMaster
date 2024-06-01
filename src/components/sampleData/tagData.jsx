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