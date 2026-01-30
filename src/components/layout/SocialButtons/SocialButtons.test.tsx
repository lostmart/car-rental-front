import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"
import SocialButtons from "./SocialButtons"
import UrlLink from "../../../interfaces/UrlLink"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

describe('Social Buttons', () => {
  it('renders correctly for empty list', () => {
    const { container } = render(<SocialButtons socialList={[]} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly for populated list', () => {
    const links: UrlLink[] = [
      { urlLink: 'https://www.facebook.com', icon: FaFacebook },
      { urlLink: 'https://www.twitter.com', icon: FaTwitter }
    ];
    const { container } = render(<SocialButtons socialList={links} />);
    expect(container).toMatchSnapshot();
  });

  it('renders link components with correct href attributes', () => {
    const links: UrlLink[] = [
      { urlLink: 'https://www.facebook.com', icon: FaFacebook },
      { urlLink: 'https://www.twitter.com', icon: FaTwitter },
      { urlLink: 'https://www.instagram.com', icon: FaInstagram }
    ];
    const { container } = render(<SocialButtons socialList={links} />);

    const anchors = container.querySelectorAll('a');
    expect(anchors).toHaveLength(3);
    expect(anchors[0]).toHaveAttribute('href', 'https://www.facebook.com');
    expect(anchors[1]).toHaveAttribute('href', 'https://www.twitter.com');
    expect(anchors[2]).toHaveAttribute('href', 'https://www.instagram.com');
  });

  it('renders icon components', () => {
    const links: UrlLink[] = [
      { urlLink: 'https://www.facebook.com', icon: FaFacebook }
    ];
    const { container } = render(<SocialButtons socialList={links} />);

    const svgs = container.querySelectorAll('svg');
    expect(svgs).toHaveLength(1);
  });
});
