import { BlogType } from "../../../definations/apiTypes.ts";
import BlogCard from "./BlogCard.tsx";

const BlogCardGroup = ({ title, blogsArray }: { title: string, blogsArray: BlogType[] }) => {
    return (
        <div className={` container mx-auto px-8`}>
            <p className={`font-semibold mb-6 text-lg `}>{title}</p>
            <div className={`grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 ms-3`}>
                {
                    blogsArray.map(blog => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))
                }
            </div>
        </div>
    );
};

export default BlogCardGroup;