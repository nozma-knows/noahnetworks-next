import Image from "next/image";
import { useRouter } from "next/router";
import _ from "lodash";
import Header from "../src/components/header";
import PageTitle from "../src/components/pageTitle";

const blogs = [
  {
    author: "Noah Milberger",
    img: "/noah.JPG",
    date: "November 12, 2021",
    tag: "Journey",
    title: "How I got Here",
    firstSentence: `I was working at Texas Instruments as a Field Applications Engineer at the start of 2020.`,
  },
];

export default function Blog() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#000000] to-[#18251C] font-urbanist">
      <Header page="blog" />
      <div className="flex-1 flex flex-col items-center p-8 gap-8">
        <PageTitle title="Noah's Narrative" />
        {blogs.map((blog) => {
          const { author, img, date, tag, title, firstSentence } = blog;
          return (
            <div
              key={author}
              className="flex items-center text-white font-medium gap-8"
            >
              <div className="flex flex-col min-w-fit justify-center items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full">
                  <Image
                    className="rounded-full"
                    src={img}
                    width="100%"
                    height="100%"
                    alt={`Author image - ${author}`}
                  />
                </div>
                <div>{author}</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <div className="text-purple-600">{tag}</div>
                  <div className="text-orange-600">{date}</div>
                </div>
                <div className="font-bold text-2xl">{title}</div>
                <div>{firstSentence}</div>
                <div
                  className="w-fit hover:underline cursor-pointer"
                  onClick={() => router.push(`/blog/${_.kebabCase(title)}`)}
                >
                  Read more
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
