import React, { useEffect, useState } from 'react';
import Header from './Header';
import Headline from './Headline';
import TheIdea from "./TheIdea";
import Tasks from './Tasks';



function Home() {
    const [tasks, setTasks] = useState([])//מוצרים

    return (
        <div className='App'>
             {/*<Nav /> */}
            <Header />
            <Headline />
            <TheIdea/>
            <Tasks tasks={tasks} />

        </div>
    )
}
export default Home;