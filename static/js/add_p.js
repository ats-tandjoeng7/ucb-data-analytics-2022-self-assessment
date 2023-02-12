// UCB-VIRT-DATA-ANALYTICS-2022, Parto Tandjoeng

// insert paragraph(s)
function addP(txts, divId) {
  let newP = "";
  for (let p = 0; p < txts.length; p++) {
    newP += `<p>${txts[p]}</p>`;
  }
  let htmlDiv = document.getElementById(divId);
  htmlDiv.innerHTML = newP;
}

// insert a footer
function addFooter(txt, divId) {
  let newFooter = `<span>Copyright &copy; 2022 &ndash; ${nowYyyy} ${txt}</span>`;
  let htmlDiv = document.getElementById(divId);
  htmlDiv.innerHTML = newFooter;
}

const goals = [
"<em>In-depth</em> knowhow and techniques, including effectively assessing tools and debugging skills, will make us more efficient and effective. My expectation is this class will equip us with such in-depth knowhow and skills throughout and beyond this course that every cohort could apply to their real jobs. I also hope that we will gain solid data analyst and visualization skills that we can apply immediately without hesitation upon completion. Moreover, I look forward to learning about effective collaboration, time management, useful tips, other useful tools (e.g. Tableau, DataSpell), etc. Although I am new to online classes and feel extremely overwhelmed, I am sure that my growth mindset and your support will help me acquire new knowledge and best-known techniques from the academic support team, cohorts, and younger data scientists.", 
"<em>My</em> objective is to apply the skills that I will learn from this class to empower my current job scopes, enhance my data analyst skill portfolio, and be a catalyst for growth in the workplace. Acquiring a solid foundation of data analyst skills will help us assess efficient tools, adopt best-known methods of shared repos, promote shared development, and enhance collaboration with coworkers while promoting healthy work-life balance. These skills will hopefully help cohorts better understand what, why, and how we strategically choose tools and their companions when addressing complex data visualization, statistical modeling, and ML in an efficient manner."
];
/*
const roles = [
"<em>These</em> past three weeks prior to February 8, 2023 have been precious for me to assess if my learning has met my goals, what we could deliver as a team, and what I could contribute most efficiently to my team's success. My first approach was to assess my strengths and find opportunities to help strengthening a well-rounded team. I volunteered to create a fabricated database from/to Python code, and study and integrate several ML models for predicting bank customer churn rate. Since our initial GitHub repo was full of bugs, I further contributed to prettifying our team's GitHub repo and helped our team release a stable version. I also helped authoring the README.md doc for our team's collaborative GitHub repo. Teamwork makes tasks easier, but sometimes it also triggers conflicts. The greatest challenge was that we did not know the expertise of each team member until we started working as a team and it was tough to reach a consensus without a real program manager. However, our team strived to support one another and we turned the challenge into an opportunity to spot bugs, isolate root cause, and optimize our initial GitHub repo as well as ML models."
];
*/
const sums = [
"<em>This</em> course has equipped us with well-rounded skillsets and expertise of using Excel/VBA, Python, Python APIs, DBMS (PostgreSQL, MongoDB, SQLAlchemy, Flask, Psycopg2), mapping technology (Gmaps, Leaflet, Mapbox, citipy, GeoJSON format), webscraping technology (Selenium, Splinter, webdriver manager, BS4), visualization software (Matplotlib, Plotly, Seaborn, Tableau), web design (HTML, CSS, JS, DevTools, Markdown), statistical analysis with R, big data (PySpark, Hadoop, NLP, Amazon Web Services), machine learning/neural network technology (Scikit-learn, TensorFlow, Keras, TensorFlow Playground), editor (VS Code, Jupyter Notebook, Google Colab, Vim), collaborative technology (GitHub, GitLab, Git Bash), communication tools (Slack, Google Docs), and tenacity.", 
"<em>Our</em> team of five team members from diverse backgrounds was a well-rounded team, meaning that each team member contributed to different roles and tasks. We worked together on predicting bank customer churn rate by using ensemble machine learning models that were suitable for predicting datasets with a dichotomous target variable and imbalanced classes. Based on our preliminary exploratory data analysis (EDA) analyses, we revealed that <b>RandomForestClassifier</b> or <b>BalancedRandomForestClassifier</b> were two best candidates for predicting the bank customer churn dataset. By tuning several hyperparameters of our learning models, we were able to optimize our models and improve the precision-recall of our models from barely reaching 80% to near 90%.", 
"<em>My</em> honest feedback would be: <ul><li>One week to complete a high-quality assignment is too short, but we can make it if we push ourselves to keep accumulating our deliverables one by one consistently.</li><li>Having a few realistic objectives prior to our first project would keep us motivated, for example mastering/contributing 5 skillsets and technologies by the end of our project.</li><li>Being selective in terms of learning models, statistical tests, and effective technologies/software to apply would be best for our growth and for preventing us from getting too overwhelmed.</li><li>Conducting extra research to grasp a concept firmly is critical to be able to deliver high-quality deliverables.</li><li>It would be nice for each group to have two 1-hour zoom slots for presentation rehearsals.</li></ul>"
];
const wins = [
"<em>Finally</em>, besides our team project's repo, representative GitHub repos created by using different software and technologies throughout the final module assignment that I am proud of today are as below. Although I always took time to research more and strive to grasp the concept and deliver refactored code in a well-documented repo, I am sure that I am on the right track to further evolve from here. Thank you!"
];
// add paragraph(s) to html <div> tag
addP(goals, Object.keys({goals}));
addP(roles, Object.keys({roles}));
addP(sums, Object.keys({sums}));
addP(wins, Object.keys({wins}));

// add a footer to html <div> tag
const nowYyyy = (new Date).getFullYear();
const footer = "UCB-VIRT-DATA-ANALYTICS, Parto Tandjoeng";
addFooter(footer, Object.keys({footer})[0]);
