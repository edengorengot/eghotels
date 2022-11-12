import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HotelCard = (props) => {
    const hotelName = props.hotelName;
    const hotelId = props.hotelId;
    const id = props.id;

    const handleBtnClick = () => {
        props.handleFavoriteToggle(id);
    };

    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{hotelName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{hotelId}</Card.Subtitle>
                    <Button variant="primary" onClick={handleBtnClick}>Add/Remove Favorite</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default HotelCard;