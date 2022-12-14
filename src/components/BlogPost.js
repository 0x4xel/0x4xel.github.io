
import Link from "next/link";
import dynamic from "next/dynamic";

export const BlogPost = () => {
    const blogPosts = [
        {
          title: "JAVASCRIPT",
          body: `JavaScript is the world most popular 
          lightweight, interpreted compiled programming 
          language. It is also known as scripting 
          language for web pages. It is well-known for 
          the development of web pages, many non-browser 
          environments also use it. JavaScript can be 
          used for Client-side developments as well as 
          Server-side developments`,
          author: "Nishant Singh ",
          imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        },
        {
          title: "Data Structure ",
          body: `There are many real-life examples of 
          a stack. Consider an example of plates stacked 
          over one another in the canteen. The plate 
          which is at the top is the first one to be 
          removed, i.e. the plate which has been placed 
          at the bottommost position remains in the 
          stack for the longest period of time. So, it 
          can be simply seen to follow LIFO(Last In 
          First Out)/FILO(First In Last Out) order.`,
          author: "Suresh Kr",
          imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
        },
        {
          title: "Algorithm",
          body: `The word Algorithm means “a process 
          or set of rules to be followed in calculations 
          or other problem-solving operations”. Therefore 
          Algorithm refers to a set of rules/instructions 
          that step-by-step define how a work is to be 
          executed upon in order to get the expected 
          results. `,
          author: "Monu Kr",
          imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        },
        {
          title: "Computer Network",
          body: `An interconnection of multiple devices, 
          also known as hosts, that are connected using 
          multiple paths for the purpose of sending/
          receiving data media. Computer networks can 
          also include multiple devices/mediums which 
          help in the communication between two different 
          devices; these are known as Network devices
          and include things such as routers, switches,
          hubs, and bridges. `, 
          author: "Sonu Kr",
          imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        },
    ];
      
    return (
    <div className="section blog">
        <div className="content">

          <div className="title"><div className="title_inner">Latest Posts</div></div>
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
                  <h2 className="widget-title">Latest Posts</h2>
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