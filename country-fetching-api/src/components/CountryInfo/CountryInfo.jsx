import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/api";
import { Link } from "react-router-dom";
const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { CountryName } = useParams();

  const getCountryByName = async () => {
    try {
      const res = await fetch(`${apiURL}/name/${CountryName}`);

      if (!res.ok) throw new Error("Country not found...");

      const data = await res.json();
      setCountry(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getCountryByName();
  }, [CountryName]);

  return (
    <div className="counrty_info_wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>
      {country?.map((country, index) => {
        <div className="country_info_container" key={index}>
          <div className="country_info-img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country_info">
            <div className="country_info-left"></div>
            <h5>
              Native Name: <span>{country.name.common}</span>
            </h5>
            <h5>
              Population: <span>{country.population}</span>
            </h5>
            <h5>
              Region: <span>{country.region}</span>
            </h5>
          </div>
        </div>;
      })}
    </div>
  );
};

export default CountryInfo;
