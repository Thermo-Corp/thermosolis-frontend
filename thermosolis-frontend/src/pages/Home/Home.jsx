import React from 'react';

// Components
import Header from '../../components/Header/Header';
import TopLevel from '../../components/TopLevel/TopLevel';
import Banner from '../../components/Banner/Banner';
import RectangleContainer from '../../components/Container/Square/RectangleContainer';
import InlineIconDetails from '../../components/IconDetails/InlineIconDetails/InlineIconDetails';
import SectionCard from '../../components/Section/SectionCard/SectionCard';
import SectionServices from '../../components/Section/SectionServices/SectionServices';

function Home() {
    return (
        <div>
            <TopLevel />
            <Header />
            <Banner />
            <div style={{ display: "flex", justifyContent: "center", height: "410px" }}>

                <RectangleContainer backgroundColor="var(--primary-color)" >
                    <span style={{ fontSize: "100px", fontWeight: "700", lineHeight: "84px", color: "#FFF" }}>147</span>
                    <p style={{ color: "#FFF", fontSize: "22px", fontWeight: "400", lineHeight: "22px" }}>Projects Completed</p>
                </RectangleContainer>

                <RectangleContainer backgroundColor="var(--secondary-color)" >
                    <span style={{ fontSize: "100px", fontWeight: "700", lineHeight: "84px", color: "#FFF" }}>25+</span>
                    <p style={{ color: "#FFF", fontSize: "22px", fontWeight: "400", lineHeight: "22px" }}>Years of Experience</p>
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

                    <InlineIconDetails
                        title='General Contract'
                        description='Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum'
                        icon={<img src={process.env.PUBLIC_URL + "/images/engineer.png"} alt="General Contract" />}
                    />

                    <InlineIconDetails
                        title='Project Planning'
                        description='Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum'
                        icon={<img src={process.env.PUBLIC_URL + "/images/ruler.png"} alt="Project Planning" />}
                    />

                    <InlineIconDetails
                        title='Refurbishment'
                        description='Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum'
                        icon={<img src={process.env.PUBLIC_URL + "/images/measuring-tool.png"} alt="Refurbishment" />}
                    />
                </RectangleContainer>
            </div>

            <SectionCard
                title="With our knowledge we guarente success"
                subtitle="Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat congue"
                description="Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque"
                image={<img src={process.env.PUBLIC_URL + "/images/about-us.png"} alt="With our knowledge we guarente success" />}
                route="/about-us"
                name="About Us"
            />

            <div style={{ margin: "50px 0" }}>
                <SectionServices
                    backgroundImage={process.env.PUBLIC_URL + "/images/services-bg.png"}
                    services={[
                        {
                            icon: process.env.PUBLIC_URL + "/images/construction.png",
                            title: "Research & Analysis",
                            description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                            route: "/general-contract",
                        },
                        {
                            icon: process.env.PUBLIC_URL + "/images/houses.png",
                            title: "Industry Development",
                            description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                            route: "/project-planning",
                        },
                        {
                            icon: process.env.PUBLIC_URL + "/images/industrial.png",
                            title: "Production Launch",
                            description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                            route: "/refurbishment",
                        },
                    ]}
                />
            </div>
        </div >
    );
};


export default Home;