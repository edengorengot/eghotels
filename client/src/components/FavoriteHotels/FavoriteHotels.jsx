import HotelCard from "../HotelCard/HotelCard";

const FavoriteHotels = (props) => {
    const hotels = props.hotels;

    return (
        <>
            <h2>Our Hotels</h2>
            <p>You can add or delete your favorite hotels</p>
            {hotels.map((item) => {
                return (
                    <div className="col-12 col-md-3">
                        <HotelCard hotelName={item.hotelName} hotelId={item.hotelId} id={item.id} key={item.id} handleFavoriteToggle={props.handleFavoriteToggle}/>
                    </div>
                );
            })}
        </>
    );
};

export default FavoriteHotels;