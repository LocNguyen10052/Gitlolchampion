import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ChampionDetail.css'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';

function ChampionDetail(props) {
    const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);
    const { id } = useParams();
    useEffect(() => {
        fetch('')
    })
    const HandleClick = (event) => {
        console.log("Loc")
    }

    return (

        <Container >
            <Row className='ChampionDetail-Row-Image'>
                <Image className='ChampionDetail-image' src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" fluid />
            </Row>
            <Row >
                <Col>

                </Col>
            </Row>
            <Row className="pagination-row">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}

                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination', // Sử dụng selector để chỉ định vị trí cho pagination
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="swiper-pagination"></div>
                    <Row className="horizontal-scroll-container">
                        {items.map((item, index) => (
                            <SwiperSlide key={index} className="item" >
                                <Image
                                    style={{ width: '225.594px', height: '126.891px', padding: '0', marginLeft: '10' }}
                                    src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg'
                                    thumbnail
                                    onClick={HandleClick}
                                />
                            </SwiperSlide>
                        ))}
                    </Row>
                    <Row>
                        <div className="swiper-pagination"></div>
                    </Row>
                </Swiper>
            </Row>
        </Container>
    );
}

export default ChampionDetail;