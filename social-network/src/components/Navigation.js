import React from 'react'; 
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Navigation = ()=> (
    <div> 
        <ul> 
            <li> 
                <Link to = {ROUTES.SIGN_IN}>sign in</Link>
            </li>
            <li> 
                <Link to = {ROUTES.LANDING}>Landing</Link>
            </li>
            <li> 
                <Link to = {ROUTES.HOME}>Home</Link>
            </li>
           
        </ul>
    </div>
);

export default Navigation; 