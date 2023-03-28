import React from "react";
import Link from "next/link";
import styles from './index.module.css';

export const Footer = () => {
  return (
    <footer className="footer-area" id="new-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src="/images/logo.png" alt="logo" />
            <h4>Ready to make the move?</h4>
            <span>
              Join hundreds of Kiwi business owners who are living the BOM life
            </span>
            <ul className="d-flex">
              <li>
                <Link href="/#">
                  <a target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="#">Who</Link>
              </li>
              <li>
                <Link href="#">What</Link>
              </li>
              <li>
                <Link href="#">How much</Link>
              </li>
              <li>
                <Link href="#">Academy</Link>
              </li>
              <li>
                <Link href="#">Say Hey</Link>
              </li>
              <li>
                <Link href="#">Book a call</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Stay in the loop</h3>
            <form>
              <input name="email" placeholder="EMAIL ADDRESS" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
