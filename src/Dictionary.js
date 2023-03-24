import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey ="s6pLzD2yFuwYXahRsYL6SstQ5B4fhcwJYPAQbN6pAjxcwZWvIn34c6G5";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>Search for a word</h2>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 p-1">
                <input
                  type="search"
                  placeholder="ex. brave"
                  defaultValue={props.defaultKeyword}
                  autoFocus={true}
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="col-3 p-1">
                <input type="submit" value="Find" />
              </div>
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Dictionary;