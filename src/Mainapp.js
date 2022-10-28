import './MainApp.css'
import './App.css'

import NavigationBar from './NavigationBar';

import React, { useState } from 'react';


function Body() {

    const [options, setOptions] = useState([
        {
            key: 1,
            option: 'Courses',
            clicked: true
        },
        {
            key: 2,
            option: 'Your Study Rooms',
            clicked: false
        },
        {
            key: 3,
            option: 'Your Teachers',
            clicked: false
        },
    ])


    const [currentOption, setCurrentOption] = useState(0)


    return (
        <div className='mainAppBody'>

            <div className="sidebar">
                <ul className="sidebar-list">
                    {

                        options.map(option => {
                            if (option.clicked == true) {
                                return (<li className="sidebar-clicked" id="sidebar-item1" key={option.key} onClick={() => handleClick(option.key)}>{option.option}</li>)
                            }
                            else {
                                return (<li className="sidebar-items" id="sidebar-item1" key={option.key} onClick={() => handleClick(option.key)}>{option.option}</li>)
                            }
                        })
                    }
                </ul>
            </div>
            <br></br>
            <AppBody option={currentOption} />
        </div>
    )
    function handleClick(itemClicked) {
        console.log(itemClicked)
        setCurrentOption(itemClicked - 1)
        aaa(itemClicked)
        const k = [];
        options.forEach(element => {
            if (element.key == itemClicked) {
                k.push(
                    {
                        ...element,
                        clicked: true
                    }
                )
            }
            else {
                k.push(
                    {
                        ...element,
                        clicked: false
                    }
                )
            }
        });

        setOptions(k)
    }

}

function aaa(value) {
    console.log(value)
}

function AppBody(props) {
    //JSON object from the api is here
    const [courses, setCourse] = useState([
        {
            courseName: "Mathematics for computing",
            last_Access: "Yesterday"
        },
        {
            courseName: "Programming",
            last_Access: "Yesterday"
        },
        {
            courseName: "Program Designing",
            last_Access: "Yesterday"
        },
        {
            courseName: "Mathematics for computing",
            last_Access: "Yesterday"
        },
        {
            courseName: "Programming",
            last_Access: "Yesterday"
        },
        {
            courseName: "Program Designing",
            last_Access: "Yesterday"
        },
    ])

    const [rooms, setRooms] = useState(
        [
            {
                courseName: "Mathematics classroom",
                last_Class: "Yesterday"
            },
        ]
    )

    switch (props.option) {
        case 0:
            return (

                <div className='app-body-contents'>
                    <h1 className='body-header'>Courses</h1>
                    <div className='card-holder'>


                        {
                            courses.map(currentCourse => {
                                return (
                                    <div className='courseCard'>
                                        <h6>{currentCourse.courseName}</h6>
                                        <img src='https://mathematicsart.com/wp-content/uploads/2021/09/100867216_948187235602651_8439077284521967616_n.jpg'></img>
                                        <p>{currentCourse.last_Access}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            )

        case 1:
            return (
                <div className='app-body-contents'>
                    <h1 className='body-header'>Your Study Rooms</h1>
                    <div className='card-holder'>
                        {
                            rooms.map(currentCourse => {
                                return (
                                    <div className='courseCard'>
                                        <h6>{currentCourse.courseName}</h6>
                                        <img src='https://mathematicsart.com/wp-content/uploads/2021/09/100867216_948187235602651_8439077284521967616_n.jpg'></img>
                                        <p>{currentCourse.last_Class}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            )

        case 2:
            return (
                <h1>Cccc</h1>
            )

        default:
            break;
    }
}



export default function () {


    return (
        <div>
            <NavigationBar />
            <Body />

            <br></br>
        </div>
    )
}