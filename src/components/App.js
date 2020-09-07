import React, { useState, useEffect } from 'react';
import AskQuestion from './AskQuestion';
import AddOption from './AddOption';
import Header from './Header';
import HelpModal from './HelpModal';
import OptionsList from './OptionsList';
import OptionModal from './Modal';

 const App = () => {
    const title = 'Magic 8 Bunny';
    const subtitle = 'Let a robotic rabbit tell you how to live your life.' ;

    const [options, setOptions] = useState([]);
    const [popBtnClicked, setPopBtnClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState(undefined);
    const [helpModal, setHelpModal] = useState(true);
    
    useEffect(()=>{
        try {
            const json = localStorage.getItem('options');
            if (json) {
                const optionList = JSON.parse(json)
                setOptions(optionList);
            }
        } catch (error) {
            console.log(error)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("options", JSON.stringify(options));
    },[options])

    const removeAllOptions = () => {
        setOptions([]);
        setPopBtnClicked(false);
    }

    const removeOneOption = (o) => {
        setOptions(options.filter((v,i)=>i!==o));
    }

    const addOption = (newOpt) => {
        if (!newOpt) {
            return 'Type in a possible wise answer!'
        } else if (options.indexOf(newOpt) > -1) {
            return "That answer's already in the list!"
        }
        setOptions(options.concat([newOpt]));
    }

    const pickFate = (e) => {
        e.preventDefault();
        const num = Math.floor(Math.random() * options.length);
        setSelectedOption(options[num]);
        e.target.elements.question.value = "";
    }

    const populateList = () => {
        setOptions(options.concat([
            'Yes, of course!',
            'You can count on it!',
            'Sure as sugar, kid!',
            'Don\'t ask me that right now!',
            'I\'ll have to think more on that one ...',
            'No way!',
            'Impossible!'
        ]));
        setPopBtnClicked(true);
    }

    const closeModal = () => {
        setSelectedOption(undefined);
        setHelpModal(false);
    }

    return (
        <div>
            <Header 
                title={title}
                subtitle={subtitle} 
            />
                <div className="container">
                    <AddOption 
                        addOption={addOption}
                    />
                    <AskQuestion 
                        hasOptions={options.length > 0}
                        pickFate={pickFate}
                    />
                    <OptionsList 
                        options={options}
                        removeAllOptions={removeAllOptions}
                        removeOneOption={removeOneOption}
                        populateList={populateList}
                        popBtnClicked={popBtnClicked}
                    />
                </div>
            <HelpModal
                helpModal={helpModal}
                closeModal={closeModal}
            />
            <OptionModal 
                selectedOption={selectedOption}
                closeModal={closeModal}
            />
        </div>
    );
}


export default App;
