import { 
  Testimonials1, 
  Testimonials2, 
  Testimonials3, 
  Testimonials4, 
  Testimonials5,
  Testimonials6
} from "./components/testimonials";

export default function Home() {
  return (
    <main className="
      container 
      mx-auto
    ">
      <div className="
        text-white  
          md:p-10   
          grid
          gap-3
          grid-cols-1
          md:grid-cols-4
          md:grid-rows-2
          md:flex-row
          justify-between
        ">
        <Testimonials1 />
        <Testimonials2 />
        <Testimonials3 />
        <Testimonials4 />
        <Testimonials5 />
        <Testimonials6 />
      </div>
    </main>
  )
}
