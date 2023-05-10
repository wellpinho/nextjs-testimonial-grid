import Image from "next/image"

export const Testimonials1 = () => {
    return (
        <div className="relative p-10 rounded-xl bg-purple-700 m-1">
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

export const Testimonials2 = () => {
    return (
        <div className="p-10 rounded-xl bg-gray-600 m-1">
            <div className="flex space-x-4">
                <Image className="
                    w-10
                    h-10
                    rounded-full
                    ring-2
                    ring-purple-300
                "
                width={100}
                height={100}
                src="/images/image-jonathan.jpg"
                alt="" />

                <div className="text-sm">
                    <h4 className="opacity-90">Jonathan Walters</h4>
                    <p className="opacity-50">Verified Graduate</p>
                </div>
            </div>

            <p className="mt-6 text-xl">
                The team was very supportive and kept me motivated
            </p>

            <p className="mt-6 opacity-50">
            &quot;I started as a total newbie with virtually no coding skills. 
            I now work as a mobile engineer for a big company. This was one of the 
            best investments I&apos;ve made...
            </p>
        </div>
    )
}

export const Testimonials3 = () => {
    return (
        <div className="hidden md:block p-10 text-gray-900 rounded-xl bg-white m-1">
            <div className="flex space-x-4">
                <Image className="
                    w-10
                    h-10
                    rounded-full
                    ring-2
                    ring-purple-300
                "
                width={100}
                height={100}
                src="/images/image-kira.jpg"
                alt="" />

                <div className="text-sm">
                    <h4 className="opacity-90">Kira Whittle</h4>
                    <p className="opacity-50">Verified Graduate</p>
                </div>
            </div>

            <p className="mt-6 text-xl">
                Such a life-changing experience. Highly recommended!
            </p>

            <p className="mt-6 opacity-50">
                &quot;Before joining the bootcamp, I&apos;ve never written a line of code. 
                I needed some structure from professionals who can help me learn programming 
                step by step. I was encouraged to enroll by a former student of theirs who can 
                only say wonderful things about the program. The entire curriculum and staff 
                did not disappoint. They were very hands-on and I never had to wait long for 
                assistance. The agile team project, in particular, was outstanding. It took my 
                learning to the next level in a way that no tutorial could ever have. In fact, 
                I&apos;ve often referred to it during interviews as an example of my developent 
                experience. It certainly helped me land a job as a full-stack developer after 
                receiving multiple offers. 100% recommend!&quot;
            </p>
        </div>
    )
}

export const Testimonials4 = () => {
    return (
        <div className="p-10 rounded-xl text-gray-900 bg-white m-1">
            <div className="space-x-4">
                <Image className="
                    w-10
                    h-10
                    rounded-full
                    ring-2
                    ring-purple-300
                "
                width={100}
                height={100}
                src="/images/image-jeanette.jpg"
                alt="" />

                <div className="text-sm">
                    <h4 className="opacity-90">Jeanette Harmon</h4>
                    <p className="opacity-50">Verified Graduate</p>
                </div>
            </div>

            <p className="mt-6 text-xl">
                An overall wonderful and rewarding experience
            </p>

            <p className="mt-6 opacity-50">
            &quot;Thank you for the wonderful experience! I now have a job I really enjoy, 
            and make a good living while doing something I love.&quot;
            </p>
        </div>
    )
}