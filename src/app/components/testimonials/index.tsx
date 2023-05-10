import Image from "next/image"

export const Testimonials1 = () => {
    return (
        <div className="relative p-10 rounded-xl bg-purple-700">
            <Image className="
                absolute
                top-3
                right-10
                scale-125
                md:top-7
                md:right-24
                md:scale-150
            "
            width={100}
            height={100}
            src="/images/bg-pattern-quotation.svg"
            alt="" />

            <div className="flex z-10 space-x-4">
                <Image className="
                    w-10
                    h-10
                    rounded-full
                    ring-2
                    ring-purple-300
                "
                width={100}
                height={100}
                src="/images/image-daniel.jpg"
                alt="" />

                <div className="text-sm">
                    <h4 className="opacity-90">Daniel Clifford</h4>
                    <p className="opacity-50">Verified Graduate</p>
                </div>
            </div>

            <p className="relative z-10 mt-6 text-xl">
                I received a job offer mid-course, and the subjects I learned were current,
                if not more so, in the company I joined. I honestly feel I got every penny&apos;s worth.
            </p>

            <p className="mt-6 opacity-50">
            &quot;I was an EMT for many years before I joined the bootcamp. I&apos;ve been 
            looking to make a transition and have heard some people who had an amazing 
            experience here. I signed up for the free intro course and found it incredibly 
            fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most 
            grueling - time of my life. Since completing the course, I&apos;ve successfully 
            switched careers, working as a Software Engineer at a VR startup. Lorem ipsum 
            dolor sit amet consectetur...
            </p>
        </div>
    )
}
