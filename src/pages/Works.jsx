//application images for links
import Weather from '../assets/images/weatherApp.png';
import Schedule from '../assets/images/Scheduler.png';
import Quiz from '../assets/images/Quiz.png';
import Garden from '../assets/images/GardenPlanner.png';
import Books from '../assets/images/BooksRefactor.png';
import GitLogo from '../assets/images/github-mark.png';

export default function Works() {
    return <div>
        <div>
            <h3>Weather App</h3>

            <div className='works'>
                <a className='workLink' href='https://captianbeau.github.io/WeatherApp/'>
                    <img className='workImg' src={Weather} alt='Website Screenshot' />
                </a>

                <a className='workLink' href='https://github.com/Captianbeau/WeatherApp'>
                    <img className='gitLink' src={GitLogo} alt='GitHub Logo' />
                </a>
            </div>
        </div>
        <div>
            <h3>Scheduler</h3>

            <div className='works'>
                <a className='workLink' href='https://captianbeau.github.io/Scheduler/'>
                    <img className='workImg' src={Schedule} alt='Website Screenshot' />
                </a>

                <a className='workLink' href='https://github.com/Captianbeau/Scheduler'>
                    <img className='gitLink' src={GitLogo} alt='GitHub Logo' />
                </a>
            </div>
        </div>
        <div>
            <h3>Quiz</h3>

            <div className='works'>
                <a className='workLink' href='https://captianbeau.github.io/Quiz-DarbiesADHD/'>
                    <img className='workImg' src={Quiz} alt='Website Screenshot' />
                </a>

                <a className='workLink' href='https://github.com/Captianbeau/Quiz-DarbiesADHD'>
                    <img className='gitLink' src={GitLogo} alt='GitHub Logo' />
                </a>

            </div>
        </div>
        <div>
            <h3>Garden Planner</h3>

            <div className='works'>
                <a className='workLink' href='https://captianbeau.github.io/Garden-Planner/'>
                    <img className='workImg' src={Garden} alt='Website Screenshot' />
                </a>

                <a className='workLink' href='https://github.com/Captianbeau/Garden-Planner'>
                    <img className='gitLink' src={GitLogo} alt='GitHub Logo' />
                </a>

            </div>
        </div>
        <div>
            <h3>Google Books</h3>

            <div className='works'>
                <a className='workLink' href='https://booksrefactor.onrender.com/'>
                    <img className='workImg' src={Books} alt='Website Screenshot' />
                </a>

                <a className='workLink' href='https://github.com/Captianbeau/BooksRefactor'>
                    <img className='gitLink' src={GitLogo} alt='GitHub Logo' />
                </a>
            </div>
        </div>
    </div>
}