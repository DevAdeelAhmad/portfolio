import { getIntro } from "@/lib/data-fetch";
import IntroClient from "./intro-client";

export default async function Intro() {
  const introData = await getIntro();

  return <IntroClient introData={introData} />;
}
