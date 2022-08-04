import { useHistory } from "react-router-dom";


const HomePage = () => {
    const history = useHistory();
    const move = history.push('/about');

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={move()}>click</button>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore architecto cupiditate odio nisi non natus quod blanditiis sit nostrum tempore esse dolorem nobis, deserunt tempora? Illo voluptatem perferendis quisquam alias!</p>
        </>
    );
};

export default HomePage;