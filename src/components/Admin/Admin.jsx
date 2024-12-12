import React from 'react';
import Header from '../Home/Header';
 import AllModules from './AllModules';

const Admin = () => {

    const modules = [{ name: "Home", _id: 1 }, { name: "Files", _id: 2 }, { name: "Folders", _id: 3 }, { name: "Langauge", _id: 4 }];

    return (
        <div>
            <Header data={modules} name="Modules" />
            <AllModules modules={modules}/>
        </div>
    )
}

export default Admin