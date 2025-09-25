import { PostMeta } from '@/data/Post';

const md = `
# It's been a while

I haven't made a blog in a few years, but, I felt it was finally time to write again.  And in a world filled with AI generated content -- I will write manually.

I'm going to try to keep this post short and just give some brief updates on what I'm working on, learning and thinking about.

## In Progress

So, it has been about 2 and a half months since I've been [laid off](https://www.cbsnews.com/news/indeed-glassdoor-layoffs-ai-job-search/) from Indeed.  This has given me some time to study up on some new-to-me technologies as well as apply to quite a few job positions out there.

In the future, I'd like to make a post with some nice graphs on the data from my current job search.  But, for now -- if anyone is interested in hiring me please reach out on [LinkedIn](https://www.linkedin.com/in/timmendenhall/).

Here's a quick breakdown of some things I'd like to get done development wise in the future:

### Idlesaur

Continue developing an open-source idle game [idlesaur.com](https://idlesaur.com) - This has been the bulk of my free time development lately.  It's using some of the latest technology like:

* Next.js
* Prisma ORM with Postgres SQL
* React Server Components

### Portfolio page

* Re-add the "work" section
* Keep working on blog posts
* _Maybe_ apply some styling updates
 
### Game Development

Prior to the layoffs, I was having a great time working in Godot and I'd like to get back into it.  I've been thinking of various project ideas to start up as the last project I was working is a bit too much of a scope for now.  

But, like with the idlesaur.com project, I plan on finding more ways to combine my passion for game development into my web development projects too.

## Wrap up

That's all for now -- Thank you for reading and I hope you have a great day!
`;

export default function (): PostMeta {
    return {
        slug: 'first-post',
        title: 'First post',
        description:
            "I haven't made a blog in a few years, but, I felt it was finally time to write again.  And in a world filled with AI generated content -- I will write manually.",
        date: 1758826820669,
        md,
    };
}
