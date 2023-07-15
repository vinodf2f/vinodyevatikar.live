import NextHead from "next/head";

type IHeadProps = {
  title?: string;
  description?: string;
};

const defaultTitle = "Vinod Yevatikar - A frontend developer(Mobile+Web)";
const defaultDescription =
  "I am a frontend developer with 4+ years of experience in building web and mobile applications. I am passionate about building scalable, maintainable and performant applications using latest technologies.";

export const Head = ({ title = "", description = "" }: IHeadProps) => {
  const _title = !!title ? `${title} | ${defaultTitle}` : defaultTitle;
  const _description = description || defaultDescription;
  const keywordsString =
    "Vinod yevatikar, frontend developer, mobile developer, React Native developer,";
  return (
    <NextHead>
      <title>{_title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content={defaultTitle} />
      <meta name="keywords" content={keywordsString} />
      <meta name="description" content={_description} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </NextHead>
  );
};
