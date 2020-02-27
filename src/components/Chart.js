import React from "react";

function Chart() {
  return (
    <div>
      <div class="w3-container w3-padding-32" id="about">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
          Charts
        </h3>
      </div>

      <div class="w3-row-padding w3-grayscale">
        <div class="w3-col l3 m6 w3-margin-bottom">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/21/19/31/nigeria-1758969__340.png"
            alt="John"
            style={{ width: "100%", height: "100px" }}
          />
          <h3>Nigeria</h3>
          <ul>
            <li>song</li>
            <li>song</li>
            <li>song</li>
            <li>song</li>
          </ul>
          <button class="w3-button w3-light-grey w3-block">see more</button>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <img
            src="https://ak5.picdn.net/shutterstock/videos/941785/thumb/1.jpg"
            alt="Jane"
            style={{ width: "100%", height: "100px" }}
          />
          <h3>Kenya</h3>
          <ul>
            <li>song</li>
            <li>song</li>
            <li>song</li>
            <li>song</li>
          </ul>
          <button class="w3-button w3-light-grey w3-block">see more</button>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <img
            src="https://afrikanza.com/wp-content/uploads/2017/04/most-beautiful-african-flags-their-design-and-meanings.jpg"
            alt="Mike"
            style={{ width: "100%", height: "100px" }}
          />
          <h3>South Africa</h3>
          <ul>
            <li>song</li>
            <li>song</li>
            <li>song</li>
            <li>song</li>
          </ul>
          <button class="w3-button w3-light-grey w3-block">see more</button>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <img
            src="https://www.jakpost.travel/wimages/large/133-1337569_ghana-celebrates-56th-independence-anniversary-ghana-holding-flag.jpg"
            alt="Dan"
            style={{ width: "100%", height: "100px" }}
          />
          <h3>Ghana</h3>
          <ul>
            <li>song</li>
            <li>song</li>
            <li>song</li>
            <li>song</li>
          </ul>
          <button class="w3-button w3-light-grey w3-block">see more</button>
        </div>
      </div>
    </div>
  );
}

export default Chart;
