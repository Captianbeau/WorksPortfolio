import Weather from '../assets/images/weatherApp.png';
import Schedule from '../assets/images/Scheduler.png';
import Quiz from '../assets/images/Quiz.png';
import Garden from '../assets/images/GardenPlanner.png';
import Books from '../assets/images/BooksRefactor.png';
export default function Works() {
    return <div>
        <h2>Works</h2>
        <div>
            <div>
                <img src={Weather} alt='Weather App image' />
                <p className='description'>description</p>
            </div>
            <a>Weather App</a>
            <a>Git Hub</a>
        </div>
        <div>
            <div>
                <img src={Schedule} />
                <p className='description'>description</p>
            </div>
            <a>Scheduling App</a>
            <a>Git Hub</a>
        </div>
        <div>
            <div>
                <img src={Quiz} />
                <p className='description'>description</p>
            </div>
            <a>Quiz</a>
            <a>Git Hub</a>
        </div>
        <div>
            <div>
                <img src={Garden} />
                <p className='description'>description</p>
            </div>
            <a>Garden Planner</a>
            <a>Git Hub</a>
        </div>
        <div>
            <div>
                <img src={Books} />
                <p className='description'>description</p>
            </div>
            <a>Google Books</a>
            <a>Git Hub</a>
        </div>
    </div>
}