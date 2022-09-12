import { useRouter } from "next/router";
import Image from "next/image";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import Header from "../../src/components/header";
import BackButton from "../../src/ui/buttons/backButton";

const blogs = [
  {
    author: "Noah Milberger",
    img: "/noah.JPG",
    date: "November 12, 2021",
    tag: "Journey",
    title: "How I got Here",
    post: `Started Working
---------------

I was working at Texas Instruments as a Field Applications Engineer at the start of 2020. I was living in Waltham, MA, and learning a lot. My experience was as expected, working from an office where I spent most of my time either at my cubicle or in the electronics lab. I was only in the area temporarily for a six-month assignment as part of the new hire rotation program I was in. While in New England, things were going well, I was near my brother who had been living in Boston for the last couple of years and I met my now girlfriend who's sitting next to me as I write. At times it felt isolating living in a new location and not knowing a lot of people, after all, I was far from Metro Detroit where I grew up, but I made it work, and I had fun.

COVID
-----

My time in Massachusetts was coming to an end the last week of March 2020 and that date quickly grew closer. As the end of February came and left, the news of COVID started to grow, and the talks of an epidemic became more and more real. Cities like Seattle shut down, and the fear of being stuck in Massachusetts became legitimate. With the advice from my manager, I moved down to Dallas, TX to start my next rotation assignment a couple of weeks early. Little did I know that would be the last time I meet a manager of mine in person.

Now I was living in Dallas, with two roommates in the same rotation program as me. COVID was becoming more and more of a problem every day, and like many employees, I was working from home. It was a bummer, to say the least. I had been looking forward to meeting new people and making lasting memories during my summer in Dallas, the location of Texas Instruments headquarters. That dream came to a halt when the reality of life during a pandemic hit. My roommates and I made the most of the situation, having dinner together most nights and spending long hours stuck at the apartment playing games and reading. While the summer certainly could have been worse, it's safe to say it didn't live up to the expectations I had held. It was at this time that I started questioning what I was doing and whether or not I felt fulfilled. I had been struggling to come to terms with what my role required of me since the start of the rotation program in September of 2019. I became an Electrical Engineer with the hopes of creating the technology of the future, not to be a semiconductor salesman. I was struggling to find meaning behind the work I was doing. I hoped that by completing the rotation program and getting the chance to finally be in charge of my own accounts I would find the meaning that was missing. I struggled through the rest of the rotation program, hindered by thoughts of discontentment.

Finished the Rotation Program
-----------------------------

Finally, the last day of the rotation program passed and I moved back home to start on my new accounts out of our Southfield, MI office. Work was still fully remote, so I met all of my colleagues through a camera screen. As the days turned into weeks, my discontentment only grew. I put so much of my time and energy into a task that felt meaningless to me. Even though I grew to resent the role, I couldn't be happier with the way I was treated and the folks I was working with, so I endured.

Tragedy
-------

I wasn't very happy with my work and was starting to grow less happy in life as well. I wasn't the only one struggling. My brother in Boston had lost his job and had been unemployed for a few months. He was self-isolating and dealing with his anxiety and depression in unhealthy ways. I had been invited to go on a ski trip with some friends and was very excited. Going to Beaver Creek was one of the only things I had to look forward to at the time. I knew my brother loved to ski and I saw this as a great opportunity to get him out of his apartment and doing something he enjoyed with new people so I invited him along. The day finally came and I was sitting at the airport. I texted my brother asking if he was excited. After seeing my message he called me saying he was in bed sick and wouldn't be able to join the trip. I was devastated but decided not to let that ruin what I had planned. I went on the ski trip without him and although I missed him, I had a wonderful time.

It was Christmas Eve, less than a week after getting back from the ski trip. My brother still hadn't been feeling well and hadn't answered his phone in a few days. My mom was getting worried, so we called the police and had them do a wellness check on him. It was that night we found out he had passed away. I'd never be able to see him again.

Mental Health Issues
--------------------

After my brother passed away my mental health quickly declined and the small amount of willpower I had left for meaningless work was gone. I had a very hard time coping with my emotions and saw it have negative effects on my personal life. I decided to take some time off of work and got a therapist. Through therapy and setting healthy goals, I worked to better understand my emotions and get my mental health back to a place of stability. It took a long time for me to feel like I was back to normal, and even now I still battle with my mental health. After a few months of making my mental health my top priority, I finally decided to permanently leave my job at Texas Instruments in hopes of finding work that inspired me.

Inspiration
-----------

Through my journey of grief and the battle I've faced with my mental health, I've grown a lot. I've also learned a lot about what I'm looking for in work. I want to create a company and build technology that helps make people happy, technology that helps us better understand ourselves and makes us smile more. As much as I would have liked it, this was unobtainable at my previous job, so in the end, I had to leave. Since then, I have put my time and energy into learning the tools I need to make this dream a reality. I've chosen to take on full-stack web and mobile development as a means to build and innovate in the field of mental health. Since starting down this path I have learned a tremendous amount in areas such as React, React-Native, and AWS. I've started working on personal projects, projects with friends, and created a personal website for sharing everything I build and for hosting this blog!

Goals for the Future
--------------------

Now that I have some experience under my belt, I feel ready to start making an impact at startups focused on making the world better. I want to see the technology I build to improve the lives of those around me and the best way to get there is to put myself in the middle of it. Through experience working at startups and networking with folks in the industry, I hope to one day start my own company making technology that improves people's lives.

### Noah`,
  },
];

export default function Blog() {
  const router = useRouter();
  console.log("router.query: ", router.query);
  const { blogName } = router.query; // project entered in url
  console.log("blogName", blogName);
  const { author, img, date, tag, title, post } =
    blogs.find(({ title }) => _.kebabCase(title) === blogName) || blogs[0];
  return (
    <div className="flex flex-col w-screen min-h-screen items-center bg-gradient-to-r from-[#000000] to-[#141F2A] font-urbanist">
      <Header page="blog" />
      <div className="w-11/12 max-w-2xl">
        <div className="flex flex-col justify-center pb-8">
          <div className="flex-1 flex flex-col items-center max-w-2xl py-8 font-urbanist">
            <BackButton router={router} backTo="blog" />
          </div>
          <div
            key={author}
            className="flex flex-col justify-center text-white font-medium gap-8 rounded-xl p-8"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex gap-2">
                  <div className="text-purple-600">{tag}</div>
                  <div className="text-orange-600">{date}</div>
                </div>
                <div className="font-bold text-2xl">{title}</div>
              </div>
              <div className="flex min-w-fit items-center gap-4">
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
            </div>
            <ReactMarkdown>{post}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
