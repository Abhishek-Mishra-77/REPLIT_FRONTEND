import React, { useEffect } from 'react'
import Header from '../Home/Header'
import CreateFileAndFolder from './CreateFileAndFolder';
import SelecteTemplate from './SelecteTemplate';
import { onGetAllLanguagesHandler } from '../../Api/langauge';

const File = ({ folders }) => {
    const [openTemplate, setOpenTemplate] = React.useState(false);
    const [langauges, setLangauges] = React.useState([]);


    useEffect(() => {
        (async () => {
            try {
                const langauges = await onGetAllLanguagesHandler();
                setLangauges(langauges?.langauges);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    return (
        <div className="text-white gap-2 rounded-lg">
            {!openTemplate ?
                <>
                    <Header data={folders} name="Files" />
                    <CreateFileAndFolder setOpenTemplate={setOpenTemplate} />
                </>
                : <SelecteTemplate
                    langauges={langauges}
                    setOpenTemplate={setOpenTemplate}
                />}
        </div>
    )
}

export default File