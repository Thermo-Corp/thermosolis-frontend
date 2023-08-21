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
                name="À propos de nous"
                title="Bien plus qu'un simple savoir-faire"
                subtitle="Avec notre expertise, nous garantissons votre succès."
                description="Thermosolis, c'est une équipe passionnée et dévouée qui met son expertise en plomberie, chauffage, pompes à chaleur, ventilation et climatisation au service de votre confort. Nous transformons des espaces en véritables havres de bien-être grâce à notre engagement envers l'esthétique, la fonctionnalité et l'efficacité énergétique."
                image={<img src={process.env.PUBLIC_URL + "/images/about-us.png"} alt="With our knowledge we guarente success" />}
            />

            <div style={{ margin: "50px 0" }}>
                <SectionServices
                    backgroundImage={process.env.PUBLIC_URL + "/images/services-bg.png"}
                    services={[
                        {
                            icon: process.env.PUBLIC_URL + "/images/construction.png",
                            title: "Plomberie & Chauffage",
                            description: "Des solutions complètes pour la plomberie et le chauffage, garantissant votre confort toute l'année.",
                            route: "/general-contract",
                        },
                        {
                            icon: process.env.PUBLIC_URL + "/images/houses.png",
                            title: "Pompes à Chaleur",
                            description: "Choisissez la pompe à chaleur idéale pour votre espace, alliant confort et efficacité énergétique.",
                            route: "/project-planning",
                        },
                        {
                            icon: process.env.PUBLIC_URL + "/images/industrial.png",
                            title: "Ventilation & Climatisation",
                            description: "Circulation d'air optimale et température idéale grâce à nos solutions de ventilation et de climatisation.",
                            route: "/refurbishment",
                        },
                    ]}
                />
            </div>

            <SectionProjects
                route="/projects"
                name="Nos travaux"
                title="Nos Projets récents"
                projects={[
                    {
                        image: "/images/projects/project-1.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum1",
                    },
                    {
                        image: "/images/projects/project-2.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum2",
                    },
                    {
                        image: "/images/projects/project-3.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum3",
                    },
                    {
                        image: "/images/projects/project-4.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum4",
                    },
                    {
                        image: "/images/projects/project-5.png",
                        title: "Project Name",
                        description: "Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum5",
                    }
                ]}
            />

            <div style={{ margin: "100px 0 50px 0" }}>
                <SectionMap image="/images/map.png" />
            </div>

            <SectionTestimonials
                route="/testimonials"
                name="Témoignages"
                title="Ils nous font confiance"
                testimonials={[
                    {
                        name: "Sophie Martin",
                        title: "Fondatrice, Martin & Co",
                        description: "Travailler avec votre équipe a été une expérience incroyable. Vous avez su comprendre nos besoins et livrer un produit qui a dépassé nos attentes. Nous sommes ravis des résultats obtenus et nous recommandons vivement vos services professionnels.",
                    },
                    {
                        name: "Alexandre Dupont",
                        title: "Directeur Marketing, Dupont Industries",
                        description: "Les solutions que vous avez développées pour notre entreprise ont eu un impact significatif sur notre croissance. Votre expertise en matière de stratégie numérique et de développement web a été inestimable. Merci pour votre engagement exceptionnel.",
                    },
                    {
                        name: "Laura Tremblay",
                        title: "CEO, Tremblay Tech",
                        description: "Je suis impressionnée par la qualité du travail fourni par votre équipe. Votre attention aux détails et votre capacité à répondre à nos besoins spécifiques ont été remarquables. Nous sommes impatients de continuer à collaborer avec vous.",
                    },
                    {
                        name: "David Gagnon",
                        title: "Directeur des Opérations, Gagnon Group",
                        description: "Votre engagement envers la satisfaction du client est tout simplement exemplaire. Votre équipe a su répondre à nos questions et préoccupations de manière proactive et professionnelle. Nous sommes ravis de notre partenariat avec votre entreprise.",
                    },
                    {
                        name: "Isabelle Lavoie",
                        title: "Responsable des Ressources Humaines, Lavoie Corp",
                        description: "Nous tenons à vous remercier pour votre dévouement et votre travail acharné pour répondre à nos besoins. Votre expertise technique et votre approche collaborative ont contribué à faire de notre projet un succès retentissant.",
                    },
                ]}
            />

            <div style={{ marginTop: "111px" }}>
                <Footer />
            </div>
        </div >
    );
};


export default Home;