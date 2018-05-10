.side-slide {
      animation-name: slide;
      -webkit-animation-name: slide;
      animation-duration: 1s;
      -webkit-animation-duration: 1s;
      visibility: visible;
  }
  @keyframes side-slide {
    0% {
      opacity: 0;
      transform: translatey(70%);
    } 
    100% {
      opacity: 1;
      transform: translatey(0%);
    }
  }
  @-webkit-keyframes side-slide {
    0% {
      opacity: 0;
      -webkit-transform: translateX(70%);
    } 
    100% {
      opacity: 1;
      -webkit-transform: translateX(0%);
    }
  }
  @media screen and (max-width: 768px) {
    .col-sm-4 {
      text-align: center;
      margin: 25px 0;
    }
    .btn-lg {
        width: 100%;
        margin-bottom: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
        font-size: 150px;
    }
  }
