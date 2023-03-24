import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className='Photos'>
        <div className='row'>
          {props.photos.map(function (photo, index) {
            return (
              <div
                className='column'
                key={index}>
                <img
                  alt='images about search'
                  src={photo.src.landscape}
                  className='img-fuid'
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}