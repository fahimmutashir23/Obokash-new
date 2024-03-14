import { FaArrowRight } from "react-icons/fa";

const BlogCard = (props) => {
  return (
    <div className="blog__card--design shadow">
      <div className="blog__img--main">
        <img src="image/hajj.jpg" className="img-fluid blog__img"/>
      </div>
      <div className="blog__text mx-2">
        <h5>{props.title}</h5>
        <p className="blog__des">{props.des}</p>
        <p className="blog__redMore">Read more .......</p>
      </div>
    </div>
  );
};

export default BlogCard;