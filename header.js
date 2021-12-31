import { directive } from '@babel/types';
import React from 'react';


const Header = () =>{
    return(
        <div>
            <nav>
                <ul>
                    <button>Home</button>
                    <button>About</button>
                    <button>Blog</button>
                    <button>Content</button>
                </ul>
            </nav>
        </div>
    );
}

export default Header;