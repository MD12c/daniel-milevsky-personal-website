
export default function VideoLoader({ videoAdress }) {
    return (
        <div className="flex justify-center w-full">
                <video
                    className="rounded-2xl"
                    width="320" height="240"
                    controls
                >
                    <source 
                    src={`/daniel-milevsky-personal-website/portfolio-img/videos/${videoAdress}`}
                    type="video/mp4"
                    />
                </video>
            </div>
    );
}