import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Axios from "axios";

function Homepage() {
  const [articles, setArticles] = useState([]);

  const links = [
    {
      id: "1",
      title: "Loki",
      url: "https://www.google.com/search?q=loki&tbm=isch&ved=2ahUKEwjoj_nkqb-EAxVenWMGHWW8AuQQ2-cCegQIABAA&oq=loki&gs_lp=EgNpbWciBGxva2kyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGENIwhdQ6QRYwhVwAXgAkAEDmAGfAaAB6guqAQM0Ljm4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBBAjGCfCAgUQABiABMICBxAjGOoCGCfCAgsQABiABBixAxiDAcICCBAAGIAEGLEDiAYB&sclient=img&ei=x3DXZaiQF966juMP5fiKoA4&bih=1303&biw=1712#imgrc=SwPtTlpcOzfGJM",
    },
    {
      id: "1",
      title: "Loki",
      url: "https://www.google.com/search?q=loki&tbm=isch&ved=2ahUKEwjoj_nkqb-EAxVenWMGHWW8AuQQ2-cCegQIABAA&oq=loki&gs_lp=EgNpbWciBGxva2kyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGENIwhdQ6QRYwhVwAXgAkAEDmAGfAaAB6guqAQM0Ljm4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBBAjGCfCAgUQABiABMICBxAjGOoCGCfCAgsQABiABBixAxiDAcICCBAAGIAEGLEDiAYB&sclient=img&ei=x3DXZaiQF966juMP5fiKoA4&bih=1303&biw=1712#imgrc=SwPtTlpcOzfGJM",
    },
    {
      id: "1",
      title: "Loki",
      url: "https://www.google.com/search?q=loki&tbm=isch&ved=2ahUKEwjoj_nkqb-EAxVenWMGHWW8AuQQ2-cCegQIABAA&oq=loki&gs_lp=EgNpbWciBGxva2kyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyDRAAGIAEGIoFGEMYsQMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyChAAGIAEGIoFGENIwhdQ6QRYwhVwAXgAkAEDmAGfAaAB6guqAQM0Ljm4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBBAjGCfCAgUQABiABMICBxAjGOoCGCfCAgsQABiABBixAxiDAcICCBAAGIAEGLEDiAYB&sclient=img&ei=x3DXZaiQF966juMP5fiKoA4&bih=1303&biw=1712#imgrc=SwPtTlpcOzfGJM",
    },
  ];

  const getArticles = async () => {
    //without api call
    // setArticles([...articles, ...posts]);

    //with api call
    try {
      const res = await Axios.get("http://localhost:8080/getPosts");
      articles.length = 0;
      setArticles([...articles, ...res.data]);
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteArticle = async (id) => {
    const res = window.confirm("are you really want to delete this article?");
    if (res) {
      try {
        const output = await Axios.delete(`http://localhost:8080/post/${id}`);
        if (output.status === 200) {
          await getArticles();
          alert("Articles deleted Succesfully");
        } else {
          alert("something went wrong");
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="w-100 row">
      <div className="col-md-3"></div>
      <div className=" my-5 col-md-6">
        {articles.map((item) => (
          <PostCard
            id={item.id}
            title={item.title}
            description={item.description}
            body={item.body}
            imageUrl={item.imageUrl}
            deleteFunc={deleteArticle}
          />
        ))}
      </div>
      <div className="col-md-3 pt-5">
        <p>Link</p>
        {links.map((item) => (
          <div>
            <a href={item.url}>{item.title}</a>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
