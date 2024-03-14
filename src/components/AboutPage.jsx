
import { Col, Container, Row } from "react-bootstrap";

const AboutPage = () => {
  return (
    <>
      <Container>
        <div>
          <h1 className="text-center my-5">ABOUT OUR AGENCY</h1>
          {/* <p className='mb-4'>Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh, our team will help you from the beginning including all the paper works and our highly Religious trainers will guide and train you for the Umrah. Obokash.com also has Ramadan Umrah package from Bangladesh for those who seek to perform it during Ramadan month of this year. Although the rush for Umrah during Ramadan is quite high, we make sure that you will get the best accommodation and facilities during this rush hour</p> */}
        </div>
        <Row>
          <Col className="m-auto" md="8">
            <p className="aboutDis">
              obokash is a full-service Outbound Tour Operator in Bangladesh.
              The founder of obokash is a 100% tourism professional with
              knowledge of most of the destinations and services in the world
              for people to enjoy. Our specialized departments with expertise
              offer a variety of services. Each department works independently
              to provide the best services to our customers& clients and become
              the best travel agency in Bangladesh, focusing on creating
              friendship and a long-lasting relationship with our beloved
              clients. In the year 2013, we decided to create a tour company by
              the name obokash to specialize in the receptive tourism market and
              to achieve the title of the best tours and travel company in
              Bangladesh. In this regard, we have contracts and alliances with
              most of the hotels, tourist organizations & companies in most of
              the countries around the world that help us provide the best
              quality service to our clients. Therefore, we investigate every
              single detail of your trip, to ensure each sector has all the
              ingredients to satisfy our clients and help us become the best
              tour operator in Bangladesh. We can proudly talk of the following
              achievements
            </p>

            <ul>
              <li>
                Certified travel agency of Bangladesh Government – Ministry of
                Civil Aviation and Tourism (Reg. No. 0006663)
              </li>
              <li>IATA Accredited Agent (Code: 42337654)</li>
              <li>
                Proud member of Association of Travel Agents of Bangladesh- ATAB
                (Reg. No. 13889)
              </li>
              <li>
                Proud member of Tour Operators Association of Bangladesh - TOAB
                (Membership No. 479)
              </li>
              <li>
                Proud member of Bangladesh Outbound Tour Operators Forum (BOTOF)
              </li>
              <li>
                Active alliances and networking with other agencies to serve its
                international clientele
              </li>
              <li>Growing corporate clients</li>
              <li>Accepts Credit Card transactions</li>
            </ul>

            <div>
              <h3 className="border-bottom mb-2">VISION:</h3>
              <p>
                To dominate the tourism industry by excellence in service with
                innovation & creative concepts in the global marketplace for our
                clients that will help us achieve the title of best travel
                agency in Bangladesh.{" "}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="border-bottom mb-2">MISSION:</h3>
              <p>
                Provide our clients with unforgettable travel experiences with
                guaranteed more than satisfactory services that exceed the level
                of their expectations.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="border-bottom mb-2">SERVICE:</h3>
              <p>
              Professional customer consultation providing hassle-free travel and journey. Creative but determined approach to search for the most appropriate travel arrangements and accommodations and identifying the best possible values. Our travel consultants are friendly, polite, professional, and experienced in accommodating both the seasoned traveler and those who are new to the world of travel. 
              </p>
            </div>
            <div className="mt-5">
              <h3 className="border-bottom mb-2">VALUES:</h3>
              <p>
                To dominate the tourism industry by excellence in service with
                innovation & creative concepts in the global marketplace for our
                clients that will help us achieve the title of best travel
                agency in Bangladesh
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
