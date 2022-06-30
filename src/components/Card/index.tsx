import { Link } from 'react-router-dom';
import './index.scss';

export const Card = (props: any) => {
  const { title, link } = props;
  if (title && link && link.to && link.name) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Link className="btn btn-primary" to={props.link.to}>
            {props.link.name}
          </Link>
        </div>
      </div>
    );
  }

  return <div className="card hidden"></div>;
};
