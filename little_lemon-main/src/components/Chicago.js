import img1 from "../images/Mario and Adrian A.jpg";
import img2 from "../images/Mario and Adrian b.jpg"

const Chicago = () => {
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 chicago-head">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="p-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. We are a family owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist. We are a family owned Mediterranean restaurant, focused
          on traditional recipes served with a modern twist.
        </p>
        <div className="chicago-images">
            <img src={img1} alt="chef"/>
            <img src={img2} alt="chef"/>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default Chicago;
