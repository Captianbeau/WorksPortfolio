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
                <h3>Weather App</h3>
                <a href='https://captianbeau.github.io/WeatherApp/'>
                <img src={Weather} alt='Website Screenshot' />
                </a>
                <p className='description'>description</p>
            </div>
            
            <a href='https://github.com/Captianbeau/WeatherApp'>Git Hub</a>
        </div>
        <div>
            <div>
            <h3></h3>
            <a href='https://captianbeau.github.io/Scheduler/'><img src={Schedule} alt='Website Screenshot' /></a>
                
            </div>
            
            <a  href='https://github.com/Captianbeau/Scheduler'>Git Hub</a>
        </div>
        <div>
            <div>
            <h3></h3>
                <img src={Quiz} alt='Website Screenshot'/>
                <p className='description'>description</p>
            </div>
            <a href='https://captianbeau.github.io/Quiz-DarbiesADHD/'>Quiz</a>
            <a href='https://github.com/Captianbeau/Quiz-DarbiesADHD'>Git Hub</a>
        </div>
        <div>
            <div>
            <h3></h3>
                <img src={Garden} alt='Website Screenshot'/>
                <p className='description'>description</p>
            </div>
            <a href='https://captianbeau.github.io/Garden-Planner/'>Garden Planner</a>
            <a href='https://github.com/Captianbeau/Garden-Planner'>Git Hub</a>
        </div>
        <div>
            <div>
            <h3></h3>
                <img src={Books} alt='Website Screenshot'/>
                <p className='description'>description</p>
            </div>
            <a href='https://booksrefactor.onrender.com/'>Google Books</a>
            <a href='https://github.com/Captianbeau/BooksRefactor'>Git Hub</a>
        </div>
    </div>
}