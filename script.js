
const tutorials = [
    {
        title: "Digital Marketing",
        description: "Learn the basics of digital marketing and how to promote online.",
        icon: "fas fa-chart-line",
        link: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOH-nMMFeSG-DFwyATtUg4YA"
    },
    {
        title: "MS PowerPoint",
        description: "Master the art of creating presentations using MS PowerPoint.",
        icon: "fas fa-power-off",
        link: "https://www.youtube.com/playlist?list=PLUeqxIA-dTSOD_6Qqg73bsITGMJD4UK2A"
    },
    {
        title: "MS Word",
        description: "Learn to create, format, and edit documents in MS Word.",
        icon: "fas fa-file-word",
        link: "https://www.youtube.com/playlist?list=PLvmLqo7__IL7RmzZelJCeQCLJ8R3lKU72"
    },
    {
        title: "MS Excel",
        description: "Understand the basics of spreadsheets and data manipulation in MS Excel.",
        icon: "fas fa-table",
        link: "https://www.youtube.com/playlist?list=PLoyECfvEFOjapi-V-JXxDVQwo9iVN_dF9"
    },
    {
        title: "ChatGPT Prompting",
        description: "Learn how to effectively prompt and interact with AI tools like ChatGPT.",
        icon: "fas fa-comments",
        link: "https://www.youtube.com/playlist?list=PLB72EJWiiyOp1inVyUSK1YnZmE0HX9Bxa"
    },
    {
        title: "Python for Beginners",
        description: "Start learning the fundamentals of Python programming.",
        icon: "fas fa-python",
        link: "https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3"
    },
    {
        title: "Data Analysis with Excel",
        description: "Learn to analyze data with Excel and Google Sheets for insightful results.",
        icon: "fas fa-database",
        link: "https://www.youtube.com/playlist?list=PLNLDEHOJTZSjcyfFIwPP1g31WLoJCyTPw"
    },
    {
        title: "Introduction to Cybersecurity",
        description: "Understand the basics of cybersecurity and how to protect digital assets.",
        icon: "fas fa-shield-alt",
        link: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_"
    },
    {
        title: "Mobile App Development",
        description: "Get started with building mobile apps for Android and iOS.",
        icon: "fas fa-mobile-alt",
        link: "https://www.youtube.com/playlist?list=PLjVLYmrlmjGdDps6HAwOOVoAtBPAgIOXL"
    },
    {
        title: "Game Development Basics",
        description: "Learn the essentials of game design and development principles.",
        icon: "fas fa-cogs",
        link: "https://www.youtube.com/playlist?list=PLBh8phtAyHPUY9fqgs1w6aHJALJ3_fMSc"
    },
    {
        title: "Content Management Systems",
        description: "Learn how to manage website content using CMS platforms like WordPress.",
        icon: "fas fa-cogs",
        link: "https://www.youtube.com/playlist?list=PLN7bty2MYPQFWrJNykm5Jc3EZeqKS_rRk"
    },
    {
        title: "Introduction to Cloud Computing",
        description: "Learn how cloud computing works and its role in modern technology.",
        icon: "fas fa-cloud",
        link: "https://www.youtube.com/playlist?list=PL9"
    }
];


function generateTutorials() {
    const tutorialGrid = document.getElementById("tutorial-grid");
    tutorials.forEach((tutorial) => {
        const tutorialItem = document.createElement("div");
        tutorialItem.classList.add("tutorial-item");

       
        const icon = document.createElement("i");
        icon.classList.add(...tutorial.icon.split(' '));

       
        const title = document.createElement("h3");
        title.textContent = tutorial.title;

       
        const description = document.createElement("p");
        description.textContent = tutorial.description;

       
        const link = document.createElement("a");
        link.href = tutorial.link;
        link.textContent = "Learn More";
        link.classList.add("tutorial-link");

       
        tutorialItem.appendChild(icon);
        tutorialItem.appendChild(title);
        tutorialItem.appendChild(description);
        tutorialItem.appendChild(link);

        
        tutorialGrid.appendChild(tutorialItem);
    });
}

document.getElementById('admin-login').addEventListener('click', function () {
    const correctUserId = "SG23CSD007";
    const correctPassword = "31824";

    const userId = prompt("Enter User ID:");
    const password = prompt("Enter Password:");

    if (userId === correctUserId && password === correctPassword) {
        alert("Login Successful!");
      
        const iframe = document.getElementById("admin-iframe");
        iframe.src = "https://hack.chat/?SB-UNIVERSITY";
        document.getElementById("admin-iframe-section").style.display = "block"; 
    } else {
        alert("Incorrect User ID or Password. Please try again.");
    }
});


window.onload = generateTutorials;
