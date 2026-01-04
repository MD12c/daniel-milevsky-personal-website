
export default function ImageLoader({ imgAdress }) {
    return (
        <div className="flex justify-center w-full">
                <img
                    src={`/daniel-milevsky-personal-website/portfolio-img/${imgAdress}`}
                    alt="Cannot load img"
                    className="sm:w-100 w-full rounded-2xl"
                />
            </div>
    );
}
