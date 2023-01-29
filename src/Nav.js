import React from 'react';

function Nav(props) {

const navName=[{name:"מזון",key:"Food"},
{   name:"טקסטיל",key:"Textile"},
{ name:"נקיון",key:"Clining"},
{name:"פגישות",key:"Miting"},
{ name:"הכל", key:"All"}
]
    return (
        <nav className='navIdex'>
{navName.map((item) => {
    return ( 
        <button className='navButton' key={item.key}
        onClick={() => { props.onClickfiltersHandler(item.key) }}>{item.name}</button>
    )
})}
         

        </nav>
    );
}
export default Nav;