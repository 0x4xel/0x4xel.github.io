import { ImagePageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import Markdown from 'markdown-to-jsx';
import { render } from 'react-dom';

const BlogPost = (post) => {
  post = {
    "title": "JAVASCRIPT",
    "body": "JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments",
    "author": "Nishant Singh ",
    "imgUrl":"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png"
  }
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Design</a> / 20 July 2020</span>",
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={post.title}
        typingData={typingAnimation}
        bannerImg="images/blog/blog_4.jpg"
      />

      <div className="section blog">
        <div className="content">

          <div className="post">
            <div className="content-box">

              <div className="single-post-text">
              <Markdown>### Hello world!
                aaa
                # section
              </Markdown>
              </div>

              <div className="post-text-bottom">
                <div className="social-share">
                  <span>Share:</span>
                  <a className="share-btn share-btn-facebook share-btn-1" title="Share on Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a className="share-btn share-btn-twitter share-btn-2" title="Share on Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="share-btn share-btn-linkedin share-btn-3" title="Share on Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a className="share-btn share-btn-reddit share-btn-4" title="Share on Reddit">
                    <i className="fab fa-reddit"></i>
                  </a>
                  <a className="share-btn share-btn-pinterest share-btn-5" title="Share on Pinterest">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
                <div className="cat-links">
                  <span>Posted in </span>
                  <a href="/categories/design">Design</a>
                  <span className="byline"> / by <span className="author">Ryan Adlard</span></span>
                </div>
                <div className="tags-links">
                  <span>Tags:</span>
                  <a href="/tags/code" rel="tag">code</a>
                </div>
              </div>

            </div>
          </div>

          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#" title="Design in Mobile Application"><span className="post-nav-next post-nav-text">Prev</span></a>
              </div>
              <div className="nav-next">
                <a href="#" title="By spite about do of do allow blush"><span className="post-nav-prev post-nav-text">Next</span></a>
              </div>
            </div>
          </nav>

          <div className="clear"></div>
        </div>
      </div>

    </Layout>
  );
};
export default BlogPost;
