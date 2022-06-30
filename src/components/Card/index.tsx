import { Link } from 'react-router-dom';
import './index.scss';

export const Card = (props: any) => {
  // console.log(index, length);
  const { title, description, link } = props;
  console.log('teste', title, description, link);

  if (title && link && link.to && link.name) {
    return (
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="..."> */}
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

  return <div className="card hiden"></div>;
};
