import React, { Component } from 'react';
// import logo from 'logo.svg';
import AppBarDrawer from './components/AppBarDrawer';
import './App.css';
import RadioButtons from './components/RadioButtons';
import PageButtons from './components/PageButtons';

class QuizQuestions2 extends Component {
    render() {
        return (
            <AppBarDrawer appName = "FindMyStudy">
                <div className = "App">
                    <header className = "App-header">
                        <div align="left">
                            <p> 11.) I love to show my intrinsic nature and traits in every location. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 12.) I like to socialize with everyone. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 13.) I do all task systematically. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 14.) I always consult my teachers about questions that boggle my mind. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 15.) I often give guidance to other people when doing a task. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 16.) I am not intimidated by a challenge. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 17.) I am comfortable in respecting higher authority. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 18.) Teachers are the people I respect the most. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 19.) I can easily interact with other people. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 20.) I love camping activities. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>
                        </div>

                        <div align="right">
                            <PageButtons/>
                        </div>
                    </header>
                </div>
            </AppBarDrawer>

        );
    }
}

export default QuizQuestions2;