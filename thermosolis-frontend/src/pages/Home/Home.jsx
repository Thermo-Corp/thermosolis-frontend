import React from 'react';

// Components
import Header from '../../components/Header/Header';
import TopLevel from '../../components/TopLevel/TopLevel';
import Banner from '../../components/Banner/Banner';
import SquareContainer from '../../components/Container/Square/SquareContainer';

function Home() {
    return (
        <div>
            <TopLevel />
            <Header />
            <Banner />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0 10%" }}>

                <SquareContainer backgroundColor="var(--primary-color)" dimension="235px">
                    <span style={{ fontSize: "100px", fontWeight: "600", lineHeight: "84px", color: "#EBECEE" }}>147</span>
                    <p style={{ color: "#EBECEE", fontSize: "22px", fontWeight: "400", lineHeight: "22px" }}>Projects Completed</p>
                </SquareContainer>

                <SquareContainer backgroundColor="var(--secondary-color)" dimension="235px">
                    <span style={{ fontSize: "100px", fontWeight: "600", lineHeight: "84px", color: "#EBECEE" }}>25+</span>
                    <p style={{ color: "#EBECEE", fontSize: "22px", fontWeight: "400", lineHeight: "22px" }}>Years of Experience</p>
                </SquareContainer>
            </div>
        </div>
    );
};


export default Home;