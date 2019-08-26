import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import '../style/Playlist.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveActive: false,
            positionInDivX: 0,
            positionInDivY: 0,
            divX: 10,
            divY: 10,
            color: "grey",
            visible: true,
        }
    }

    handleMouseDown = (e) => {

        e.persist();

        this.setState(prevState => ({
            moveActive: !prevState.moveActive,
            positionInDivX: e.nativeEvent.offsetX,
            positionInDivY: e.nativeEvent.offsetY,
            color: "grey"
        }));
    };


    handleMouseMove = (e) => {

        e.persist();

        if (this.state.moveActive) {

            this.setState(prevState => ({
                divX: e.clientX - this.state.positionInDivX,
                divY: e.clientY - this.state.positionInDivY,
                color: "black",
            }));

        }
    };


    handleMouseUp = () => {

        this.setState(prevState => ({
            moveActive: !prevState.moveActive,
            color: "grey"
        }));
    };

    handleXClick = () => {

        const divvv = document.querySelector('div.player');
        divvv.classList.toggle('opacity0');
    }

    render() {
        const divStyles = {
            backgroundColor: `${this.state.color}`,
            top: `${this.state.divY}px`,
            left: `${this.state.divX}px`,
            display: `${this.state.display}`
        }

        const divv = this.state.visible ? <div className="player" onMouseDown={(e) => this.handleMouseDown(e)} onMouseMove={(e) => this.handleMouseMove(e)} onMouseUp={(e) => this.handleMouseUp(e)}
            style={divStyles}> <Playlist />
            <span className="x" onClick={(e) => this.handleXClick(e)}>x</span> </div> : null;

        return (

            <>
                {divv}

            </>
        );
    }
}

export default Player;

