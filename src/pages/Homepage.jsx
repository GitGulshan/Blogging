import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Axios from "axios";

function Homepage() {
  const [articles, setArticles] = useState([]);
  const posts = [
    {
      id: 1,
      title: "Post 1",
      description: "Description 1",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English",
      imageUrl:
        "https://www.thefactsite.com/wp-content/uploads/2021/06/iron-man-facts-740x370.webp",
    },
    {
      id: 2,
      title: "Post 2",
      description: "Description 2",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English",
      imageUrl:
        "https://media1.popsugar-assets.com/files/thumbor/U-2uYAlCJOQ3n7KKIUHo17N-uwI=/217x0:1931x900/fit-in/2148x900/top/filters:format_auto():quality(85):upscale()/2023/10/01/311/n/48559432/7675cd2f651a6326974ec8.31477629_.jpg",
    },
    {
      id: 3,
      title: "Post 3",
      description: "Description 3",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English",
      imageUrl:
        "https://assetsio.reedpopcdn.com/Steve-Rogers-Cap.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
    },
    {
      id: 4,
      title: "Post 4",
      description: "Description 4",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English",
      imageUrl:
        "https://www.koimoi.com/wp-content/new-galleries/2022/08/the-batman-2-is-still-happening-the-robert-pattinson-starrer-has-an-update-around-its-script-001.jpg",
    },
  ];

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

      setArticles([...articles, ...res.data]);
    } catch (error) {
      alert(error.message);
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
            title={item.title}
            description={item.description}
            body={item.body}
            imageUrl={item.imageUrl}
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
