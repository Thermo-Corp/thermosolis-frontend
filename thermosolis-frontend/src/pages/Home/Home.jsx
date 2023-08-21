import React from 'react';

// Components
import Header from '../../components/Header/Header';
import TopLevel from '../../components/TopLevel/TopLevel';
import Banner from '../../components/Banner/Banner';
import RectangleContainer from '../../components/Container/Square/RectangleContainer';
import InlineIconDetails from '../../components/IconDetails/InlineIconDetails/InlineIconDetails';
import SectionCard from '../../components/Section/SectionCard/SectionCard';
import SectionServices from '../../components/Section/SectionServices/SectionServices';
import SectionProjects from '../../components/Section/SectionProjects/SectionProjects';
import SectionMap from '../../components/Section/SectionMap/SectionMap';
import SectionTestimonials from '../../components/Section/SectionTestimonials/SectionTestimonials';
import Footer from '../../components/Footer/Footer';


function Home() {
    return (
        <div>
            <TopLevel />
            <Header />
            <Banner />
            <div style={{ display: "flex", justifyContent: "center", height: "410px" }}>

                <RectangleContainer backgroundColor="var(--primary-color)" >
                    <span style={{ fontSize: "100px", fontWeight: "700", lineHeight: "84px", color: "#FFF" }}>147</span>
                    <p style={{ color: "#FFF", fontSize: "22px", fontWeight: "400", lineHeight: "22px" }}>Projets réalisés</p>
                </RectangleContainer>

                <RectangleContainer backgroundColor="var(--secondary-color)" >
                    <span style={{ fontSize: "100px", fontWeight: "700", lineHeight: "84px", color: "#FFF" }}>25+</span>
                    <p style={{ color: "#FFF", fontSize: "22px", fontWeight: "400", lineHeight: "22px" }}>Années d'expérience</p>
                </RectangleContainer>

                <RectangleContainer width="501px" height="fit-content"
                    style={{
                        borderTop: "7px solid var(--tertiary-color)",
                        position: "relative",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        top: "-250px",
                        padding: "20px 50px",
                    }}
                >
                    <span style={{ color: "var(--primary-color)", fontSize: "34px", fontWeight: "700", lineHeight: "38px", marginBottom: "30px" }}>
                        Nous Construisons et Gérons des Espaces et des Infrastructures
                    </span>

                    <InlineIconDetails
                        title='Contrat Général'
                        description='Des solutions complètes pour vos projets, de la conception à la réalisation.'
                        icon={<img src={process.env.PUBLIC_URL + "/images/engineer.png"} alt="General Contract" />}
                    />

                    <InlineIconDetails
                        title='Planification de Projets'
                        description="Conception sur mesure pour répondre à vos besoins tout en optimisant l'efficacité énergétique."
                        icon={<img src={process.env.PUBLIC_URL + "/images/ruler.png"} alt="Project Planning" />}
                    />

                    <InlineIconDetails
                        title='Rénovation'
                        description='Transformez vos espaces. Esthétique et fonctionnalité pour un environnement moderne et confortable.'
                        icon={<img src={process.env.PUBLIC_URL + "/images/measuring-tool.png"} alt="Refurbishment" />}
                    />
                </RectangleContainer>
            </div>

            <SectionCard
                route="/about-us"
                name="About Us"
                title="With our knowledge we guarente success"
                subtitle="Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat congue"
                description="Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque"
                image={<img src={process.env.PUBLIC_URL + "/images/about-us.png"} alt="With our knowledge we guarente success" />}
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

            <SectionProjects
                route="/projects"
                name="Our Works"
                title="Our Special Projects"
                projects={[
                    {
                        image: "/images/projects/project-1.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                    },
                    {
                        image: "/images/projects/project-2.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                    },
                    {
                        image: "/images/projects/project-3.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                    },
                    {
                        image: "/images/projects/project-4.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                    },
                    {
                        image: "/images/projects/project-5.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                    }
                ]}
            />

            <div style={{ margin: "100px 0 50px 0" }}>
                <SectionMap image="/images/map.png" />
            </div>

            <SectionTestimonials
                route="/testimonials"
                name="Testimonials"
                title="Our Clients Say"
                testimonials={[
                    {
                        name: "Katy Grey",
                        title: "CEO Grey Industries",
                        description: "lorem 51 dolor sit amet, consectetur adipiscing elit. Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum. lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                    },
                    {
                        name: "John Doe",
                        title: "CEO Grey Industries",
                        description: "Quisque 65 erat ac orci blandit, in sollicitudin tellus vestibulum",
                    },
                    {
                        name: "John Doe",
                        title: "CEO",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum",
                    }
                ]}
            />
            <div style={{ marginTop: "111px" }}>
                <Footer />
            </div>
        </div >
    );
};


export default Home;