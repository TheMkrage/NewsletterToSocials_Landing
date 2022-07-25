/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import videoCalling from 'assets/images/video-calling.png';

const VideoCalling = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <SectionHeading
          title="Save Time & Connect with Your Audience"
          description="Every issue of your blog or newsletter can be converted into 10 - 20 posts on social media. Find new readers and interact with your existing readers."
          learnMore="Explore Documentation"
          moreLink='https://newslettertosocials.substack.com'
          sx={{ mb: [6] }}
        />
        <Box sx={styles.illustration}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/7TzyMaABQGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
      </Container>
    </section>
  );
};

export default VideoCalling;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 15],
    pb: [6, null, null, null, 10, 12],
  },
  illustration: {
    width: '50%',
    marginLeft: '25%',
    marginRight: '25%'
  },
};
