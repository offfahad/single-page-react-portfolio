import React from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="container">
      {/* Header section */}
      <header className="header">
        <div className="header-content">
          <div className="intro">
            <h1>Muhammad Fahad</h1>
            <p>I'm a final year student pursuing BS in Computer Science at University of Gujrat. Proficient in Flutter & Machine Learning.</p>
          </div>
          <div className="profile-pic">
            <img src="me.jpg" alt="Your Name" />
          </div>
        </div>
      </header>

      {/* Navigation menu */}
      <nav className="navigation">
        <div className="nav-left">
          <a href="#educational">Educational History</a>
          <a href="#skills">Professional Skills</a>
          <a href="#projects">Professional Projects</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#ambitions">Life Ambitions</a>
          <a href="#efforts">Efforts for Country</a>
        </div>
        <div className="nav-right">
          <a href="#contact">Contact Me</a>
        </div>
      </nav>

      {/* Educational History section */}
      <section id="educational" className="section">
        <h2>Educational History</h2>
        <table className='education-table'>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Degree Title</th>
              <th>Passing Year</th>
              <th>Total Marks / CGPA</th>
              <th>Obtained Marks/ CGPA</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>BS in Computer Science</td>
              <td>2024</td>
              <td>4.0</td>
              <td>3.6</td>
              <td>90.00%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Intermediate of Computer Scicene</td>
              <td>2020</td>
              <td>1100</td>
              <td>905</td>
              <td>82.27%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Matriculation</td>
              <td>2018</td>
              <td>1100</td>
              <td>899</td>
              <td>81.73%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="skills" className="section">
        <h2>Professional Skills</h2>
        <ol className='skills-list'>
          <li>Machine Learning</li>
          <li>Deep Learning</li>
          <li>Python Developer</li>
          <li>Flutter Development</li>
          <li>
            Database Systems
            <ol>
              <li>SQL (Structured Query Language)</li>
              <li>NoSQL (MongoDB, Firebase)</li>
            </ol>
          </li>
          <li>Version Control (Git)</li>
          <li>Excellent Communication</li>
        </ol>
      </section>

      {/* Professional Projects section */}
      <section id="projects" className="section">
        <h2>Professional Projects</h2>
        <ol className='skills-list'>
          <li>Grocery Shopping Mobile App and Web Admin Panel (Flutter, Firebase, Stripe) </li>
          <li>Human Face Generator Using Sketch Mobile and Web App (Flutter, Machine Learning, Flask, Generative AI)</li>
          <li>Daily Blogging Web App (Python, MongoDB, Flask, MVC)</li>
          <li>Neural Networks Parallelism (Parallel and Distributing Computing, Deep Learning)</li>
          <li>Restaurant Reviews Classification (NLP, Deep Learning, Tensorflow and Keras)</li>
          <li>Point of Sale Windows Desktop Application (.Net, C#, MVC, SQL Database)</li>
          <li>B2B Console Terminal Application (C++, Data Structure, LinkedList, File Handling)</li>
        </ol>
      </section>

      <section id="hobbies" className="section">
        <h2>Hobbies</h2>
        <ul className="hobbies-list">
          <li>Making Memes</li>
          <li>Coding</li>
          <li>Photography</li>
          <li>Cooking</li>
          <li>Traveling</li>
        </ul>
      </section>

      <section id="ambitions" className="section">
        <h2>Life Ambitions</h2>
        <ul className="ambitions-list">
          <li><strong>Achieved</strong>
            <ul>
              <li>Starting the GYM</li>
              <li>Freelancing</li>
              <li>Expanding my Social Network</li>
              <li>Staying Happy</li>
            </ul>
          </li>
          <li><strong>Struggling</strong>
            <ul>
              <li>Starting my Startup</li>
              <li>Going to Germany</li>
              <li>Cracking the Google Interview</li>
              <li>Make Parents Proud</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="efforts" className="section">
        <h2>Efforts for Country</h2>
        <ul className="ambitions-list">
          <li><strong>Succeeded</strong>
            <ul>
              <li>Participated in community clean-up drives</li>
              <li>Volunteered in local charity organizations</li>
              <li>Organized blood donation camps</li>
              <li>Supported education initiatives in rural areas</li>
            </ul>
          </li>
          <li><strong>Struggling</strong>
            <ul>
              <li>Advocating for environmental sustainability policies</li>
              <li>Raising awareness about social issues through campaigns</li>
              <li>Improving access to healthcare in underserved communities</li>
              <li>Fighting against corruption in government institutions</li>
            </ul>
          </li>
        </ul>
      </section>
      <footer id='contact' className="footer">
        <div className="contact-info">
          <p><strong>Email Address:</strong> mughalfahad544@gmail.com</p>
        </div>
        <div className="social-icons">
        <a href="https://github.com/Offfahad" target="_blank"><img src="github.png" alt="Github" /></a>
          <a href="tel:+923137426256"><img src="whatsapp.png" alt="WhatsApp" /></a>
          <a href="https://web.facebook.com/Officialofffahad" target="_blank"><img src="facebook.png" alt="Facebook" /></a>
          <a href="https://www.instagram.com/offfahad" target="_blank"><img src="instagram.jpeg" alt="Instagram" /></a>
          <a href="https://www.youtube.com/channel/UCTSxRVsFBOISQ-8ZcJVrvKA" target="_blank"><img src="youtube.png" alt="YouTube" /></a>
          <a href="https://www.linkedin.com/in/offfahad/" target="_blank"><img src="linkedin.png" alt="LinkedIn" /></a>
          <a href="https://twitter.com/fahadintrouble" target="_blank"><img src="twitter.png" alt="Twitter" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;



//In-Line CSS
// import React from 'react';

// function App() {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px' }} className="container">
//       {/* Header section */}
//       <header style={{ width: '100%', backgroundColor: '#f0f0f0', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} className="header">
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="header-content">
//           <div className="intro" style={{ textAlign: 'left' }}>
//             <h1>Muhammad Fahad</h1>
//             <p style={{ marginTop: '10px' }}>I'm a final year student pursuing BS in Computer Science at University of Gujrat. Proficient in Flutter & Machine Learning.</p>
//           </div>
//           <div className="profile-pic">
//             <img src="me.jpg" alt="Your Name" style={{ maxWidth: '110px', borderRadius: '50%' }} />
//           </div>
//         </div>
//       </header>

//       {/* Navigation menu */}
//       <nav style={{ width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#333', color: '#fff', padding: '20px 20px' }} className="navigation">
//         <div className="nav-left">
//           <a style={{ marginRight: '30px' }} href="#educational">Educational History</a>
//           <a style={{ marginRight: '30px' }} href="#skills">Professional Skills</a>
//           <a style={{ marginRight: '30px' }} href="#projects">Professional Projects</a>
//           <a style={{ marginRight: '30px' }} href="#hobbies">Hobbies</a>
//           <a style={{ marginRight: '30px' }} href="#ambitions">Life Ambitions</a>
//           <a style={{ marginRight: '20px' }} href="#efforts">Efforts for Country</a>
//         </div>
//         <div className="nav-right">
//           <a href="#contact">Contact Me</a>
//         </div>
//       </nav>

//       {/* Educational History section */}
//       <section style={{ width: '100%', padding: '16px 0px 0px 0px', fontWeight: '600', textAlign: 'left' }} id="educational" className="section">
//         <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Educational History</h2>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }} className='education-table'>
//           <thead>
//             <tr>
//               <th>Sr. No.</th>
//               <th>Degree Title</th>
//               <th>Passing Year</th>
//               <th>Total Marks / CGPA</th>
//               <th>Obtained Marks/ CGPA</th>
//               <th>Percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>BS in Computer Science</td>
//               <td>2024</td>
//               <td>4.0</td>
//               <td>3.6</td>
//               <td>90.00%</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>Intermediate of Computer Scicene</td>
//               <td>2020</td>
//               <td>1100</td>
//               <td>905</td>
//               <td>82.27%</td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>Matriculation</td>
//               <td>2018</td>
//               <td>1100</td>
//               <td>899</td>
//               <td>81.73%</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>

//       <section style={{ width: '100%', padding: '16px 0px 0px 0px', fontWeight: '600', textAlign: 'left' }} id="skills" className="section">
//         <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Professional Skills</h2>
//         <ol style={{ listStyleType: 'decimal', padding: '0px 15px' }} className='skills-list'>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Machine Learning</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Deep Learning</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Python Developer</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Flutter Development</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>
//             Database Systems
//             <ol style={{ listStyleType: 'decimal', padding: '0px 15px' }}>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>SQL (Structured Query Language)</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>NoSQL (MongoDB, Firebase)</li>
//             </ol>
//           </li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Version Control (Git)</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Excellent Communication</li>
//         </ol>
//       </section>

//       {/* Professional Projects section */}
//       <section style={{ width: '100%', padding: '16px 0px 0px 0px', fontWeight: '600', textAlign: 'left' }} id="projects" className="section">
//         <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Professional Projects</h2>
//         <ol style={{ listStyleType: 'decimal', padding: '0px 15px' }} className='skills-list'>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Grocery Shopping Mobile App and Web Admin Panel (Flutter, Firebase, Stripe) </li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Human Face Generator Using Sketch Mobile and Web App (Flutter, Machine Learning, Flask, Generative AI)</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Daily Blogging Web App (Python, MongoDB, Flask, MVC)</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Neural Networks Parallelism (Parallel and Distributing Computing, Deep Learning)</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Restaurant Reviews Classification (NLP, Deep Learning, Tensorflow and Keras)</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Point of Sale Windows Desktop Application (.Net, C#, MVC, SQL Database)</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>B2B Console Terminal Application (C++, Data Structure, LinkedList, File Handling)</li>
//         </ol>
//       </section>

//       <section style={{ width: '100%', padding: '16px 0px 0px 0px', fontWeight: '600', textAlign: 'left' }} id="hobbies" className="section">
//         <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Hobbies</h2>
//         <ul style={{ listStyleType: 'disc', padding: '0px 15px' }} className="hobbies-list">
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Reading</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Coding</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Photography</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Cooking</li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}>Traveling</li>
//         </ul>
//       </section>

