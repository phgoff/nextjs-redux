import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
class Index extends React.Component{
    
    componentDidMount() {
        this.delayAboutPage();
    }

    delayAboutPage = () => {
        setTimeout( () => {
            this.handleGotoAboutPage();
        }, 3000);
    }
    
    handleGotoAboutPage = () => {
        Router.push('/about')
    }
    render(){
        return (
            <div>
                <h1> Index Page </h1>
                <Link href="/about"><a>About Page</a></Link>
                <button onClick={this.handleGotoAboutPage}>About Page Router</button>
            </div>
        );
    }
}

export default Index;