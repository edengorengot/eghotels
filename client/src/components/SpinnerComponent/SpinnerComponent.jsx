import "./SpinnerComponent.scss";

const SpinnerComponent = () => {
    return (
        <div className="spinner-border spinner-border-setup" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default SpinnerComponent;