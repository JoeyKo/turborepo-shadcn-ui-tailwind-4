import { LightboxViewer } from "@workspace/lightbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embed Page",
  description: "This is the embed page for displaying content.",
};

interface EmbedPageProps {
  id: string;
}

const EmbedPage: React.FC<EmbedPageProps> = ({ id }) => {
  console.log(id);
  return (
    <>
      <LightboxViewer />
    </>
  );
};

export default EmbedPage;
