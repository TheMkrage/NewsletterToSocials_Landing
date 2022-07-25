/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import FaqItem from 'components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: 'How does Newsletter to Socials save me time?',
    ans: `Newsletter to Socials will auto-generate social media content so there is no need to open Canva or Adobe Illustrator. It will also schedule posts days or weeks in advance so you can focus on what you love most, writing!`,
  },
  {
    id: 2,
    ques: 'What blogging and newsletter platforms does it work with?',
    ans: `We support any publication that is sent out through email or has an RSS feed. This includes most major hosting sites such as Substack, Ghost, Wordpress, etc.`,
  },
  {
    id: 3,
    ques: 'How does Newsletter to Socials auto-generate social media content?',
    ans: `Newsletter to Socials will scan your written content for tidbits of engaging content such as stats, quotes, and questions. These excepts can be used in image posts and text posts.`,
  },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: 15 }}
          slogan="Get your questions answered"
          title="Frequently Asked Questions"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [null, null, null, null, null, 10, 14],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
};
