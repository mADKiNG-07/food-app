import Navbar from "../../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import FoodCard from "../../components/food_card/FoodCard";

function Home() {
  return (
    <div className="Home local-bootstrap">
      <Navbar />
      <div className="homeContainer container">
        <div className="ev">
          <div className="leadtext">
            <h5 className="text fw-bold">Food is simple,</h5>
            <p className="lead">so should ordering 🍜😁</p>
          </div>
        </div>

        <div className="foodlist">
        {data.map((singleData) => {
            // const base64String = Array.from(
            //   new Uint8Array(singleData.imgUrl.data.data),
            //   (v) => String.fromCharCode(v)
            // ).join("");
            // const img = btoa(base64String);
            return (
              <UserCard
                key={id}
                fName={singleData.fName}
                lName={singleData.lName}
                email={singleData.email}
                country={singleData.country}
              />
            );
          })}
          <FoodCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
