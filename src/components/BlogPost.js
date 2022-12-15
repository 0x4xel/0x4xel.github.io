
import Link from "next/link";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import blogPosts from "../../json/posts.json"
export const BlogPost = () => {
  
    const { t } = useTranslation("common");

    return (
    <div className="section blog" id = "section-blog">
        <div className="content">

          <div className="title"><div className="title_inner">{t("blogpost.titulo")}</div></div>
          <div className="blog-items">

            {blogPosts.map((post, index) => (
                    <BlogCol key={index} index={index} post={post} />
            ))}

          </div>

          <div className="content-sidebar">
            <aside id="secondary" className="widget-area">
              <div id="search" className="widget widget_search">
                  <form className="search-form" method="GET">
                      <div className="search-form-label">
                          <input type="search" className="search-field" id="search-input" placeholder="Search ..." value="" />
                          <input type="submit" className="search-submit" value="Search ..." />
                      </div>
                      <ul id="results-container"></ul>
                  </form>
              </div>

              <section className="widget widget_recent_entries">
                  <h2 className="widget-title">{t("blogpost.titulo")}</h2>
                  <ul>

                      <li>
                          <a href="#">Welcome to Jekyll!</a>
                      </li>

                      <li>
                          <a href="#">By spite about do of do allow blush</a>
                      </li>

                      <li>
                          <a href="#">Two Before Arrow Not Relied</a>
                      </li>

                      <li>
                          <a href="#">Design in Mobile Application</a>
                      </li>

                  </ul>
              </section>
            </aside>
          </div>

          <div className="clear"></div>

        </div>
    </div>
    );
};

const BlogCol = ({ post: { title, body,
    imgUrl, author }, index }) => {
    return (
        <div className="blog-col">
        <div className="blog-item content-box">
            <div className="post">
                <div className="image">
                    <Link href="/blog_post"><a className="post-thumbnail">

                        <img src={imgUrl} className="wp-post-image" alt={title} />
                        <span className="info">
                            <span className="centrize full-width">
                                <span className="vertical-center">
                                    <span className="icon fas fa-plus"></span>
                                </span>
                            </span>
                        </span>
                    </a></Link>
                </div>
                <div className="desc">
                    <div className="date">
                        {title}, {author}
                    </div>
                    <Link href="/blog_post"><a className="name">{title}</a></Link>
                    <div className="single-post-text">
                        <p>{body}</p>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BlogPost;