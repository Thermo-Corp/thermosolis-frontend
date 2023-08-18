import React from 'react';

// Components
import Header from '../../components/Header/Header';
import TopLevel from '../../components/TopLevel/TopLevel';
import Banner from '../../components/Banner/Banner';
import RectangleContainer from '../../components/Container/Square/RectangleContainer';
import SectionCard from '../../components/Section/SectionCard/SectionCard';

function Home() {
    return (
        <div>
            <TopLevel />
            <Header />
            <Banner />
            <div style={{ display: "flex", justifyContent: "center" }}>

                <RectangleContainer backgroundColor="var(--primary-color)" >
                    <span style={{ fontSize: "100px", fontWeight: "600", lineHeight: "84px", color: "#EBECEE" }}>147</span>
                    <p style={{ color: "#EBECEE", fontSize: "22px", fontWeight: "400", lineHeight: "22px" }}>Projects Completed</p>
                </RectangleContainer>

                <RectangleContainer backgroundColor="var(--secondary-color)" >
                    <span style={{ fontSize: "100px", fontWeight: "600", lineHeight: "84px", color: "#EBECEE" }}>25+</span>
                    <p style={{ color: "#EBECEE", fontSize: "22px", fontWeight: "400", lineHeight: "22px" }}>Years of Experience</p>
                </RectangleContainer>

                <RectangleContainer width="501px" height="549px"
                    style={{
                        borderTop: "7px solid #001ED3",
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        top: "-250px",
                        padding: "20px 50px",
                    }}
                >
                    <span style={{ color: "var(--primary-color)", fontSize: "34px", fontWeight: "700", lineHeight: "38px", marginBottom: "30px" }}>
                        We Construct and Manage Places and Infrastructures
                    </span>

                    <SectionCard
                        title='General Contract'
                        description='Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum'
                        icon={<img src={process.env.PUBLIC_URL + "/images/engineer.png"} alt="General Contract" />}
                    />

                    <SectionCard
                        title='Project Planning'
                        description='Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum'
                        icon={<img src={process.env.PUBLIC_URL + "/images/ruler.png"} alt="Project Planning" />}
                    />
                    
                    <SectionCard
                        title='Refurbishment'
                        description='Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum'
                        icon={<img src={process.env.PUBLIC_URL + "/images/measuring-tool.png"} alt="Refurbishment" />}
                    />
                </RectangleContainer>
            </div>
        </div>
    );
};


export default Home;