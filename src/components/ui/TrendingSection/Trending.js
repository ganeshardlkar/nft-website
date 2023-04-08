import React from "react";
import { NFT__DATA } from "../../../assets/data/data";
import NftCard from "../Nft-card/NftCard";
import { Container, Row, Col } from "reactstrap";
import './Trending.css';

const Trending = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="">
                        <h3 className="trending__title">Trending</h3>
                    </Col>

                    {
                        NFT__DATA.slice(0, 8).map(item => {
                            return (
                                <Col lg='3' md='4' sm='6' key={item.id} className="mb-4">
                                    <NftCard item={item}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
};

export default Trending;
