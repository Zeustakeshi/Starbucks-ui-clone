import React from "react";
import Button from "../components/Button/Button";
import Highlight from "../components/Highlight/Highlight";
import MainLayout from "../layout/MainLayout";

const About = () => {
    return (
        <MainLayout>
            <div className="max-w-[820px] px-[50px] mx-auto">
                <h1 className="my-10">
                    <Highlight isAnimation className="text-4xl py-2 px-1">
                        Our Company
                    </Highlight>
                </h1>
                <div className="my-3">
                    <img
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72908.jpg"
                        alt=""
                    />
                </div>
                <Para
                    title="Our Heritage"
                    imgPos="bottom"
                    imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72909.jpg"
                >
                    <Para>
                        Our story begins in 1971 along the cobblestone streets
                        of Seattle’s historic Pike Place Market. It was here
                        where Starbucks opened its first store, offering
                        fresh-roasted coffee beans, tea and spices from around
                        the world for our customers to take home. Our name was
                        inspired by the classic tale, “Moby-Dick,” evoking the
                        seafaring tradition of the early coffee traders.
                    </Para>
                    <Para>
                        Ten years later, a young New Yorker named Howard Schultz
                        would walk through these doors and become captivated
                        with Starbucks coffee from his first sip. After joining
                        the company in 1982, a different cobblestone road would
                        lead him to another discovery. It was on a trip to Milan
                        in 1983 that Howard first experienced Italy’s
                        coffeehouses, and he returned to Seattle inspired to
                        bring the warmth and artistry of its coffee culture to
                        Starbucks. By 1987, we swapped our brown aprons for
                        green ones and embarked on our next chapter as a
                        coffeehouse.
                    </Para>
                    <Para>
                        Ten years later, a young New Yorker named Howard Schultz
                        would walk through these doors and become captivated
                        with Starbucks coffee from his first sip. After joining
                        the company in 1982, a different cobblestone road would
                        lead him to another discovery. It was on a trip to Milan
                        in 1983 that Howard first experienced Italy’s
                        coffeehouses, and he returned to Seattle inspired to
                        bring the warmth and artistry of its coffee culture to
                        Starbucks. By 1987, we swapped our brown aprons for
                        green ones and embarked on our next chapter as a
                        coffeehouse.
                    </Para>
                    <Para>
                        Starbucks would soon expand to Chicago and Vancouver,
                        Canada and then on to California, Washington, D.C. and
                        New York. By 1996, we would cross the Pacific to open
                        our first store in Japan, followed by Europe in 1998 and
                        China in 1999. Over the next two decades, we would grow
                        to welcome millions of customers each week and become a
                        part of the fabric of tens of thousands of neighborhoods
                        all around the world. In everything we do, we are always
                        dedicated to Our Mission: to inspire and nurture the
                        human spirit – one person, one cup, and one neighborhood
                        at a time.
                    </Para>
                </Para>
                <Para
                    title="Coffee & Craft"
                    buttonLabel="Learn more"
                    buttonLink="https://stories.starbucks.com/stories/coffee-craft/"
                >
                    It takes many hands to craft the perfect cup of coffee –
                    from the farmers who tend to the red-ripe coffee cherries,
                    to the master roasters who coax the best from every bean,
                    and to the barista who serves it with care. We are committed
                    to the highest standards of quality and service, embracing
                    our heritage while innovating to create new experiences to
                    savor.
                </Para>
                <Para
                    title="Our Partners"
                    buttonLabel="Explore Careers"
                    buttonLink="https://www.starbucks.com/careers/"
                    imgPos="top"
                    imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72910.jpg"
                >
                    We like to say that we are not in the coffee business
                    serving people, but in the people business serving coffee.
                    Our employees – who we call partners – are at the heart of
                    the Starbucks experience. We are committed to making our
                    partners proud and investing in their health, well-being and
                    success and to creating a culture of belonging where
                    everyone is welcome.
                </Para>
                <Para
                    title="We Believe in the Pursuit of Doing Good"
                    imgPos="top"
                    imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72911.jpg"
                >
                    As it has been from the beginning, our purpose goes far
                    beyond profit. We believe Starbucks can, and should, have a
                    positive impact on the communities we serve.
                </Para>
                <Para
                    title="People"
                    titleSize="sm"
                    buttonLabel="Learn more"
                    buttonLink="https://stories.starbucks.com/stories/people/"
                >
                    Our aspiration is to be people positive – investing in
                    humanity and the well-being of everyone we connect with,
                    from our partners to coffee farmers to the customers in our
                    stores and beyond.
                </Para>
                <Para
                    title="Planet"
                    titleSize="sm"
                    buttonLabel="Learn more"
                    buttonLink="https://stories.starbucks.com/stories/planet/"
                >
                    We are striving to become resource positive – giving back
                    more than we take from the planet. We are working to store
                    more carbon than we emit, replenish more freshwater than we
                    use, and eliminate waste. We know we can’t do it alone. It
                    takes all of us.
                </Para>
                <Para title="Learn More About Us"></Para>
                <Para
                    title="Stories & News"
                    buttonLabel="Check out Starbucks Stories"
                    buttonLink="https://stories.starbucks.com/"
                    titleSize="sm"
                >
                    Behind every cup of coffee is a story. Enjoy some of our
                    favorites along with all the latest news from the
                    storytellers at Starbucks Stories.
                </Para>
                <Para
                    titleSize="sm"
                    title="Company Profile"
                    buttonLabel="Learn more"
                    buttonLink="https://stories.starbucks.com/press/2019/company-profile/"
                >
                    Here’s a closer look at our company.
                </Para>

                <Para
                    titleSize="sm"
                    title="Company Timeline"
                    buttonLabel="Learn more"
                    buttonLink="https://stories.starbucks.com/press/2019/company-profile/"
                >
                    Read a brief history of Starbucks, from 1971 through today.
                </Para>
            </div>
        </MainLayout>
    );
};

interface IPara {
    children?: React.ReactNode;
    imgSrc?: string;
    imgPos?: "top" | "bottom";
    buttonLabel?: string;
    title?: string;
    buttonLink?: string;
    titleSize?: "lg" | "md" | "sm";
}

const Para = ({
    title,
    imgSrc,
    imgPos,
    buttonLabel,
    buttonLink,
    titleSize = "md",
    children,
}: IPara) => {
    return (
        <div className="">
            {title && (
                <h2 className="my-10 mb-6">
                    <Highlight
                        className={`${
                            titleSize === "lg"
                                ? "text-4xl"
                                : titleSize === "md"
                                ? "text-3xl"
                                : "text-xl"
                        }`}
                    >
                        {title}
                    </Highlight>
                </h2>
            )}
            {imgSrc && imgPos === "top" && (
                <div className="my-16">
                    <img src={imgSrc} alt="" />
                </div>
            )}
            {children && <div className=" text-base my-4">{children}</div>}
            {imgSrc && imgPos === "bottom" && (
                <div className="my-16">
                    <img src={imgSrc} alt="" />
                </div>
            )}
            {buttonLabel && (
                <Button
                    style={{ marginTop: 10, marginBottom: 40 }}
                    type="secondary"
                    to={buttonLink}
                >
                    {buttonLabel}
                </Button>
            )}
        </div>
    );
};

export default About;
