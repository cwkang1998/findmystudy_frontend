import React, { Component } from 'react';
// import logo from 'logo.svg';
import AppBarDrawer from './components/AppBarDrawer';
import './App.css';
import RadioButtons from './components/RadioButtons';
import PageButtons from './components/PageButtons';

class QuizQuestions extends Component {
    render() {
        return (
            <AppBarDrawer appName = "FindMyStudy">
                <div className = "App">
                    <header className = "App-header">
                    <h1> WHAT'S YOUR PERSONALITY COLOUR? </h1>
                    <h3> Please answer all of the questions below. </h3>

                        <div  align="left" style={{padding:8}}>
                            <p> 1.) I am unable to adapt to new situation / environment quickly. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 2.) The maturity of my mind is older than my age. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 3.) I am very friendly with people. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 4.) I am in the category of "clever" / "intelligent" group of people. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 5.) I am comfortable is maintaining a traditional life. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 6.) I like mental stimulating subjects. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 7.) I like to look different from other people. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 8.) I like to use my spare time doing outdoor activities. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 9.) I truly appreciate family togetherness and living. </p>
                            <div>
                                <RadioButtons/> Yes <RadioButtons/> No
                            </div>

                            <p> 10.) I always read to increase my knowledge. </p>
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

export default QuizQuestions;



