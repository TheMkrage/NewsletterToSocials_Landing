/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import news1 from 'assets/images/blog/1.png';
import news2 from 'assets/images/blog/2.png';
import news3 from 'assets/images/blog/3.png';
import news4 from 'assets/images/blog/4.png';

const data = [
  {
    id: 1,
    image: news1,
    title: 'Top 5 Social Media Tools for Newsletter Creators',
    desc:
      'Why do it all yourself? Use tools to save time while promoting your newsletter.',
    link: 'https://newslettertosocials.com/blog/top-5-social-media-tools-for-newsletter-creators-cl603rqu765201jpb40n0we7j',
  },
  {
    id: 2,
    image: news2,
    title:
      'Why Social Media is the Best way to Grow your Newsletter',
    desc: 'It\'s no secret that social media is kind of a big deal. Many writers that I have talked to mention Facebook Groups as a large source of incoming traffic and subscribers. This is an awesome way to make connections, but Facebook Groups are really just the tip of the iceberg in how social media can help grow a newsletter.',
    link: 'https://newslettertosocials.com/blog/why-social-media-is-the-best-way-to-grow-your-newsletter-cl61ma66m13041ko9ad39bbqp',
  },
  {
    id: 3,
    image: news3,
    title: 'Growing your Newsletter on Instagram',
    desc: '',
    link: 'https://newslettertosocials.com/blog/the-best-way-to-grow-your-newsletter-on-instagram-cl61na8v223671ko998dalfvn',
  },
  {
    id: 4,
    image: news4,
    title: 'A Newsletter to Socials Case Study: Year 2049',
    desc: '',
    link: 'https://newslettertosocials.com/blog/a-newsletter-to-socials-case-study-year-2049-cl61kxdbu09151ko9kzl24uca',
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Latest newsfeed"
          title="Our recent blog post that updated"
        />
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    backgroundColor: '#353448',
    pt: [6, null, null, null, 2, 10, 14],
    pb: [2, null, null, null, 6, 10, 14],
  },
  heading: {
    mb: [6, null, null, 14],
    h3: {
      color: 'white',
    },
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
