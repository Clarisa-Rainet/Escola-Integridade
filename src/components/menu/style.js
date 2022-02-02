import styled from 'styled-components'

export const Content = styled.nav`
  position: fixed;
  padding: 0 !important;
  z-index: 1027;
  transition: 0.2s ease-in-out;
  width: 100vw;
  padding-bottom: 15px !important;

  &.bg-active {
    transition: 0.2s ease-in-out;
    &.bg-black {
      background: rgba(0, 0, 0, 0.85);
    }
  }

  .menu-scroll {
    transition: 0.2s ease-in-out;
    padding: 0.2rem !important;
  }

  .menu-top {
    transition: 0.2s ease-in-out;
    padding: 1.5rem !important;
  }

  .menu-logo {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    #logo {
      width: 150px;
      height: auto;
      transition: 0.2s ease-in-out;
      &.scroll {
        width: 130px;
        transition: 0.2s ease-in-out;
      }
    }
  }

  .menu-nav {
    padding: 0.5rem 0 0.5rem 4rem;
    display: flex;
    flex-direction: row;
    transition: 0.2s ease-in-out;

    a {
      align-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;
      font-size: 12px;
      display: flex;

      &.active {
        color: #ffc000;
      }

      :hover {
        transition: 0.1s ease-in-out;
        color: #ffc000;
        text-decoration: none;
      }
    }

    .link {
      color: #fff;
      font-size: 1rem;
      font-weight: bolder;
    }
  }

  #logo-whatsapp {
    width: 30px;
    height: 'auto';
  }

  .menu-mobile {
    border: 0;
    background: transparent;
    margin-top: -5px;
    color: #5d5d5d;
    outline: none;

    img {
      height: 20px;
      width: 20px;
    }
  }

  .menu-nav.show-menu {
    transition: 0.1s ease-in-out;
    opacity: 1;
    height: auto;
    padding: 1rem 0 0.5rem 0.05rem;
  }
  .menu-nav.hide-menu {
    -moz-transition: height 0.1s;
    -o-transition: height 0.1s;
    -webkit-transition: height 0.1s;
    transition: height 0.1s;
    height: 0;
    overflow: hidden;
    padding: 0;
  }

  .links-mobile {
    a {
      border: 1px solid #e0dfdf;
      border-radius: 24px;
      font-size: 0.8rem;
    }
  }

  .links-down {
    a {
      font-size: 0.8rem;
      img {
        margin-left: 0.8rem;
        max-height: 27px;
      }
    }
  }

  .botao-cart {
    background-color: #ff141f;
    border-radius: 25px;
    width: 180px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    transition: 0.2s ease-in-out;

    a {
      color: black !important;
    }

    img {
      margin-right: 10px;
      width: 20px;
      height: auto;
    }

    :hover {
      transition: 0.1s ease-in-out;
      background-color: #f50000;
      text-decoration: none;
      width: 185px;
      height: 45px;
      margin-right: -5px;
    }
  }

  @media only screen and (max-width: 992px) {
    .menu-nav {
      padding: 0.5rem 0 0.5rem 0.05rem;
      display: flex;
      flex-direction: column;
      a {
        padding: 0.5rem 0 0.5rem 0.2rem;
      }
    }

    .menu-scroll {
      transition: 0.2s ease-in-out;
      padding: 0.5rem !important;
    }

    .menu-top {
      transition: 0.2s ease-in-out;
      padding: 0.5rem !important;
    }
  }
`
