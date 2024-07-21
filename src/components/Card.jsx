import AnimatedType from "./AnimatedType";

const Card = () => {
  return (
    <div className="card">
      <img
        src="profile.jpg"
        alt="Image of the person"
        className="card__image"
      />

      <h2 className="card__title">
        <AnimatedType />
      </h2>

      <p className="card__content">
        “A wish for you on your birthday, whatever you ask may you receive,
        whatever you seek may you find, whatever you wish may it be fulfilled on
        your birthday and always. Happy birthday!”
      </p>
    </div>
  );
};

export default Card;
