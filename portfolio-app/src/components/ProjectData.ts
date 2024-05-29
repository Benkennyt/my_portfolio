import TaskBender from './images/taskbenderimg.png';
import ExerciseApp from './images/workout app.png';
import ThreeD from './images/3d shirt customizer.png';
import StormSculpt from './images/storm-sculpt.png';
import Geepay from './images/geepay.png'

export const ProjectData = [
    {
        title: 'Task Bender',
        image: TaskBender,
        details: "I built a full stack To-Do app using React and Django to help users manage tasks and projects. The app features secure user authentication, allowing users to sign up, log in, and log out. Users can create and delete boards, add and delete tasks and subtasks, and organize tasks by categorizing them as To-Do, Overdue, In Progress, or Complete. On the front end, I utilized React, Redux, and CSS for a responsive and dynamic user interface. The back end is powered by Django and Django REST Framework, with SQLite used for development and PostgreSQL for production.",
        github: 'https://github.com/Benkennyt/task_manager/',
        url:'https://task-manager-sepia-eta.vercel.app/'
    },
    {
        title: 'Geegpay Dashboard Challenge',
        image: Geepay,
        details: ' I participated in a hackerthon challenge hosted by Geegpay. We were provided a dashboard design to bring to life through frontend development, aiming for functionality, user-experience, responsiveness, and with a tight deadline of few days.',
        github: 'https://github.com/Benkennyt/geepay_challenge',
        url:'https://geepay-challenge-benkenny.vercel.app/',
    },
    {
        title: 'Storm Sculpt',
        image: StormSculpt,
        details: "I developed a weather application designed to deliver accurate and up-to-date weather information using REACT and free API from RAPID API. I focused on user-friendly design and real world functionality. Some of its key features are Current weather snapshot (e.g temperature, humidity, and wind speed), Geolocation, and a 3-day forcast.(App is designed to be responsive, adapting to both mobile and desktop views) ",
        github: 'https://github.com/Benkennyt/storm_sculpt.git',
        url:'https://storm-sculpt.vercel.app/',
    },
    {
        title: 'Shirtzerr',
        image: ThreeD,
        details: ' I developd a 3D shirt customizer using ReactJS, Three.js for the 3D rendering and OpenAI for the AI image generator. Users can interactively customize shirt designs in a realistic virtual environment. The AI component on request by the user creates images based on the prompt given. The customizer supports a wide range of options, including color section and image imports.(App is designed to be responsive, adapting to both mobile and desktop views)',
        github: 'https://github.com/Benkennyt/3d_t-shirt_customizer',
        url:'https://shirtzerr.vercel.app//',
    },
    {
        title: 'VitalFit',
        image: ExerciseApp,
        details: " VitalFit is a web app that facilitates targeted workouts by selecting specific muscles. The app incorporates search bar for finding exercises by name and dynamycally updates the display based on the chosen muscles. Additionally, it seamlessly integrates with Youtube, providing instructional videos for each exercise to enhance the user's understanding and guidance.",
        github: 'https://github.com/Benkennyt/gym_exercises',
        url:'https://vitalfitapp.vercel.app/',
    },
]




