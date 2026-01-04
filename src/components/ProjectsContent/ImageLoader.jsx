
export default function ImageLoader({ imgAdress }) {
    return (
        <div className="flex justify-center">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/${imgAdress}`}
                    alt="Cannot load img"
                    className="sm:w-120 w-full rounded-2xl"
                    loading="lazy"
                />
            </div>
    );
}
