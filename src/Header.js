import React from 'react';
import './Styleing/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Header (){
    const iconSearch = <FontAwesomeIcon icon={faSearch} />
    const iconLogout = <FontAwesomeIcon icon={faSignOutAlt} />

    const searchBtn = async () => { }  //עתידי כדי שיעבוד צריך להריץ שוב את כל ה 
    // item נראה שעדיף ברידקס
    //  אחרי שעובד צריך לשנות את הפילטר 
    //     var url = `http://localhost:5555/items/?item=${item.name}?brand=${item.brend}?category=${item.category}`
    //     try {
    //         const res = await fetch(url)
    //             .then(r => r.json())
    //         setItems(res)
  
  
    //     } catch (error) { }
  
  
    // }

    return (
        <div className='heading'>
          <img src=''/>
          <form className="searchForm">
            
          <input className='searchInput' type="search" placeholder="חפש מוצר או מותג" />
          <i className='iconClick'
          onClick={searchBtn()}>
            {iconSearch}</i>
        </form>
        
        </div>
    )
}
export default Header;