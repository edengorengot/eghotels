import Card from 'react-bootstrap/Card';

const HotelCardFavorite = (props) => {
    // console.log("Props", props);

    const hotelName = props.hotelName;
    const hotelId = props.hotelId;

    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{hotelName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{hotelId}</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    );
};

export default HotelCardFavorite;