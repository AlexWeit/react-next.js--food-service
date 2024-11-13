import { createRoot } from 'react-dom/client'
import { restaurants } from './mock-data/restaurants'

createRoot(document.getElementById('root')).render(
    <div>
        <h1>Restaurants</h1>
        <div style={{display: 'flex'}}>
            <div style={{flex: 1, margin: '0 15px'}}>
                <h2>{restaurants[0].name}</h2>
                <h3>Menu</h3>
                <ul>
                    <li>{restaurants[0].menu[0].name}</li>
                    <li>{restaurants[0].menu[1].name}</li>
                    <li>{restaurants[0].menu[2].name}</li>
                </ul>
                <h3>Reviews</h3>
                <ul>
                    <li>{restaurants[0].reviews[0].text}</li>
                    <li>{restaurants[0].reviews[1].text}</li>
                </ul>
            </div>
            <div style={{flex: 1, margin: '0 15px'}}>
                <h2>{restaurants[1].name}</h2>
                <h3>Menu</h3>
                <ul>
                    <li>{restaurants[1].menu[0].name}</li>
                    <li>{restaurants[1].menu[1].name}</li>
                </ul>
                <h3>Reviews</h3>
                <ul>
                    <li>{restaurants[1].reviews[0].text}</li>
                    <li>{restaurants[1].reviews[1].text}</li>
                    <li>{restaurants[1].reviews[2].text}</li>
                </ul>
            </div>
            <div style={{flex: 1, margin: '0 15px'}}>
                <h2>{restaurants[2].name}</h2>
                <h3>Menu</h3>
                <ul>
                    <li>{restaurants[2].menu[0].name}</li>
                    <li>{restaurants[2].menu[1].name}</li>
                    <li>{restaurants[2].menu[2].name}</li>
                </ul>
                <h3>Reviews</h3>
                <ul>
                    <li>{restaurants[2].reviews[0].text}</li>
                </ul>
            </div>
            <div style={{flex: 1, margin: '0 15px'}}>
                <h2>{restaurants[3].name}</h2>
                <h3>Menu</h3>
                <ul>
                    <li>{restaurants[3].menu[0].name}</li>
                    <li>{restaurants[3].menu[1].name}</li>
                </ul>
                <h3>Reviews</h3>
                <ul>
                    <li>{restaurants[3].reviews[0].text}</li>
                    <li>{restaurants[3].reviews[1].text}</li>
                </ul>
            </div>
        </div>
    </div>

);
