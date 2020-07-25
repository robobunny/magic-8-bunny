import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import HelpModal from './HelpModal';
import Action from './Action';
import OptionModal from './Modal';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.title = 'Magic 8 Bunny';
        this.subtitle = 'Let robotic rabbits tell you how to live your life.' ;
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.pickFate = this.pickFate.bind(this);
        this.populateList = this.populateList.bind(this);
        this.removeOneOption = this.removeOneOption.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            options: [],
            popBtnClicked: false,
            selectedOption: undefined,
            helpModal: true
        };
    }
    
    removeAllOptions () {
        this.setState(()=>{
            return {
                options: [],
                popBtnClicked: false
            }
        })
    }

    removeOneOption (o) {
        this.setState((prev)=>({
            options: prev.options.filter((v,i)=>i!==o)
        }))
    }

    addOption (newOpt) {
        if (!newOpt) {
            return 'Type in a possible wise answer!'
        } else if (this.state.options.indexOf(newOpt) > -1) {
            return "That answer's already in the list!"
        }

        this.setState((prev)=>({ options: prev.options.concat([newOpt]) }))
    }

    pickFate (e) {
        e.preventDefault();
        const num = Math.floor(Math.random() * this.state.options.length);
        this.setState(()=> ({selectedOption: this.state.options[num]}));
    }

    populateList () {
        this.setState((prev)=>{
            return {
                options: prev.options.concat([
                    'Yes, of course!',
                    'You can count on it!',
                    'Sure as sugar, kid!',
                    'Don\'t ask me that right now!',
                    'I\'ll have to think more on that one ...',
                    'No way!',
                    'Impossible!'
                ]),
                popBtnClicked: true
            }
        })
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            if (json) {
                const options = JSON.parse(json)
                this.setState(()=>({ options }));
            }  
        } catch (error) {
            console.log(error)
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem("options", JSON.stringify(this.state.options));
        }
    }

    closeModal(){
        this.setState(()=>({
            selectedOption: undefined,
            helpModal: false}))
    }

    render() {
        return (
            <div>
                <Header 
                    title={this.title}
                    subtitle={this.subtitle} />
                    <div className="container">
                        <AddOption 
                            addOption={this.addOption}
                        />
                        <Action 
                            hasOptions={this.state.options.length > 0}
                            pickFate={this.pickFate}
                        />
                        <Options 
                            options={this.state.options}
                            removeAllOptions={this.removeAllOptions}
                            removeOneOption={this.removeOneOption}
                            populateList={this.populateList}
                            popBtnClicked={this.state.popBtnClicked}
                        />
                    </div>
                <HelpModal
                    helpModal={this.state.helpModal}
                    closeModal={this.closeModal}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}
