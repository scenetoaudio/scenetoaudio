import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Section3_4.css';

const Section3_4 = () => {
  return (
    <div className="section3_4-container">
      <header className="section3_4-header">
        {/* Back to Home Link */}
        <Link to="/" className="back-to-home">
          ← Back to Home
        </Link>
        <h1>Section 3.4: Framework Evaluation Design</h1>
        <p>An in-depth look at the images and sounds that were used to evaluate the Scene-To-Audio framework.</p>
      </header>

      <main className="section3_4-content">
        <table className="section3_4-table">
          <thead>
            <tr>
              <th>Scene Name</th>
              <th>Evaluation Design</th>
            </tr>
          </thead>
          <tbody>
            {/* Main Row 1 */}
            <tr>
              <th rowSpan="2" style={{ fontWeight: "bold" }}>Countryside</th>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Correct Image</th>
                      <th>Distractor Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="correct-image">
                        <img src="/assets/section3_4/images/countryside.png" alt="Countryside" />
                      </td>
                      <td className="distractor-images">
                        <img src="/assets/section3_4/images/countryside1.jpg" alt="First distractor" />
                        <img src="/assets/section3_4/images/countryside2.jpg" alt="Second distractor" />
                        <img src="/assets/section3_4/images/countryside3.jpg" alt="Third distractor" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr className="upper-row">
                      <th></th>
                      <th>Im2Wav</th>
                      <th>Im2Text2Audio</th>
                      <th>Scene-To-Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="upper-row">
                      <th>Text Prompts</th>
                      <td>Sound was directly generated from the image.</td>
                      <td>
                        &ldquo;Cows graze on a vibrant green meadow in the foreground, with a small white 
                        church and a forest with trees showing autumn colors in the background.&rdquo;
                      </td>
                      <td>
                        [&ldquo;Cows mooing&rdquo;, discrete]<br />
                        [&ldquo;Leaves rustling&rdquo;, continuous]<br />
                        [&ldquo;Church bell ringing&rdquo;, discrete]<br />
                        [&ldquo;Birds chirping&rdquo;, discrete]
                      </td>
                    </tr>
                    <tr className="audio-cells">
                      <th>Generated Audio</th>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2wav/countryside.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2text2audio/countryside.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/ours/countryside.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Main Row 2 */}
            <tr>
              <th rowSpan="2" style={{ fontWeight: "bold" }}>Mountains</th>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Correct Image</th>
                      <th>Distractor Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="correct-image">
                        <img src="/assets/section3_4/images/mountains.jpeg" alt="Mountains" />
                      </td>
                      <td className="distractor-images">
                        <img src="/assets/section3_4/images/mountains1.jpg" alt="First distractor" />
                        <img src="/assets/section3_4/images/mountains2.jpg" alt="Second distractor" />
                        <img src="/assets/section3_4/images/mountains3.jpg" alt="Third distractor" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr className="upper-row">
                      <th></th>
                      <th>Im2Wav</th>
                      <th>Im2Text2Audio</th>
                      <th>Scene-To-Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="upper-row">
                      <th>Text Prompts</th>
                      <td>Sound was directly generated from the image.</td>
                      <td>
                        &ldquo;A winding river cuts through a lush, rolling valley flanked by majestic 
                        mountains under a bright sky with scattered clouds.&rdquo;
                      </td>
                      <td>
                        [&ldquo;River flowing&rdquo;, continuous]<br />
                        [&ldquo;Wind blowing&rdquo;, continuous]
                      </td>
                    </tr>
                    <tr className="audio-cells">
                      <th>Generated Audio</th>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2wav/mountains.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2text2audio/mountains.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/ours/mountains.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Main Row 3 */}
            <tr>
              <th rowSpan="2" style={{ fontWeight: "bold" }}>Reservoir</th>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Correct Image</th>
                      <th>Distractor Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="correct-image">
                        <img src="/assets/section3_4/images/reservoir.png" alt="Reservoir" />
                      </td>
                      <td className="distractor-images">
                        <img src="/assets/section3_4/images/reservoir1.jpg" alt="First distractor" />
                        <img src="/assets/section3_4/images/reservoir2.jpg" alt="Second distractor" />
                        <img src="/assets/section3_4/images/reservoir3.jpg" alt="Third distractor" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr className="upper-row">
                      <th></th>
                      <th>Im2Wav</th>
                      <th>Im2Text2Audio</th>
                      <th>Scene-To-Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="upper-row">
                      <th>Text Prompts</th>
                      <td>Sound was directly generated from the image.</td>
                      <td>
                        &ldquo;A calm lake is reflecting the dense green trees and tall red and white 
                        communication towers standing atop a rocky cliff under a blue sky.&rdquo;
                      </td>
                      <td>
                        [&ldquo;Water flowing&rdquo;, continuous]<br />
                        [&ldquo;Trees rustling&rdquo;, continuous]<br />
                        [&ldquo;Wind blowing&rdquo;, continuous]<br />
                        [&ldquo;Birds chirping&rdquo;, discrete]
                      </td>
                    </tr>
                    <tr className="audio-cells">
                      <th>Generated Audio</th>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2wav/reservoir.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2text2audio/reservoir.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/ours/reservoir.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Main Row 4 */}
            <tr>
              <th rowSpan="2" style={{ fontWeight: "bold" }}>Sea Beach</th>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Correct Image</th>
                      <th>Distractor Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="correct-image">
                        <img src="/assets/section3_4/images/seabeach.jpeg" alt="Sea Beach" />
                      </td>
                      <td className="distractor-images">
                        <img src="/assets/section3_4/images/seabeach1.jpg" alt="First distractor" />
                        <img src="/assets/section3_4/images/seabeach2.jpg" alt="Second distractor" />
                        <img src="/assets/section3_4/images/seabeach3.jpg" alt="Third distractor" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr className="upper-row">
                      <th></th>
                      <th>Im2Wav</th>
                      <th>Im2Text2Audio</th>
                      <th>Scene-To-Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="upper-row">
                      <th>Text Prompts</th>
                      <td>Sound was directly generated from the image.</td>
                      <td>
                        &ldquo;A tranquil beach with crystal-clear turquoise water is flanked by towering 
                        cliffs and lush green foliage, with waves gently lapping at the sandy shore.&rdquo;
                      </td>
                      <td>
                        [&ldquo;Waves crashing&rdquo;, continuous]<br />
                        [&ldquo;Wind blowing&rdquo;, continuous]
                      </td>
                    </tr>
                    <tr className="audio-cells">
                      <th>Generated Audio</th>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2wav/seabeach.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2text2audio/seabeach.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/ours/seabeach.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Main Row 5 */}
            <tr>
              <th rowSpan="2" style={{ fontWeight: "bold" }}>Food Court</th>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Correct Image</th>
                      <th>Distractor Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="correct-image">
                        <img src="/assets/section3_4/images/foodcourt.jpg" alt="Food Court" />
                      </td>
                      <td className="distractor-images">
                        <img src="/assets/section3_4/images/foodcourt1.jpg" alt="First distractor" />
                        <img src="/assets/section3_4/images/foodcourt2.jpg" alt="Second distractor" />
                        <img src="/assets/section3_4/images/foodcourt3.jpg" alt="Third distractor" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr className="upper-row">
                      <th></th>
                      <th>Im2Wav</th>
                      <th>Im2Text2Audio</th>
                      <th>Scene-To-Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="upper-row">
                      <th>Text Prompts</th>
                      <td>Sound was directly generated from the image.</td>
                      <td>
                        &ldquo;People are seated at outdoor tables under a large, leafy sign reading 
                        "CLUNY FOOD COURT" with hanging green plants softening the urban setting.&rdquo;
                      </td>
                      <td>
                        [&ldquo;Cutlery clinking&rdquo;, discrete]<br />
                        [&ldquo;People talking&rdquo;, continuous]<br />
                        [&ldquo;Leaves rustling&rdquo;, continuous]
                      </td>
                    </tr>
                    <tr className="audio-cells">
                      <th>Generated Audio</th>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2wav/foodcourt.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2text2audio/foodcourt.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/ours/foodcourt.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Main Row 6 */}
            <tr>
              <th rowSpan="2" style={{ fontWeight: "bold" }}>Park</th>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Correct Image</th>
                      <th>Distractor Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="correct-image">
                        <img src="/assets/section3_4/images/park.jpeg" alt="Park" />
                      </td>
                      <td className="distractor-images">
                        <img src="/assets/section3_4/images/park1.jpg" alt="First distractor" />
                        <img src="/assets/section3_4/images/park2.jpg" alt="Second distractor" />
                        <img src="/assets/section3_4/images/park3.jpg" alt="Third distractor" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr className="upper-row">
                      <th></th>
                      <th>Im2Wav</th>
                      <th>Im2Text2Audio</th>
                      <th>Scene-To-Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="upper-row">
                      <th>Text Prompts</th>
                      <td>Sound was directly generated from the image.</td>
                      <td>
                        &ldquo;A lush green park with a meandering stream in the foreground and a backdrop 
                        of tall apartment buildings under a bright blue sky.&rdquo;
                      </td>
                      <td>
                        [&ldquo;Water rippling&rdquo;, continuous]<br />
                        [&ldquo;Birds chirping&rdquo;, discrete]<br />
                        [&ldquo;Leaves rustling&rdquo;, continuous]
                      </td>
                    </tr>
                    <tr className="audio-cells">
                      <th>Generated Audio</th>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2wav/park.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2text2audio/park.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/ours/park.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Main Row 7 */}
            <tr>
              <th rowSpan="2" style={{ fontWeight: "bold" }}>Street</th>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Correct Image</th>
                      <th>Distractor Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="correct-image">
                        <img src="/assets/section3_4/images/street.jpeg" alt="Street" />
                      </td>
                      <td className="distractor-images">
                        <img src="/assets/section3_4/images/street1.jpg" alt="First distractor" />
                        <img src="/assets/section3_4/images/street2.jpg" alt="Second distractor" />
                        <img src="/assets/section3_4/images/street3.jpg" alt="Third distractor" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr className="upper-row">
                      <th></th>
                      <th>Im2Wav</th>
                      <th>Im2Text2Audio</th>
                      <th>Scene-To-Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="upper-row">
                      <th>Text Prompts</th>
                      <td>Sound was directly generated from the image.</td>
                      <td>
                        &ldquo;This is a bustling city crosswalk filled with a crowd of pedestrians crossing in 
                        multiple directions amidst stopped traffic, surrounded by large advertisements and storefronts.&rdquo;
                      </td>
                      <td>
                        [&ldquo;People walking&rdquo;, continuous]<br />
                        [&ldquo;Vehicle engines idling&rdquo;, continuous]<br />
                        [&ldquo;Traffic signal beeping&rdquo;, discrete]
                      </td>
                    </tr>
                    <tr className="audio-cells">
                      <th>Generated Audio</th>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2wav/street.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2text2audio/street.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/ours/street.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Main Row 8 */}
            <tr>
              <th rowSpan="2" style={{ fontWeight: "bold" }}>Train Station</th>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th>Correct Image</th>
                      <th>Distractor Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="correct-image">
                        <img src="/assets/section3_4/images/cityhallMRT.jpeg" alt="Train Station" />
                      </td>
                      <td className="distractor-images">
                        <img src="/assets/section3_4/images/cityhallMRT1.jpg" alt="First distractor" />
                        <img src="/assets/section3_4/images/cityhallMRT2.jpg" alt="Second distractor" />
                        <img src="/assets/section3_4/images/cityhallMRT3.jpg" alt="Third distractor" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr className="upper-row">
                      <th></th>
                      <th>Im2Wav</th>
                      <th>Im2Text2Audio</th>
                      <th>Scene-To-Audio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="upper-row">
                      <th>Text Prompts</th>
                      <td>Sound was directly generated from the image.</td>
                      <td>
                        &ldquo;People are walking or standing near the entrance of a City Hall subway station, which is 
                        partially covered by a metal frame structure, with a tall white church spire visible in the background.&rdquo;
                      </td>
                      <td>
                        [&ldquo;Turnstile beeping&rdquo;, discrete]<br />
                        [&ldquo;People walking&rdquo;, continuous]<br />
                        [&ldquo;Church bells ringing&rdquo;, discrete]
                      </td>
                    </tr>
                    <tr className="audio-cells">
                      <th>Generated Audio</th>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2wav/cityhallMRT.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/im2text2audio/cityhallMRT.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/assets/section3_4/sounds/ours/cityhallMRT.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Section3_4;
