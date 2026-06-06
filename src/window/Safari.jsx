import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  Search,
  ShieldHalf,
  Share,
  Copy,
  Plus,
  MoveRight,
} from "lucide-react";
import { blogPosts } from "#constants";
const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target={"safari"} />

        <PanelLeft className="icon ml-10"></PanelLeft>

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon"></ChevronLeft>
          <ChevronRight className="icon"></ChevronRight>
        </div>

        <div className=" flex-1 flex-center gap-3">
          <ShieldHalf className="icon"></ShieldHalf>
          <div className="search">
            <input type="search flex-1" placeholder="Search or Enter website" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Share className="icon"></Share>
          <Plus className="icon"></Plus>
          <Copy className="icon"></Copy>
        </div>
      </div>

      <div className="blog">
        <h2>My Developer Blog</h2>

        <div className="space-y-8">
          {blogPosts.map(({ id, date, title, image, link }) => (
            <div className="blog-post" key={id}>
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{date}</p>
                <h2>{title}</h2>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Check out the full post
                  <MoveRight className="hover-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