//       <section style={{ width: '100%', padding: '16px 0px 0px 0px', fontWeight: '600', textAlign: 'left' }} id="ambitions" className="section">
//         <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Life Ambitions</h2>
//         <ul style={{ padding: '0px 15px' }} className="ambitions-list">
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}><strong>Achieved</strong>
//             <ul style={{ listStyleType: 'disc', padding: '0px 15px' }}>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Starting the GYM</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Freelancing</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Expanding my Social Network</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Stying Happy</li>
//             </ul>
//           </li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}><strong>Struggling</strong>
//             <ul style={{ listStyleType: 'disc', padding: '0px 15px' }}>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Starting my Startup</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Going to Germany</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Cracking the Google Interview</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Make Parents Proud</li>
//             </ul>
//           </li>
//         </ul>
//       </section>

//       <section style={{ width: '100%', padding: '16px 0px 0px 0px', fontWeight: '600', textAlign: 'left' }} id="efforts" className="section">
//         <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Efforts for Country</h2>
//         <ul style={{ padding: '0px 15px' }} className="ambitions-list">
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}><strong>Succeeded</strong>
//             <ul style={{ listStyleType: 'disc', padding: '0px 15px' }}>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Participated in community clean-up drives</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Volunteered in local charity organizations</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Organized blood donation camps</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Supported education initiatives in rural areas</li>
//             </ul>
//           </li>
//           <li style={{ marginBottom: '10px', marginTop: '10px' }}><strong>Struggling</strong>
//             <ul style={{ listStyleType: 'disc', padding: '0px 15px' }}>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Advocating for environmental sustainability policies</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Raising awareness about social issues through campaigns</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Improving access to healthcare in underserved communities</li>
//               <li style={{ marginBottom: '10px', marginTop: '10px' }}>Fighting against corruption in government institutions</li>
//             </ul>
//           </li>
//         </ul>
//       </section>
//       <footer style={{ width: '100%', backgroundColor: '#f0f0f0', marginTop: '20px', padding: '20px 20px', display: 'flex', justifyContent: 'space-between' }} id='contact' className="footer">
//         <div style={{ textAlign: 'center' }} className="contact-info">
//           <p><strong>Email Address:</strong> mughalfahad544@gmail.com</p>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center' }} className="social-icons">
//           <a href="tel:+923137426256"><img style={{ width: '30px', margin: '0px 5px' }} src="whatsapp.png" alt="WhatsApp" /></a>
//           <a href="https://web.facebook.com/Officialofffahad" target="_blank"><img style={{ width: '30px', margin: '0px 5px' }} src="facebook.png" alt="Facebook" /></a>
//           <a href="https://www.instagram.com/offfahad" target="_blank"><img style={{ width: '30px', margin: '0px 5px' }} src="instagram.png" alt="Instagram" /></a>
//           <a href="https://www.youtube.com/channel/UCTSxRVsFBOISQ-8ZcJVrvKA" target="_blank"><img style={{ width: '30px', margin: '0px 5px' }} src="youtube.png" alt="YouTube" /></a>
//           <a href="https://www.linkedin.com/in/offfahad/" target="_blank"><img style={{ width: '30px', margin: '0px 5px' }} src="linkedin.png" alt="LinkedIn" /></a>
//           <a href="https://twitter.com/fahadintrouble" target="_blank"><img style={{ width: '30px', margin: '0px 5px' }} src="twitter.png" alt="Twitter" /></a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
