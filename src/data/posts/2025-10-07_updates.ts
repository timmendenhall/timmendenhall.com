import { PostMeta } from '@/data/Post';

const md = `
# Some Quick Updates

If anyone is paying attention to my Github profile, you may have noticed I have missed a week or so.  I'm starting to work on a new Godot project with a bit of borrowed code from the last project. 

But, the last couple of days I've also spent working on my portfolio again.  I'm wanting to re-add the original work section content with some styling updates and eventually add some other current in-progress work as well to the work section.

# Wrap Up

Not a lot to say today, but, I do plan on making some small updates here until I'm happy enough with the portfolio site and blog.  
`;

export default function (): PostMeta {
    return {
        slug: 'updates',
        title: 'Updates',
        description:
            "I haven't made a blog in a few years, but, I felt it was finally time to write again.  And in a world filled with AI generated content -- I will write manually.",
        date: 1759861668636,
        md,
    };
}
