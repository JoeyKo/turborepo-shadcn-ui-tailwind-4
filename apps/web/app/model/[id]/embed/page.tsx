import { LightboxViewer } from "@workspace/lightbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embed Page",
  description: "This is the embed page for displaying content.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  console.log(id)
  return <LightboxViewer />
}
