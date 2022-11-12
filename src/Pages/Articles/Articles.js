import "./Articles.css";

export default function Articles(props) {
  return (
    <article className="article" htmlFor={props._id}>
      <div className="article-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="text-muted">
          By {props.author} published {props.published}
        </p>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="article-img">
        <img className="card-img" src={props.image} />
      </div>
    </article>
  );
}
