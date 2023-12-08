import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard";

import "./scss/datastyle.scss";
const FetchData = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(
        ` https://gnews.io/api/v4/search?q=${query}&apikey=82afbdff469f99cf76100a398348b306`
      );

      setNews(response.data.articles || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    // Input değiştiğinde sadece query'yi güncelle
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Butona basıldığında searchButtonClicked flag'ini true yap ve API isteğini yap
    setSearchButtonClicked(true);
  };

  // NewsCard'ı güncellemek için useEffect kullanımı
  useEffect(() => {
    // Her news değiştiğinde veya searchButtonClicked true olduğunda bu blok çalışacak
    if (searchButtonClicked) {
      console.log("News updated:", news);
      // API isteği yap
      getData();
      // searchButtonClicked'i tekrar false yap
      setSearchButtonClicked(false);
    }
  }, [news, searchButtonClicked]);

  return (
    <div>
      <div className="inp">
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={handleInputChange}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
      {/* NewsCard'a key ekleyerek React'e bu bileşenin güncellendiğini bildiriyoruz */}
      <NewsCard key={query} data={news} />
    </div>
  );
};

export default FetchData;
