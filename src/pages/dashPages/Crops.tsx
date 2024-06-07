import DashMenuLayout from "../../components/DashMenuLayout.tsx";
import BlogCardGroup from "../../components/BlogCardGroup.tsx";

const Crops = () => {
    return (
        <div>
            <DashMenuLayout title={`Crops`}>
                <BlogCardGroup/>
            </DashMenuLayout>
        </div>
    );
};

export default Crops;