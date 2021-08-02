// Next Components
import Image from "next/image";
import Link from "next/link";

// CSS
import websiteScreenshotStyle from "../../../styles/components/ProjectPage/WebsiteScreenshot.module.css";

const WebsiteScreenshot = ({ screenshot }: any) => {
  return (
    <>
      <p className={websiteScreenshotStyle.title}>Website Screenshot :</p>
      <div className={websiteScreenshotStyle.websiteScreenshot}>
        {screenshot.map((websiteScreenshot: any) => (
          <div
            key={websiteScreenshot.websiteScreenshot}
            className={websiteScreenshotStyle.image}
          >
            <Link href={websiteScreenshot.websiteScreenshot} passHref>
              <a>
                  <Image
                    src={websiteScreenshot.websiteScreenshot}
                    alt="Website Screenshot"
                    height="150"
                    width="320"
                  />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default WebsiteScreenshot;
