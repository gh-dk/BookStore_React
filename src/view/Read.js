import React from "react";

function Read() {
  return (
    <>
      <div class="view-data" id="view-data">
        <div class="card">
          <div class="one">
            <div class="box">
              <div>
                <img id="poster-element" alt="" src="images/bannerBook.png" />
                <div>
                  <small>
                    <i id="author-element">author name</i>
                  </small>
                </div>
              </div>

              <div>
                <h1 id="title-element">book title 1</h1>
                <div class="two">
                  <span id="type-element">fictional</span>
                </div>

                <div class="two">
                  <span id="summary-element">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita, laboriosam?
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div id="pdf-viewer"></div>
          <div id="buttons-element"></div>
        </div>
      </div>
    </>
  );
}

export default Read;
