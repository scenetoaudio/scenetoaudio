/* IMPORTANT: All image and sound paths currently have the prefix "/scenetoaudio" because the app is hosted on GitHub Pages.
If you are hosting your app on a different platform, you may need to remove this prefix. */

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Section5.css';

const Section5 = () => {
  return (
    <div className="section5-container">
      <header className="section5-header">
        {/* Back to Home Link */}
        <Link to="/" className="back-to-home">
          ← Back to Home
        </Link>
        <h1>Section 5: Formal User Study (with PVIs)</h1>
        <p>A comprehensive view of the sounds that were used in the formal user study.</p>
      </header>

      <main className="section5-content">
        <table className="section5-table">
          <thead>
            <tr>
              <th>Scene Name</th>
              <th>Reference Image</th>
              <th>Audio Files</th>
            </tr>
          </thead>
          <tbody>

            {/* Row 1 */}
            <tr>
              <td style={{ fontWeight: "bold" }}>Countryside</td>
              <td style={{ width: "35%" }}><img src="/scenetoaudio/assets/section5/referenceImages/countryside.png" alt="Countryside Reference" /></td>
              <td className="subtable-container">
                <table className="subtable">
                  <thead>
                    <tr>
                      <th>Audio Only</th>
                      <th>Overlay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/audioOnly/countryside.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlay/countryside.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                    <tr>
                      <th>Overlay Concat</th>
                      <th>Speech Only</th>
                    </tr>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlayConcat/countryside.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/speechOnly/countryside.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td style={{ fontWeight: "bold" }}>Mountains</td>
              <td style={{ width: "35%" }}><img src="/scenetoaudio/assets/section5/referenceImages/mountains.jpeg" alt="Mountains Reference" /></td>
              <td className="subtable-container">
                <table className="subtable">
                  <thead>
                    <tr>
                      <th>Audio Only</th>
                      <th>Overlay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/audioOnly/mountains.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlay/mountains.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                    <tr>
                      <th>Overlay Concat</th>
                      <th>Speech Only</th>
                    </tr>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlayConcat/mountains.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/speechOnly/mountains.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td style={{ fontWeight: "bold" }}>Reservoir</td>
              <td style={{ width: "35%" }}><img src="/scenetoaudio/assets/section5/referenceImages/reservoir.png" alt="Reservoir Reference" /></td>
              <td className="subtable-container">
                <table className="subtable">
                  <thead>
                    <tr>
                      <th>Audio Only</th>
                      <th>Overlay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/audioOnly/reservoir.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlay/reservoir.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                    <tr>
                      <th>Overlay Concat</th>
                      <th>Speech Only</th>
                    </tr>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlayConcat/reservoir.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/speechOnly/reservoir.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td style={{ fontWeight: "bold" }}>Sea Beach</td>
              <td style={{ width: "35%" }}><img src="/scenetoaudio/assets/section5/referenceImages/seabeach.jpeg" alt="Sea Beach Reference" /></td>
              <td className="subtable-container">
                <table className="subtable">
                  <thead>
                    <tr>
                      <th>Audio Only</th>
                      <th>Overlay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/audioOnly/seabeach.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlay/seabeach.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                    <tr>
                      <th>Overlay Concat</th>
                      <th>Speech Only</th>
                    </tr>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlayConcat/seabeach.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/speechOnly/seabeach.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td style={{ fontWeight: "bold" }}>Food Court</td>
              <td style={{ width: "35%" }}><img src="/scenetoaudio/assets/section5/referenceImages/foodcourt.jpg" alt="Food Court Reference" /></td>
              <td className="subtable-container">
                <table className="subtable">
                  <thead>
                    <tr>
                      <th>Audio Only</th>
                      <th>Overlay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/audioOnly/foodcourt2.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlay/foodcourt2.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                    <tr>
                      <th>Overlay Concat</th>
                      <th>Speech Only</th>
                    </tr>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlayConcat/foodcourt2.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/speechOnly/foodcourt2.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Row 6 */}
            <tr>
              <td style={{ fontWeight: "bold" }}>Park</td>
              <td style={{ width: "35%" }}><img src="/scenetoaudio/assets/section5/referenceImages/park.jpeg" alt="Park Reference" /></td>
              <td className="subtable-container">
                <table className="subtable">
                  <thead>
                    <tr>
                      <th>Audio Only</th>
                      <th>Overlay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/audioOnly/park3.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlay/park3.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                    <tr>
                      <th>Overlay Concat</th>
                      <th>Speech Only</th>
                    </tr>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlayConcat/park3.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/speechOnly/park3.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Row 7 */}
            <tr>
              <td style={{ fontWeight: "bold" }}>Street</td>
              <td style={{ width: "35%" }}><img src="/scenetoaudio/assets/section5/referenceImages/street.jpeg" alt="Street Reference" /></td>
              <td className="subtable-container">
                <table className="subtable">
                  <thead>
                    <tr>
                      <th>Audio Only</th>
                      <th>Overlay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/audioOnly/street.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlay/street.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                    <tr>
                      <th>Overlay Concat</th>
                      <th>Speech Only</th>
                    </tr>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlayConcat/street.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/speechOnly/street.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            {/* Row 8 */}
            <tr>
              <td style={{ fontWeight: "bold" }}>Train Station</td>
              <td style={{ width: "35%" }}><img src="/scenetoaudio/assets/section5/referenceImages/cityhallMRT.jpeg" alt="Train Station Reference" /></td>
              <td className="subtable-container">
                <table className="subtable">
                  <thead>
                    <tr>
                      <th>Audio Only</th>
                      <th>Overlay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/audioOnly/cityhallMRT.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlay/cityhallMRT.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                    </tr>
                    <tr>
                      <th>Overlay Concat</th>
                      <th>Speech Only</th>
                    </tr>
                    <tr>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/overlayConcat/cityhallMRT.wav" type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                      </td>
                      <td>
                        <audio controls>
                          <source src="/scenetoaudio/assets/section5/sounds/speechOnly/cityhallMRT.wav" type="audio/wav" />
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
      <footer className="landing-footer">
        <p>Research Paper for CHI 2025</p>
      </footer>
    </div>
  );
};

export default Section5;
