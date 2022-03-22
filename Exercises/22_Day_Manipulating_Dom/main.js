// Accessing document Elements
const wrapper = document.querySelector('.wrapper');

// Main Title
const title = document.createElement('h1');
const challengeYear = document.createElement('span');

title.innerText = asabenehChallenges2020.challengeTitle;
challengeYear.innerText = ' ' + asabenehChallenges2020.challengeYear;
challengeYear.style.fontSize = '2.5rem'
title.appendChild(challengeYear);
title.style.fontFamily = 'arial';
title.style.fontSize = '1.5rem';

// Subtitle
const subTitle = document.createElement('h2');
subTitle.setAttribute('class', 'subtitle')
subTitle.innerText = asabenehChallenges2020.challengeSubtitle;

// Clock
const time = document.createElement('div');
time.setAttribute('id', 'time');
setInterval(liveTime, 1000);

// Challenge List
const challengeList = document.createElement('ul');
function challangeMaker(anArray) {
    for(let i = 0; i < anArray.length; i++) {
        const challengeItems = document.createElement('li');
        challengeItems.setAttribute('class', 'challengeList')
        const challengeName = document.createElement('p');
        const challangeTopics = document.createElement('details');
        challengeName.innerHTML = anArray[i].name;

        // Setting details.innerHTML
        const summary = document.createElement('summary');
        summary.innerHTML = anArray[i].name.split(' ').slice(3, ).join(" ");
        for (let t = 0; t < anArray[i].topics.length; t++) {
            const topic = document.createElement('p');
            topic.append(anArray[i].topics[t]);
            challangeTopics.append(summary, topic);
        }

        // Challenge Status and its color
        const challengeStatus = document.createElement('p');
        challengeStatus.innerHTML = `<p>${anArray[i].status}</p>`;
        if (anArray[i].status==='Done'){
            challengeItems.style.background = "#33db33";
        } else if (anArray[i].status=='Ongoing') {
            challengeItems.style.background = "#e9e914";
        } else {
            challengeItems.style.background = "#e74444";
        }
        
        challengeItems.append(challengeName, challangeTopics, challengeStatus);
        challengeList.appendChild(challengeItems);
    };
}

challangeMaker(asabenehChallenges2020.challenges);

// ----------- Second Section of page (author's Introduction) ---------------
const aboutAuthor = asabenehChallenges2020.author;
const introSection = document.createElement('section');
const introHeading = document.createElement('h1');
const socialLinksContainer = document.createElement('div');

// Author's Name as main heading of section
introHeading.innerHTML = `${aboutAuthor.firstName} ${aboutAuthor.lastName}`;

// Icons and links
for (let i=0; i<aboutAuthor.socialLinks.length; i++) {
    // console.log(aboutAuthor.socialLinks[i]);
    const socialLinks = document.createElement('a')
    socialLinks.innerHTML = aboutAuthor.socialLinks[i].fontawesomeIcon;
    socialLinks.setAttribute('href', `${aboutAuthor.socialLinks[i].url}`);
    socialLinks.style.fontSize = '32px';
    socialLinksContainer.append(socialLinks);
}

// Introduction paragraph by Author
const introPara = document.createElement('p');
introPara.innerHTML = aboutAuthor.bio;

// Author's resume
const resume = document.createElement('div');
const titles = document.createElement('div');
const skills = document.createElement('div');
const qualifications = document.createElement('div');
resume.classList = 'resume';

function funcTwo(aboutAuthorArray, tag, heading) {
    const head = document.createElement('h4');
    head.innerHTML = heading;
    tag.append(head);
    for (let i=0; i < aboutAuthorArray.length; i++) {
        const oneByOne = document.createElement('p');
        oneByOne.innerHTML = `${aboutAuthorArray[i]}`;
        tag.append(oneByOne);
    }
}

function titleFunc(aboutAuthorArray, tag, heading) {
    const head = document.createElement('h4');
    head.innerHTML = heading;
    tag.append(head);
    for (let i=0; i < aboutAuthorArray.length; i++) {
        const oneByOne = document.createElement('p');
        oneByOne.innerHTML = `${aboutAuthorArray[i][0]} ${aboutAuthorArray[i][1]}`;
        tag.append(oneByOne);
    }
}

titleFunc(aboutAuthor.titles, titles, "Titles");
funcTwo(aboutAuthor.skills, skills, "Skills");
funcTwo(aboutAuthor.qualifications, qualifications, "Qualifications");


resume.append(titles, skills, qualifications);

// Keywords
const keywords = document.createElement('div');
keywords.innerHTML = '<h4>Keywords</h4>';
const colors = ['red', 'green', 'skyblue', 'yellow', 'khaki', 'brown'];
for (let i=0; i < asabenehChallenges2020.keywords.length; i++) {
    keywords.innerHTML += `<span class='keyword'>${asabenehChallenges2020.keywords[i]}</span>`;
}

const setColor = document.getElementsByClassName('keyword');
// const setColor = document.getElementsByClassName('keyword');
for (let i=0; i<setColor.length; i++) {
    var color = colors[Math.floor(Math.random()*colors.length)];
    console.log(setColor[i]);
}


introSection.append(introHeading, socialLinksContainer, introPara, resume);

// Inserting CSS in Document
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
* {
    font-family: arial;
}

.wrapper {
    text-align: center;
    max-width: 900px;
    margin: auto
}

#time {
    display: inline-block;
    padding: 10px;
}

h1, h2, #time {
    text-align: center;
}

.subtitle {
    text-decoration: underline;
    color: darkblue;
    font-size: 1.1rem
}

ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 0;
    margin: auto;
    margin-top: 10px;
}

.challengeList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    list-style: none;
    margin: 1px;
    padding: 10px 25px;
}

.resume {
    display: flex;
    justify-content: space-between;
}

.keyword {
    margin: 1px;
    padding: 1px;
}
`;

wrapper.append(title, subTitle, time, challengeList, style, introSection, keywords);

// Code for Clock
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function liveTime() {
    const now = new Date();
    let year = now.getFullYear();
    let month = monthNames[now.getMonth()];
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let currentTime = `${month} ${date},${year} ${hour}:${minute}:${second}`;
    time.innerText = currentTime;

    let r = Math.floor((Math.random() * 255)) + 1;
    let g = Math.floor((Math.random() * 255)) + 1;
    let b = Math.floor((Math.random() * 255)) + 1;
    time.style.background = `rgb(${r}, ${g}, ${b})`;
    challengeYear.style.color = `rgb(${g}, ${r}, ${b})`;
}
