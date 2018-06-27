import React from 'react';
import styles from './Nav.css';

const links = ["Sports", "Music", "More", "Sell"];

function Nav() {
  return (
    <div>
      <div>
        <svg preserveAspectRatio="xMidYMid" width="128" height="24" viewBox="0 0 128 24" class="seatgeek-logo__svg">
          <path fill="#1673e6" fillrule="evenodd" d="M128.000,19.649 L124.626,19.649 L120.335,13.763 L120.336,19.649 L117.450,19.649 L117.450,4.136 L120.334,4.136 L120.335,13.014 L124.531,8.050 L127.894,8.050 L123.306,13.361 L128.000,19.649 ZM111.842,17.457 C113.923,17.457 115.348,16.328 115.348,16.328 L115.348,18.955 C114.481,19.430 113.291,19.904 111.534,19.904 C105.582,19.904 105.279,15.251 105.279,13.852 C105.279,10.696 107.273,7.784 110.807,7.784 C115.936,7.784 115.912,12.338 115.912,13.227 L115.912,14.719 L108.192,14.719 C108.379,16.136 109.524,17.457 111.842,17.457 ZM113.194,12.385 C113.066,11.277 112.481,10.214 110.931,10.214 C109.125,10.214 108.364,11.368 108.197,12.385 L113.194,12.385 ZM99.929,17.457 C102.009,17.457 103.434,16.328 103.434,16.328 L103.434,18.955 C102.567,19.430 101.377,19.904 99.620,19.904 C93.668,19.904 93.365,15.251 93.365,13.852 C93.365,10.696 95.359,7.784 98.894,7.784 C104.022,7.784 103.998,12.338 103.998,13.227 L103.998,14.719 L96.279,14.719 C96.466,16.136 97.610,17.457 99.929,17.457 ZM101.280,12.385 C101.153,11.277 100.568,10.214 99.018,10.214 C97.212,10.214 96.450,11.368 96.284,12.385 L101.280,12.385 ZM87.036,19.902 C82.303,19.902 79.163,17.037 79.163,12.057 C79.163,6.854 82.956,3.917 86.982,3.917 C90.010,3.917 91.456,4.877 91.456,4.877 L91.456,7.823 C90.269,7.091 89.194,6.501 87.035,6.501 C84.026,6.501 82.158,9.071 82.158,12.057 C82.158,14.865 83.799,17.313 86.945,17.313 C88.142,17.313 88.926,17.039 88.926,17.039 L88.926,13.719 L85.813,13.719 L85.813,11.133 L90.407,11.133 C91.185,11.133 91.816,11.768 91.816,12.551 L91.816,18.955 C91.816,18.955 90.300,19.902 87.036,19.902 ZM76.456,17.459 C77.381,17.459 78.463,16.833 78.463,16.833 L78.454,19.339 C78.454,19.339 77.557,19.902 75.707,19.902 C71.750,19.902 71.900,17.025 71.900,15.301 L71.900,5.186 L74.784,5.186 C74.784,5.937 74.784,6.932 74.784,8.024 L78.004,8.024 L78.004,10.469 L74.785,10.469 C74.785,12.937 74.785,15.706 74.785,15.706 C74.785,16.760 75.136,17.459 76.456,17.459 ZM60.968,16.416 C60.968,13.426 63.413,12.612 67.416,12.760 C67.416,11.387 67.330,10.214 65.131,10.214 C63.426,10.214 61.682,11.350 61.682,11.350 L61.682,8.728 C61.682,8.728 63.637,7.772 65.847,7.772 C67.323,7.772 70.275,7.965 70.275,12.113 C70.275,15.917 70.277,19.478 70.277,19.478 C70.277,19.478 67.971,19.902 66.252,19.902 C63.991,19.902 60.968,19.400 60.968,16.416 ZM67.391,14.767 C66.493,14.718 63.861,14.494 63.861,16.186 C63.861,18.180 67.391,17.488 67.391,17.488 L67.391,14.767 ZM55.973,17.457 C58.054,17.457 59.479,16.328 59.479,16.328 L59.479,18.955 C58.612,19.430 57.422,19.904 55.665,19.904 C49.713,19.904 49.410,15.251 49.410,13.852 C49.410,10.696 51.404,7.784 54.939,7.784 C60.067,7.784 60.043,12.338 60.043,13.227 L60.043,14.719 L52.324,14.719 C52.511,16.136 53.655,17.457 55.973,17.457 ZM57.325,12.385 C57.198,11.277 56.613,10.214 55.062,10.214 C53.257,10.214 52.495,11.368 52.329,12.385 L57.325,12.385 ZM44.915,11.012 C45.675,11.331 48.304,12.385 48.304,15.315 C48.304,18.777 45.325,19.902 42.356,19.902 C39.387,19.902 37.491,18.654 37.491,18.654 L37.491,15.688 C37.491,15.688 39.912,17.313 42.356,17.313 C44.800,17.313 45.299,16.437 45.299,15.560 C45.299,14.676 44.849,14.288 44.129,13.904 C43.409,13.520 42.060,13.013 40.569,12.477 C39.079,11.941 37.296,11.026 37.296,8.390 C37.296,5.187 40.075,3.919 42.877,3.919 C45.679,3.919 47.415,4.877 47.415,4.877 L47.415,7.823 C47.415,7.823 45.206,6.501 42.745,6.501 C41.017,6.501 40.361,7.215 40.291,8.103 C40.216,9.057 40.897,9.408 41.507,9.723 C41.929,9.942 44.284,10.747 44.915,11.012 ZM28.872,17.454 L26.133,17.454 L26.133,12.573 C26.133,11.780 26.772,11.137 27.560,11.137 L31.269,11.137 L31.269,13.722 L28.872,13.722 L28.872,17.454 ZM15.635,24.000 C9.429,24.000 5.363,22.277 5.363,22.277 L5.363,19.348 C5.363,19.348 9.358,21.185 15.635,21.185 C21.911,21.185 25.906,19.348 25.906,19.348 L25.906,22.277 C25.906,22.277 21.840,24.000 15.635,24.000 ZM7.931,16.306 L5.363,2.584 C5.363,2.584 9.286,0.000 15.635,0.000 C21.983,0.000 25.906,2.584 25.906,2.584 L23.338,16.306 L7.931,16.306 ZM2.397,13.722 L0.000,13.722 L0.000,11.137 L3.709,11.137 C4.497,11.137 5.136,11.780 5.136,12.573 L5.136,17.454 L2.397,17.454 L2.397,13.722 Z"></path>
        </svg>
        {links.map((link) =>
          <p>{link}</p>
        )}
      </div>
      <div>
        <p>Track My Order</p>
        <p>Sign Up</p>
        <p>Log In</p>
      </div>
    </div>
  );
}

export default Nav;
