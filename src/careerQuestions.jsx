import './careerQuestions.css'
const technicalQuestions = [
    {
      "question": "When designing a system, I'm more concerned with:",
      "options": [
        "Ensuring it's scalable and efficient",
        "Exploring new features and possibilities"
      ],
      "answer": "Ensuring it's scalable and efficient"
    },
    {
      "question": "In a brainstorming session, I usually:",
      "options": [
        "Focus on evaluating and refining existing ideas",
        "Generate new, innovative ideas and possibilities"
      ],
      "answer": "Focus on evaluating and refining existing ideas"
    },
    {
      "question": "When working on a project, I'm most interested in:",
      "options": [
        "Optimizing the technical architecture",
        "Envisioning the potential impact on the industry"
      ],
      "answer": "Optimizing the technical architecture"
    },
    {
      "question": "How do you approach a complex technical problem?",
      "options": [
        "I break it down into smaller, manageable components",
        "I consider the broader context and potential solutions"
      ],
      "answer": "I break it down into smaller, manageable components"
    },
    {
      "question": "In a team, I'm most valuable when:",
      "options": [
        "I'm troubleshooting and debugging code",
        "I'm exploring new technologies and opportunities"
      ],
      "answer": "I'm troubleshooting and debugging code"
    },
    {
      "question": "When evaluating a new technology, I'm most concerned with:",
      "options": [
        "Its technical specifications and performance",
        "Its potential to disrupt the industry or create new opportunities"
      ],
      "answer": "Its technical specifications and performance"
    },
    {
      "question": "How do you prioritize tasks in a project?",
      "options": [
        "I focus on the most critical technical components first",
        "I consider the overall vision and goals of the project"
      ],
      "answer": "I focus on the most critical technical components first"
    },
    {
      "question": "In a meeting, I'm most likely to:",
      "options": [
        "Discuss technical details and implementation plans",
        "Explore new ideas and possibilities for the project"
      ],
      "answer": "Discuss technical details and implementation plans"
    },
    {
      "question": "When working on a feature, I'm most interested in:",
      "options": [
        "Ensuring it's technically sound and efficient",
        "Envisioning how it will benefit the end-user"
      ],
      "answer": "Ensuring it's technically sound and efficient"
    },
    {
      "question": "How do you measure the success of a project?",
      "options": [
        "By its technical performance and metrics",
        "By its impact on the industry or society"
      ],
      "answer": "By its technical performance and metrics"
    }
  ];
  
  const codingTheoryQuestions = [
    {
      "question": "What is the time complexity of the following Python code: for i in range(n): ...?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": "O(n)"
    },
    {
      "question": "Which data structure is most suitable for implementing a stack in Python?",
      "options": [
        "List",
        "Tuple",
        "Dictionary",
        "Set"
      ],
      "answer": "List"
    },
    {
      "question": "What is the purpose of the break statement in a Python loop?",
      "options": [
        "To skip to the next iteration",
        "To exit the loop immediately",
        "To restart the loop from the beginning",
        "To print an error message"
      ],
      "answer": "To exit the loop immediately"
    },
    {
      "question": "Which of the following Python functions finds the maximum value in a list of integers?",
      "options": [
        "max_val = arr[0], num > max_val, num, max_val",
        "max_val = arr[-1], num < max_val, num, max_val",
        "max_val = arr[0], num < max_val, num, max_val",
        "max_val = arr[-1], num > max_val, num, max_val"
      ],
      "answer": "max_val = arr[0], num > max_val, num, max_val"
    },
    {
      "question": "What is the difference between pass and continue statements in a Python loop?",
      "options": [
        "pass skips to the next iteration, while continue exits the loop",
        "pass does nothing, while continue skips to the next iteration",
        "pass exits the loop, while continue does nothing",
        "pass and continue are interchangeable"
      ],
      "answer": "pass does nothing, while continue skips to the next iteration"
    },
    {
      "question": "Which of the following is NOT a characteristic of a recursive function in Python?",
      "options": [
        "It calls itself",
        "It has a base case",
        "It uses a loop",
        "It has a fixed number of iterations"
      ],
      "answer": "It uses a loop"
    },
    {
      "question": "What is the purpose of the return statement in a Python function?",
      "options": [
        "To print a message",
        "To exit the function and return a value",
        "To skip to the next line of code",
        "To restart the function from the beginning"
      ],
      "answer": "To exit the function and return a value"
    },
    {
      "question": "Which of the following Python functions reverses a string?",
      "options": [
        "reversed_s = \"\", i = 0, i < len(s), s[i]",
        "reversed_s = \"\", i = len(s) - 1, i >= 0, s[i]",
        "reversed_s = \"\", i = len(s), i > 0, s[i - 1]",
        "reversed_s = \"\", i = len(s) - 1, i >= 0, s[i - 1]"
      ],
      "answer": "reversed_s = \"\", i = len(s) - 1, i >= 0, s[i - 1]"
    },
    {
      "question": "What is the time complexity of the following Python code: for i in range(n): for j in range(n): ...?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": "O(n^2)"
    },
    {
      "question": "Which of the following is a trade-off between time and space complexity in Python?",
      "options": [
        "Using a list comprehension instead of a for loop",
        "Using a generator instead of a list",
        "Using a dictionary instead of a list",
        "All of the above"
      ],
      "answer": "All of the above"
    }
  ];
  
  const networkWizardryQuestions = [
    {
      "question": "What is the primary function of a router in a computer network?",
      "options": [
        "To connect multiple networks",
        "To transmit data between devices",
        "To provide security for network traffic",
        "To manage network bandwidth"
      ],
      "answer": "To connect multiple networks"
    },
    {
      "question": "Which of the following is NOT a layer in the OSI model?",
      "options": [
        "Physical",
        "Data Link",
        "Network",
        "Application",
        "Session"
      ],
      "answer": "Session"
    },
    {
      "question": "Which of the following protocols is used for secure web browsing?",
      "options": [
        "HTTP",
        "HTTPS",
        "FTP",
        "SMTP"
      ],
      "answer": "HTTPS"
    },
    {
      "question": "Which of the following is NOT a type of network topology?",
      "options": [
        "Star",
        "Ring",
        "Mesh",
        "Tree",
        "Square"
      ],
      "answer": "Square"
    },
    {
      "question": "Which of the following is used to assign IP addresses to devices on a network?",
      "options": [
        "DHCP",
        "DNS",
        "FTP",
        "SMTP"
      ],
      "answer": "DHCP"
    },
    {
      "question": "Which of the following is used to convert domain names to IP addresses?",
      "options": [
        "DHCP",
        "DNS",
        "FTP",
        "SMTP"
      ],
      "answer": "DNS"
    },
    {
      "question": "Which of the following is used to transfer files between devices on a network?",
      "options": [
        "FTP",
        "HTTP",
        "HTTPS",
        "SMTP"
      ],
      "answer": "FTP"
    },
    {
      "question": "Which of the following is used to send emails over a network?",
      "options": [
        "FTP",
        "HTTP",
        "HTTPS",
        "SMTP"
      ],
      "answer": "SMTP"
    },
    {
      "question": "Which of the following is used to manage network traffic and prioritize data packets?",
      "options": [
        "QoS",
        "DHCP",
        "DNS",
        "SMTP"
      ],
      "answer": "QoS"
    },
    {
      "question": "Which of the following is used to provide wireless connectivity to devices on a network?",
      "options": [
        "Access Point",
        "Router",
        "Switch",
        "Hub"
      ],
      "answer": "Access Point"
    }
  ];
  
  const databaseDynamicsQuestions = [
    {
      "question": "Which of the following is NOT a type of database?",
      "options": [
        "Relational",
        "Object-oriented",
        "NoSQL",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "Which of the following is used to define the structure of a database table?",
      "options": [
        "Schema",
        "Index",
        "View",
        "Query"
      ],
      "answer": "Schema"
    },
    {
      "question": "Which of the following is used to retrieve data from a database?",
      "options": [
        "Schema",
        "Index",
        "View",
        "Query"
      ],
      "answer": "Query"
    },
    {
      "question": "Which of the following is used to improve database performance?",
      "options": [
        "Schema",
        "Index",
        "View",
        "Query"
      ],
      "answer": "Index"
    },
    {
      "question": "Which of the following is used to provide a simplified view of a database table?",
      "options": [
        "Schema",
        "Index",
        "View",
        "Query"
      ],
      "answer": "View"
    },
    {
      "question": "Which of the following is used to store large amounts of unstructured data?",
      "options": [
        "Relational database",
        "Object-oriented database",
        "NoSQL database",
        "All of the above"
      ],
      "answer": "NoSQL database"
    },
    {
      "question": "Which of the following is used to ensure data consistency and integrity in a database?",
      "options": [
        "Constraints",
        "Triggers",
        "Stored procedures",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "Which of the following is used to manage database transactions?",
      "options": [
        "Constraints",
        "Triggers",
        "Stored procedures",
        "Transactions"
      ],
      "answer": "Transactions"
    },
    {
      "question": "Which of the following is used to execute a set of SQL statements repeatedly?",
      "options": [
        "Constraints",
        "Triggers",
        "Stored procedures",
        "Views"
      ],
      "answer": "Stored procedures"
    },
    {
      "question": "Which of the following is used to map database objects to programming language objects?",
      "options": [
        "Object-relational mapping (ORM)",
        "Object-oriented database",
        "Relational database",
        "NoSQL database"
      ],
      "answer": "Object-relational mapping (ORM)"
    }
  ];
  
  const artificialIntelligenceQuestions = [
    {
      "question": "Which of the following is NOT a type of machine learning algorithm?",
      "options": [
        "Supervised",
        "Unsupervised",
        "Reinforcement",
        "Human-in-the-loop"
      ],
      "answer": "Human-in-the-loop"
    },
    {
      "question": "Which type of machine learning algorithm is used for clustering data?",
      "options": [
        "Decision Tree",
        "Random Forest",
        "K-Means"
      ],
      "answer": "K-Means"
    },
    {
      "question": "What is the term for the process of selecting the most relevant features in a dataset?",
      "options": [
        "Feature engineering",
        "Feature extraction",
        "Feature selection"
      ],
      "answer": "Feature selection"
    },
    {
      "question": "Which evaluation metric is used to measure the performance of a classification model?",
      "options": [
        "Mean Squared Error",
        "R-Squared",
        "F1 Score"
      ],
      "answer": "F1 Score"
    },
    {
      "question": "Which of the following is used to improve the interpretability of a machine learning model?",
      "options": [
        "Feature engineering",
        "Model selection",
        "Hyperparameter tuning",
        "Explainability techniques"
      ],
      "answer": "Explainability techniques"
    },
    {
      "question": "Which of the following is used to handle missing values in a dataset?",
      "options": [
        "Imputation",
        "Interpolation",
        "Extrapolation",
        "All of the above"
      ],
      "answer": "Imputation"
    },
    {
      "question": "Which of the following is used to reduce the dimensionality of a dataset?",
      "options": [
        "Feature selection",
        "Feature extraction",
        "Dimensionality reduction",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "Which of the following is used to cluster similar data points together?",
      "options": [
        "K-means clustering",
        "Hierarchical clustering",
        "Density-based clustering",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "Which of the following is used to classify data points into predefined categories?",
      "options": [
        "Regression",
        "Classification",
        "Clustering",
        "All of the above"
      ],
      "answer": "Classification"
    },
    {
      "question": "Which of the following is used to predict continuous values?",
      "options": [
        "Regression",
        "Classification",
        "Clustering",
        "All of the above"
      ],
      "answer": "Regression"
    }
  ];
  
  const userExperienceQuestions = [
    {
      "question": "Which of the following is NOT a principle of user-centered design?",
      "options": [
        "Empathy",
        "User research",
        "Usability testing",
        "Aesthetics"
      ],
      "answer": "Aesthetics"
    },
    {
      "question": "Which of the following is used to create a visual representation of a user interface?",
      "options": [
        "Wireframe",
        "Prototype",
        "Mockup",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "Which of the following is used to test the usability of a user interface?",
      "options": [
        "Usability testing",
        "A/B testing",
        "User research",
        "All of the above"
      ],
      "answer": "Usability testing"
    },
    {
      "question": "Which of the following is used to understand user behavior and preferences?",
      "options": [
        "User research",
        "Usability testing",
        "A/B testing",
        "All of the above"
      ],
      "answer": "User research"
    },
    {
      "question": "Which of the following is used to create a functional and interactive user interface?",
      "options": [
        "Prototype",
        "Mockup",
        "Wireframe",
        "All of the above"
      ],
      "answer": "Prototype"
    },
    {
      "question": "Which of the following is used to evaluate the accessibility of a user interface?",
      "options": [
        "Accessibility testing",
        "Usability testing",
        "User research",
        "All of the above"
      ],
      "answer": "Accessibility testing"
    },
    {
      "question": "Which of the following is used to create a user interface that is easy to use and navigate?",
      "options": [
        "Information architecture",
        "Interaction design",
        "Visual design",
        "All of the above"
      ],
      "answer": "All of the above"
    },
    {
      "question": "Which of the following is used to understand the user's goals and tasks?",
      "options": [
        "User research",
        "Usability testing",
        "Task analysis",
        "All of the above"
      ],
      "answer": "Task analysis"
    },
    {
      "question": "Which UX design tool is used to visualize the structure and organization of a website or application?",
      "options": [
        "Wireframe",
        "Prototype",
        "Sitemap"
      ],
      "answer": "Sitemap"
    },
    {
      "question": "What is the term for the process of creating a simple, low-fidelity representation of a product or interface?",
      "options": [
        "Prototyping",
        "Wireframing",
        "Storyboarding"
      ],
      "answer": "Wireframing"
    }
  ];
  
  const cyberSecurityQuestions = [
    {
      "question": "Which of the following is NOT a type of cyber attack?",
      "options": [
        "Phishing",
        "Ransomware",
        "SQL injection",
        "Social engineering"
      ],
      "answer": "Social engineering"
    },
    {
      "question": "Which type of malware is designed to encrypt files and demand payment in exchange for the decryption key?",
      "options": [
        "Virus",
        "Worm",
        "Ransomware"
      ],
      "answer": "Ransomware"
    },
    {
      "question": "What is the term for a fake Wi-Fi network set up to trick users into connecting to it?",
      "options": [
        "Evil Twin",
        "Rogue Access Point",
        "Man-in-the-Middle"
      ],
      "answer": "Evil Twin"
    },
    {
      "question": "Which security protocol is used to secure online communications between a web browser and a web server?",
      "options": [
        "SSL",
        "TLS",
        "HTTPS"
      ],
      "answer": "TLS"
    },
    {
      "question": "What is the term for a security vulnerability that is unknown to the vendor or the public?",
      "options": [
        "Zero-day exploit",
        "Known vulnerability",
        "Patchable vulnerability"
      ],
      "answer": "Zero-day exploit"
    },
    {
      "question": "Which of the following is used to protect against malware and viruses?",
      "options": [
        "Antivirus software",
        "Firewall",
        "Encryption",
        "All of the above"
      ],
      "answer": "Antivirus software"
    },
    {
      "question": "Which of the following is used to authenticate users and prevent unauthorized access?",
      "options": [
        "Authentication",
        "Authorization",
        "Accounting",
        "All of the above"
      ],
      "answer": "Authentication"
    },
    {
      "question": "Which of the following is used to ensure the confidentiality, integrity, and availability of data?",
      "options": [
        "CIA triad",
        "AAA framework",
        "NIST cybersecurity framework",
        "All of the above"
      ],
      "answer": "CIA triad"
    },
    {
      "question": "Which of the following is used to respond to a cyber attack?",
      "options": [
        "Incident response",
        "Disaster recovery",
        "Business continuity planning",
        "All of the above"
      ],
      "answer": "Incident response"
    },
    {
      "question": "Which of the following is used to prevent insider threats?",
      "options": [
        "Access control",
        "Data masking",
        "Encryption",
        "All of the above"
      ],
      "answer": "Access control"
    }
  ];
  
  const gameDevelopmentQuestions = [
    {
      "question": "Which of the following is NOT a type of game engine?",
      "options": [
        "Unity",
        "Unreal Engine",
        "Godot",
        "Photoshop"
      ],
      "answer": "Photoshop"
    },
    {
      "question": "Which 3D modeling software is known for its free and open-source nature?",
      "options": [
        "Blender",
        "Maya",
        "3ds Max"
      ],
      "answer": "Blender"
    },
    {
      "question": "Which programming language is commonly used for game development on the Unity platform?",
      "options": [
        "C#",
        "Java",
        "Python"
      ],
      "answer": "C#"
    },
    {
      "question": "What is the primary function of a level editor in game development?",
      "options": [
        "To create 3D models",
        "To design game levels and environments",
        "To program game logic"
      ],
      "answer": "To design game levels and environments"
    },
    {
      "question": "Which audio editing software is commonly used for adding sound effects and music to games?",
      "options": [
        "Audacity",
        "Adobe Audition",
        "FMOD"
      ],
      "answer": "Adobe Audition"
    },
    {
      "question": "Which game engine is known for its ease of use and cross-platform support?",
      "options": [
        "Unity",
        "Unreal Engine",
        "Godot"
      ],
      "answer": "Unity"
    },
    {
      "question": "What is the primary goal of game optimization?",
      "options": [
        "To improve game graphics",
        "To increase game difficulty",
        "To reduce game loading times"
      ],
      "answer": "To reduce game loading times"
    },
    {
      "question": "Which tool is used to identify and fix errors in game code?",
      "options": [
        "Debugger",
        "Compiler",
        "Profiler"
      ],
      "answer": "Debugger"
    },
    {
      "question": "Which AI technique is used to create realistic character movements in games?",
      "options": [
        "Behavior trees",
        "State machines",
        "Inverse kinematics"
      ],
      "answer": "Inverse kinematics"
    },
    {
      "question": "Which digital distribution platform is commonly used to sell and distribute PC games?",
      "options": [
        "Steam",
        "GOG",
        "Epic Games Store"
      ],
      "answer": "Steam"
    }
  ];
  import React, { useState } from 'react';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [topicScores, setTopicScores] = useState({
    codingTheory: 0,
    networkWizardry: 0,
    databaseDynamics: 0,
    artificialIntelligence: 0,
    userExperience: 0,
    cyberSecurity: 0,
    gameDevelopment: 0,
  });

  const allQuestions = [
    ...codingTheoryQuestions,
    ...networkWizardryQuestions,
    ...databaseDynamicsQuestions,
    ...artificialIntelligenceQuestions,
    ...userExperienceQuestions,
    ...cyberSecurityQuestions,
    ...gameDevelopmentQuestions,
  ];

  const currentQuestion = allQuestions[currentQuestionIndex];

  const handleAnswerClick = (selectedOption) => {
    const isCorrect = selectedOption === currentQuestion.answer;
    const topic = getTopicFromQuestion(currentQuestion);

    if (isCorrect) {
      setTopicScores((prevScores) => ({
        ...prevScores,
        [topic]: prevScores[topic] + 1,
      }));
    }

    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < allQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      // Quiz completed, display results
      alert('Quiz completed! Your scores:\n' + JSON.stringify(topicScores, null, 2));
    }
  };

  const getTopicFromQuestion = (question) => {
    if (codingTheoryQuestions.includes(question)) return 'codingTheory';
    if (networkWizardryQuestions.includes(question)) return 'networkWizardry';
    if (databaseDynamicsQuestions.includes(question)) return 'databaseDynamics';
    if (artificialIntelligenceQuestions.includes(question))
      return 'artificialIntelligence';
    if (userExperienceQuestions.includes(question)) return 'userExperience';
    if (cyberSecurityQuestions.includes(question)) return 'cyberSecurity';
    if (gameDevelopmentQuestions.includes(question)) return 'gameDevelopment';
    return 'unknown';
  };

  return (
    <div className='quiz'>
      <h1>Technical Quiz</h1>
      <p>
        Question {currentQuestionIndex + 1} of {allQuestions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;