<a id="readme-top"></a>




[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<h3 align="center">UGAHacksX - Pulse</h3>

  <p align="center">
    UGAHacksX 2025, Rock and Roll baby! What's more punk rock than community? Community driven event tracker webapp, built using Google Maps API, Flask + React, TailwindCSS. PostgresSQL database hosted on Railway.
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

### Presentation
[<img src="/PitchDeck/PitchDeckCover.png">](https://docs.google.com/presentation/d/1rz68NWyyjNdCJne9cE4_L7QEDVHj01LanEwt9PpUVME/edit?usp=sharing)
### Mockup
![Google Maps Webapp UI Mockup](/PitchDeck/FigmaMockupV1.png)
### Final
![Google Maps Webapp UI Actual](/PitchDeck/App.png)

#### Inspiration
Bring power to the people by streamlining community discovery. Community is extremely important in this trying times. I imagined a web-app likes Waze, community posted events, to keep people informed of their community.
#### What it does
Map and database that tracks events, clicking the map will create a marker. Pressing create event then prompts you to write the events name and detail. 
#### How I built it
Python Flask for the back-end, connecting to a PostgresSQL Database hosted on Railway. The front-end is created with Vite + React, using Tailwind CSS for styling. Utilizing the Google Maps API for an accurate map for users to use.
#### Challenges I ran into
In the modern realm of Computer Science, we walk a tight rope with AI. This project showed me how rough ChatGPT and other LLMs can be in the heat of development. Trying to debug an LLMs errors is like trying to catch your own tail. Cobbled together everything with it. Lots of fighting and fiddling. Took a lot of my previous development experience (C++, Java, Python) to troubleshoot on my own outside the one-track mind of LLMs. Many times did GPT just want me to create additional functions to debug when I knew it was a simple typo of an include somewhere. Much better for small snippets. 

Used all the web-dev tools for the first time this weekend. It is a sign of how fast this industry can change. Most tutorials for both Vite + React & Tailwind are now out of date for their setup. They deprecated their old spin-up methods, and just yell at you for having deprecated installs.

Railway for some reason just did not spin-up my first docker container of PostGresSQL, and the only fix was starting a new container. That took 3 hours.
#### Accomplishments that I'm proud of
I did not know anything about web development besides basic HTML and CSS before a day ago. I now know enough to spin up another project in half the time. Tailwind is gorgeous and much easier to use then default CSS, making the application look professional and real.
#### What I learned
Everything to begin my web development journey. That I am actually a developer, even if, for this project I shackled myself to an AI with late stage memory issues. I am capable of being a great developer.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Flask
* PostgressSQL
* Railway (Hosts ^)
* Vite + React
* TailwindCSS
* Google Maps API


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Get a google API Key at [https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Setup your PostgresSQL database using your preffred provider. This project used railway. Get your URI.
3. Clone the repo
   ```sh
   git clone https://github.com/LuisAlanCortes/UGAHacksXPulse.git
   ```
4. Run the repo in a .venv
5. Install py packages
   ```py
   pip install flask flask-cors flask-sqlalchemy flask-migrate python-dotenv
   pip install psycopg2-binaryv
   ```
5. Install NPM packages
   ```sh
   npm install
   npm install @react-google-maps/api axios
   npm install react react-dom
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   
   ```
6. Create a `.env` within the front end folder, and enter your Google Maps API key
   ```js
   VITE_GOOGLE_API_KEY=your_key_here;
   ```
7. Create a `.env` within the back end folder, and enter your postgres URI
   ```py
   DATABASE_URL=postgresql://postgres:your_URI_here
   ```
8. Within the backend folder, run the flask app
   ```sh
   python app.py
   ```
9. Within the frontend folder, run the react app
   ```sh
   npm run dev
   ```
10. Open http://localhost:5174/ to view the project
11. P.S: If you have dev eyes like me, you can enable dark mode by uncommenting the json and single line to activate it in GoogleMapComponent.jsx

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
![Google Maps Webapp UI Actual](/PitchDeck/App.png)
After clicking anywhere on the map to create a marker (it will appear as a blue marker, rather then the existing red), click create event and fill in event name and short description.
![image](https://github.com/user-attachments/assets/4359a6f7-0f34-43c9-a556-82c0f3ef44d2)
These then get added to the postgresSQl database, and added to the sidebar and map as a marker.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
This app is unfortunately missing a lot that would make me truly proud of it. 
- [ ] Host Entirely on Railway
- [ ] Utilize Google Maps API advanced markers
- [ ] AI detection of event type and details
- [ ] User accounts
- [ ] User Voting



<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Luis Cortes - CortesLuisAlan@gmail.com

Project: [This Github](https://github.com/LuisAlanCortes/UGAHacksXPulse)

Pitch Deck: [Google Slides](https://docs.google.com/presentation/d/1rz68NWyyjNdCJne9cE4_L7QEDVHj01LanEwt9PpUVME/edit?usp=sharing)

Devpost: [(Official Submission)](https://devpost.com/software/pulse-bilgt6)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/LuisAlanCortes/UGAHacksXPulse.svg?style=for-the-badge
[contributors-url]: https://github.com/LuisAlanCortes/UGAHacksXPulse/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LuisAlanCortes/UGAHacksXPulse.svg?style=for-the-badge
[forks-url]: https://github.com/LuisAlanCortes/UGAHacksXPulse/network/members
[stars-shield]: https://img.shields.io/github/stars/LuisAlanCortes/UGAHacksXPulse.svg?style=for-the-badge
[stars-url]: https://github.com/LuisAlanCortes/UGAHacksXPulse/stargazers
[issues-shield]: https://img.shields.io/github/issues/LuisAlanCortes/UGAHacksXPulse.svg?style=for-the-badge
[issues-url]: https://github.com/LuisAlanCortes/UGAHacksXPulse/issues
[license-shield]: https://img.shields.io/github/license/LuisAlanCortes/UGAHacksXPulse.svg?style=for-the-badge
[license-url]: https://github.com/LuisAlanCortes/UGAHacksXPulse/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/luisalancortes
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
